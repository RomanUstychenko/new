import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
// import { logoutUser } from '../../redux/auth/auth-operation';
// import { addMainCatalog } from '../../redux/mainCatalog/mainCatalog-operation';
// import { selectIsLoading } from '../../redux/mainCatalog/mainCatalog-selector';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../redux/store';
// import { MainCatalogs } from '../../components/catalogs/mainCatalogs/mainCatalogs';
import { CatalogsWrap, OpenFolder, CloseFolder } from './main.styled';
import { Modal } from '../../components/common/modal/modal';
import ModalMainAddCatalog from '../../components/modals/mainAddCatalog/modalMainAddCatalog';
import { getMainCatalogs } from '../../redux/mainCatalog/mainCatalog-selector';
import { fetchSecondaryCatalog } from '../../redux/mainCatalog/mainCatalog-operation';
import { fetchMainItems } from '../../redux/item/item-operation';
import { SecondaryCatalogs } from '../../components/catalogs/secondaryCatalogs/secondaryCatalogs';
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
      <main>
      <h1>main page</h1>
<CatalogsWrap>

      <button onClick={() => setModalActive(true)}>add Main Catalog</button>

            {modalActive && (
              <Modal
              active={modalActive}
              setActive={setModalActive}
              onClick={closeModal}

              >
                <ModalMainAddCatalog 
                closeModal={closeModal}/>
              </Modal>
            )}

<ul>
             {mainCatalogs.map(catalog => (
          <li key={catalog.id}>
            
          <span onClick={(e) => handleFolderClick(catalog.id, e)}> 
          {openFolderId === catalog.id ? <OpenFolder /> : <CloseFolder />}
             <p>{catalog.name}</p> </span>
          {openFolderId === catalog.id && 
          <SecondaryCatalogs 
          openFolderId={openFolderId}/>
          }
          </li>
        ))}
        </ul>
</CatalogsWrap>
       
      
      
      </main>
    );
  };

  export default Main;