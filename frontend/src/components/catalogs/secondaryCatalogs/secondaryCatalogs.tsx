import React, { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { AppDispatch } from "../../../redux/store";
import { Items } from "../../items/items";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../redux/store";
// import { selectIsLoading } from "../../../redux/mainCatalog/mainCatalog-selector";
// import { fetchSecondaryCatalog } from "../../../redux/mainCatalog/mainCatalog-operation";
import { getSecondaryCatalogs } from "../../../redux/mainCatalog/mainCatalog-selector";
// import { addSecondaryCatalog } from "../../../redux/mainCatalog/mainCatalog-operation";
// import { addMainItem } from "../../../redux/item/item-operation";
import { Modal } from "../../common/modal/modal";
import ModalSecondaryAddCatalog from "../../modals/secondaryAddCatalog/modalSecondaryAddCatalog";
import ModalMainAddItem from "../../modals/mainAddItem/modalMainAddItem";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

interface SecondaryCatalogsProps {
    openFolderId: string | null;
  }

export const SecondaryCatalogs: React.FC<SecondaryCatalogsProps> = ({openFolderId}) => {

    const secondaryCatalogs = useTypedSelector(getSecondaryCatalogs);
    

    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalActiveItem, setModalActiveItem] = useState<boolean>(false);

    const closeModal = () => {
        setModalActive(false)
        setModalActiveItem(false)
      }
    

    
    return (

        <div>
             {modalActive && (
            <Modal
            active={modalActive}
            setActive={setModalActive}
            onClick={closeModal}
              >
<ModalSecondaryAddCatalog 
openFolderId={openFolderId}
closeModal={closeModal}
/>
            </Modal>
        )}
     {modalActiveItem && (
            <Modal
            active={modalActiveItem}
            setActive={setModalActiveItem}
            onClick={closeModal}
              >
<ModalMainAddItem 
openFolderId={openFolderId}
closeModal={closeModal}
/>
            </Modal>
        )}
<button onClick={() => setModalActive(true)}>Add Secondary Catalog</button>
<button onClick={() => setModalActiveItem(true)}>Add Main Item</button>
     
<ul>
             {secondaryCatalogs.map(catalog => (
          <li key={catalog.id}>{catalog.name}</li>
             ))}

          </ul>
<Items />
        </div>
       
    )
}

