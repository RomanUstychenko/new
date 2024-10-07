import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../../redux/store";
import { MainItems } from "../../items/mainItems/mainItems";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../redux/store";
// import { selectIsLoading } from "../../../redux/mainCatalog/mainCatalog-selector";
// import { fetchSecondaryCatalog } from "../../../redux/mainCatalog/mainCatalog-operation";
import { getSecondaryCatalogs } from "../../../redux/mainCatalog/mainCatalog-selector";
import { Modal } from "../../common/modal/modal";
import ModalAddCatalog from "../../modals/addCatalog/modalAddCatalog";
// import ModalMainAddItem from "../../modals/mainAddItem/modalMainAddItem";
import ModalAddItem from "../../modals/addItem/modalAddItem";
import { CatalogsWrap, CatalogList } from "./secondaryCatalogs.styled";

import { ButtonsWrap,
  ButtonWrap,
  ButtonFolderIcon,
  ButtonItemIcon,
  Button,
  ButtonText, } from "../../common/generalStyle/addCatalogItemButton.styled"; 
import { SecondaryItems } from "../../items/secondaryItems/secondaryItems";
import { fetchSecondaryItems } from "../../../redux/item/item-operation";
import OpenCloseIcon from "../../common/openCloseIcon/openCloseIcon";
import { getButtonStatus } from "../../../redux/button/button-selector";
import { setButton } from "../../../redux/button/button-slice";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface SecondaryCatalogsProps {
    openFolderId: string | null;
  }

export const SecondaryCatalogs: React.FC<SecondaryCatalogsProps> = ({openFolderId}) => {

  const dispatch = useDispatch<AppDispatch>();
  
    const secondaryCatalogs = useTypedSelector(getSecondaryCatalogs);
    const buttonStatus = useTypedSelector(getButtonStatus);

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalActiveItem, setModalActiveItem] = useState<boolean>(false);

    const [openSecondaryFolderId, setOpenSecondaryFolderId] = useState<string | null>(null);

    const closeModal = () => {
        setModalActive(false)
        setModalActiveItem(false)
      }
    
      const handleFolderClick = (id: string, e: React.FormEvent) => {
        e.preventDefault();
        
const newOpenFolder = openSecondaryFolderId === id ? null : id;
setOpenSecondaryFolderId(newOpenFolder);

        console.log("newOpenFolder", newOpenFolder)
        // dispatch(fetchSecondaryCatalog(newOpenFolder));
        dispatch(fetchSecondaryItems(newOpenFolder))

console.log("відкрита головна папка", openFolderId)
console.log("buttonStatus", buttonStatus)
console.log("відкрита другорядна папка", id)
        if (buttonStatus === id) {
          console.log("if")
          dispatch(setButton(openFolderId));
        } else {
          console.log("else")
        dispatch(setButton(newOpenFolder))
        }
        
    };
    
    return (

        <CatalogsWrap>
             {modalActive && (
            <Modal
            active={modalActive}
            setActive={setModalActive}
            onClick={closeModal}
              >
<ModalAddCatalog 
openFolderId={openFolderId}
closeModal={closeModal}
isSecondary={true}
/>
            </Modal>
        )}
     {modalActiveItem && (
            <Modal
            active={modalActiveItem}
            setActive={setModalActiveItem}
            onClick={closeModal}
              >
<ModalAddItem 
openFolderId={openFolderId}
closeModal={closeModal}
isSecondaryItem={false}
/>
            </Modal>
        )}
{buttonStatus === openFolderId && (
  <ButtonsWrap>
        <ButtonWrap>
      <ButtonFolderIcon />
      <Button onClick={() => setModalActive(true)}>
       <ButtonText>Add Catalog</ButtonText> 
        </Button>
        </ButtonWrap>
        <ButtonWrap>
      <ButtonItemIcon />
      <Button onClick={() => setModalActiveItem(true)}>
       <ButtonText>Add Item</ButtonText> 
        </Button>
        </ButtonWrap>
</ButtonsWrap>
)}
        
<ul>
             {secondaryCatalogs.map(catalog => (
          <li key={catalog.id}>
            
            <CatalogList onClick={(e) => handleFolderClick(catalog.id, e)}> 
          <OpenCloseIcon 
            openFolderId={openSecondaryFolderId}
            catalog={catalog.id}
            />
             <p>{catalog.name}</p> </CatalogList>
             {openSecondaryFolderId === catalog.id && 
          <SecondaryItems 
          openSecondaryFolderId={openSecondaryFolderId}/>
          }
            </li>
             ))}

          </ul>
<MainItems />
        </CatalogsWrap>
       
    )
}

