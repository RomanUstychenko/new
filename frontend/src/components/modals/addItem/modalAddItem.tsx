import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectIsLoading } from '../../../redux/mainCatalog/mainCatalog-selector';
import { addSecondaryItem } from '../../../redux/item/item-operation';
import { addMainItem } from '../../../redux/item/item-operation';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


interface ModalProps {
    openFolderId: string | null;
    closeModal: () => void;
    isSecondaryItem: boolean;
  }

  interface FormField {
    key: string;
    value: string;
  }
  
const  ModalAddItem: React.FC <ModalProps>= ({closeModal, openFolderId, isSecondaryItem}) => {


    const dispatch = useDispatch<AppDispatch>();
    const loading = useTypedSelector(selectIsLoading);
    const [formFields, setFormFields] = useState<FormField[]>([
      { key: 'name', value: '' },
      { key: 'price', value: '' },
      { key: 'description', value: '' },
    ]);


    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
      const { name, value } = e.target;
  setFormFields(prevFields =>
        prevFields.map(field =>
          field.key === name ? { ...field, value: value } : field
        )
      );
    };

    const result = formFields.reduce<Record<string, string>>((acc, item) => {
      if (item.value !== '' || item.key === 'name' || item.key === 'price') {
        acc[item.key] = item.value;
      }
      return acc;
    }, {});

    console.log("result", result)
    const getFieldValue = (key: string) => {
      return formFields.find(field => field.key === key)?.value || '';
    };
    const handleSubmitItem = async (e: React.FormEvent) => {
        e.preventDefault();
      
        if (!openFolderId) {
          alert('Catalog ID is missing');
          return;
      }

  try {
    if (isSecondaryItem) {
      await dispatch(addSecondaryItem({
          catalog: openFolderId,
          fields: result,
      }));
  } else {
      await dispatch(addMainItem({
          catalog: openFolderId,
          fields: result,
      }));
  }
        setFormFields(prevFields => 
          prevFields.map(field => ({ ...field, value: '' }))
        );
        closeModal();
    
  } catch (error) {
    console.error("Помилка при додаванні елемента:", error);
  }
      };


    return (
        <form 
        onClick={e => e.stopPropagation()}
        onSubmit={handleSubmitItem}>

{formFields.map((field) => (
        <div key={field.key}>
          <label htmlFor={field.key}>{field.key.charAt(0).toUpperCase() + field.key.slice(1)}:</label>
          <input
            type="text"
            id={field.key}
            name={field.key}
            required={field.key === "name" || field.key === "price"}
            value={getFieldValue(field.key)}
            onChange={handleFieldChange}
          />
        </div>
      ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add SecondaryItem'}
        </button>
      </form>
    )
}

export default ModalAddItem;