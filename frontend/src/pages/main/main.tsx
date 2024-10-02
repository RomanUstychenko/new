import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
// import { logoutUser } from '../../redux/auth/auth-operation';
// import { addMainCatalog } from '../../redux/mainCatalog/mainCatalog-operation';
// import { selectIsLoading } from '../../redux/mainCatalog/mainCatalog-selector';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../redux/store';
// import { MainCatalogs } from '../../components/catalogs/mainCatalogs/mainCatalogs';
import { CatalogsWrap, 
  OpenFolder, 
  CloseArrow, 
  CloseFolder, 
  OpenArrow, 
  CatalogList,
  ButtonWrap,
  Button,
  ButtonIcon,
  ButtonText,
} from './main.styled';
import { Modal } from '../../components/common/modal/modal';
import { getMainCatalogs } from '../../redux/mainCatalog/mainCatalog-selector';
import { fetchSecondaryCatalog } from '../../redux/mainCatalog/mainCatalog-operation';
import { fetchMainItems } from '../../redux/item/item-operation';
import { SecondaryCatalogs } from '../../components/catalogs/secondaryCatalogs/secondaryCatalogs';
import ModalAddCatalog from '../../components/modals/addCatalog/modalAddCatalog';

// Типізований хук useSelector
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const Main: React.FC = () => {
    

      const [modalActive, setModalActive] = useState<boolean>(false); 
      const [openFolderId, setOpenFolderId] = useState<string | null>(null);

      const mainCatalogs = useTypedSelector(getMainCatalogs);
      // const secondaryCatalogs = useTypedSelector(getSecondaryCatalogs);
  
      const dispatch = useDispatch<AppDispatch>();
  
      const handleFolderClick = (id: string, e: React.FormEvent) => {
          e.preventDefault();
          
  const newOpenFolder = openFolderId === id ? null : id;
      setOpenFolderId(newOpenFolder);
  
          console.log("newOpenFolder", newOpenFolder)
          dispatch(fetchSecondaryCatalog(newOpenFolder));
          dispatch(fetchMainItems(newOpenFolder))
          
      };
      const closeModal = () => {
        setModalActive(false)
      }

    return (
      
      
<CatalogsWrap>
<ButtonWrap>
  <ButtonIcon />
      <Button onClick={() => setModalActive(true)}>
        <ButtonText>Add Catalog</ButtonText>
        </Button>
      </ButtonWrap>

            {modalActive && (
              <Modal
              active={modalActive}
              setActive={setModalActive}
              onClick={closeModal}

              >
                <ModalAddCatalog 
                closeModal={closeModal}
                isSecondary={false}
                openFolderId={null}
                />
              </Modal>
            )}

<ul>
             {mainCatalogs.map(catalog => (
          <li key={catalog.id}>
            
          <CatalogList onClick={(e) => handleFolderClick(catalog.id, e)}> 
          {openFolderId === catalog.id ? <><CloseArrow /><OpenFolder /></> : <><OpenArrow /><CloseFolder /></>}
             <p>{catalog.name}</p> </CatalogList>
          {openFolderId === catalog.id && 
          <SecondaryCatalogs 
          openFolderId={openFolderId}/>
          }
          </li>
        ))}
        </ul>
</CatalogsWrap>
       
      
      
     
    );
  };

  export default Main;