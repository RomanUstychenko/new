import React, { useState } from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../redux/store";
import { getSecondaryItems } from "../../../redux/item/item-selector";
import { Modal } from "../../common/modal/modal";
import ModalAddItem from "../../modals/addItem/modalAddItem";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface SecondaryItemsProps {
    openSecondaryFolderId: string | null;
  }

  
export const SecondaryItems: React.FC<SecondaryItemsProps> = ({openSecondaryFolderId}) => {

    const secondaryItems = useTypedSelector(getSecondaryItems);
    const [modalActive, setModalActive] = useState<boolean>(false);

    const closeModal = () => {
      setModalActive(false)
      
    }

    return (

        <div>
  {modalActive && (
            <Modal
            active={modalActive}
            setActive={setModalActive}
            onClick={closeModal}
              >
<ModalAddItem 
openFolderId={openSecondaryFolderId}
closeModal={closeModal}
isSecondaryItem={true}
/>
            </Modal>
        )}
<button onClick={() => setModalActive(true)}>add secondary items</button>
<ul>
             {secondaryItems.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
             ))}

          </ul>
        </div>
    )
}
