import React, { useState } from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../redux/store";
import { getSecondaryItems } from "../../../redux/item/item-selector";
import { Modal } from "../../common/modal/modal";
import ModalAddItem from "../../modals/addItem/modalAddItem";
import { getButtonStatus } from "../../../redux/button/button-selector";
import {Wrapper, SecondaryItemsWrap } from "./secondaryItems.styled";
import { ButtonWrap, ButtonItemIcon, Button, ButtonText } from "../../common/generalStyle/addCatalogItemButton.styled";
import ItemList from "../../common/itemsList/itemsList";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface SecondaryItemsProps {
    openSecondaryFolderId: string | null;
  }

  
export const SecondaryItems: React.FC<SecondaryItemsProps> = ({openSecondaryFolderId}) => {

    const secondaryItems = useTypedSelector(getSecondaryItems);
    const buttonStatus = useTypedSelector(getButtonStatus);
    const [modalActive, setModalActive] = useState<boolean>(false);

    const closeModal = () => {
      setModalActive(false)
      
    }
console.log("buttonStatus", buttonStatus)
    return (

        <Wrapper>
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
        {buttonStatus === openSecondaryFolderId && (
          <ButtonWrap>
          <ButtonItemIcon />
          <Button onClick={() => setModalActive(true)}>
            <ButtonText>Add Item</ButtonText>
            </Button>
          </ButtonWrap>
          
        )}
<SecondaryItemsWrap>
<ItemList 
items={secondaryItems}
/>
</SecondaryItemsWrap>
        </Wrapper>
    )
}
