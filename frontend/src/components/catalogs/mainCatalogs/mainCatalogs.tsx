import React, { useState } from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';

import { getMainCatalogs } from '../../../redux/mainCatalog/mainCatalog-selector';
import { CloseFolder, OpenFolder } from './mainCatalogs.styled';
// import { getSecondaryCatalogs } from '../../../redux/secondaryCatalog/SecondaryCatalog-selector';
// import { getSecondaryCatalogs } from '../../../redux/mainCatalog/mainCatalog-selector';
import { SecondaryCatalogs } from '../secondaryCatalogs/secondaryCatalogs';
// import { fetchSecondaryCatalog } from '../../../redux/secondaryCatalog/secondaryCatalog-operation';
import { fetchSecondaryCatalog } from '../../../redux/mainCatalog/mainCatalog-operation';
import { fetchMainItems } from '../../../redux/item/item-operation';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const MainCatalogs: React.FC = () => {

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
    return (
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
    )
}

