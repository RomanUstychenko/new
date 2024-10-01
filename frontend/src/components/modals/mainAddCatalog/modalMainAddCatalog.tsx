import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectIsLoading } from '../../../redux/mainCatalog/mainCatalog-selector';
import { addMainCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';

import { ModalForm } from './modalMainAddCatalog.styled';
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


interface ModalProps {
    
    closeModal: () => void;
    
  }
const  ModalMainAddCatalog: React.FC <ModalProps>= ({closeModal}) => {

    const loading = useTypedSelector(selectIsLoading);
    const [name, setName] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
          alert('Please fill in all fields');
          return;
        }
        dispatch(addMainCatalog({ name }));
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


export default ModalMainAddCatalog;