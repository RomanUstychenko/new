import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectIsLoading } from '../../../redux/mainCatalog/mainCatalog-selector';
// import { addMainCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
import { addSecondaryCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
import { ModalForm } from './modalSecondaryAddCatalog.styled';
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


interface ModalProps {
    openFolderId: string | null;
    closeModal: () => void;
    
  }
const  ModalSecondaryAddCatalog: React.FC <ModalProps>= ({closeModal, openFolderId}) => {

    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState('');

    const loading = useTypedSelector(selectIsLoading);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
          alert('Please fill in all fields');
          return;
        }
        dispatch(addSecondaryCatalog({ openFolderId, name }));
        console.log("openFolderId", openFolderId)
        setName('');
        closeModal()
      };

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

export default ModalSecondaryAddCatalog;