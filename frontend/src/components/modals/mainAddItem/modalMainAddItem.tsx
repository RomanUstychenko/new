import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectIsLoading } from '../../../redux/mainCatalog/mainCatalog-selector';
import { addMainItem } from '../../../redux/item/item-operation';
// import { addSecondaryCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
// import { ModalForm } from './modalSecondaryAddCatalog.styled';
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


interface ModalProps {
    openFolderId: string | null;
    closeModal: () => void;
    
  }
const  ModalMainAddItem: React.FC <ModalProps>= ({closeModal, openFolderId}) => {


    const dispatch = useDispatch<AppDispatch>();
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const loading = useTypedSelector(selectIsLoading);


    const handleSubmitItem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!itemName) {
          alert('Please fill in all fields');
          return;
        }
        dispatch(addMainItem({ 
            catalog: openFolderId, 
            name: itemName, 
            description: itemDescription, 
            price: itemPrice}));
        console.log("openFolderId", openFolderId)
        // dispatch(fetchMainItems(openFolderId))
        // setName('');

        closeModal()
      };



    return (
        <form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmitItem}>
        <div>
          <label htmlFor="name">Item Name:</label>
          <input
            type="text"
            id="name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Item Price:</label>
          <input
            type="text"
            id="price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Item Description:</label>
          <input
            type="text"
            id="Description"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add MainItem'}
        </button>
      </form>
    )
}

export default ModalMainAddItem;