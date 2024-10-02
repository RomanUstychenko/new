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
import { OpenFolder, CloseFolder } from "./secondaryCatalogs.styled";
import { SecondaryItems } from "../../items/secondaryItems/secondaryItems";
import { fetchSecondaryItems } from "../../../redux/item/item-operation";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface SecondaryCatalogsProps {
    openFolderId: string | null;
  }

export const SecondaryCatalogs: React.FC<SecondaryCatalogsProps> = ({openFolderId}) => {

  const dispatch = useDispatch<AppDispatch>();
  
    const secondaryCatalogs = useTypedSelector(getSecondaryCatalogs);
    

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
        
    };
    
    return (

        <div>
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
<button onClick={() => setModalActive(true)}>Add Secondary Catalog</button>
<button onClick={() => setModalActiveItem(true)}>Add Main Item</button>
     
<ul>
             {secondaryCatalogs.map(catalog => (
          <li key={catalog.id}>
            
            <span onClick={(e) => handleFolderClick(catalog.id, e)}> 
          {openSecondaryFolderId === catalog.id ? <OpenFolder /> : <CloseFolder />}
             <p>{catalog.name}</p> </span>
             {openSecondaryFolderId === catalog.id && 
          <SecondaryItems 
          openSecondaryFolderId={openSecondaryFolderId}/>
          }
            </li>
             ))}

          </ul>
<MainItems />
        </div>
       
    )
}

