import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectIsLoading } from '../../../redux/mainCatalog/mainCatalog-selector';
import { addMainCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
import { addSecondaryCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
import { ModalForm } from './modalAddCatalog.styled';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


interface ModalProps {
    openFolderId: string | null;
    closeModal: () => void;
    isSecondary: boolean;
  }
const  ModalAddCatalog: React.FC <ModalProps>= ({closeModal, openFolderId, isSecondary}) => {

    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState('');

    const loading = useTypedSelector(selectIsLoading);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
          alert('Please fill in all fields');
          return;
        }
        if (isSecondary) {
        dispatch(addSecondaryCatalog({ openFolderId, name }));
        console.log("openFolderId", openFolderId)
        
      } else {
        console.log("else")
        dispatch(addMainCatalog({ name }));
      }
      setName('');
        closeModal()
    } 

    return (
<ModalForm 
onClick={e => e.stopPropagation()}
onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Catalog Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Catalog'}
        </button>
      </ModalForm>
    )
}

export default ModalAddCatalog;