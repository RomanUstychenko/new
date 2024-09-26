import React, { useState } from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../../redux/store';

import { getMainCatalogs } from '../../../redux/catalog/catalog-selector';
import { CloseFolder, OpenFolder } from './mainCatalogs.styled';

import { SecondaryCatalogs } from '../secondaryCatalogs/secondaryCatalogs';


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const MainCatalogs: React.FC = () => {

    const [openFolder, setOpenFolder] = useState<string | null>(null);

    const mainCatalogs = useTypedSelector(getMainCatalogs);

    const handleFolderClick = (id: string) => {
        // Якщо натискаємо на вже відкритий каталог, то закриваємо його
        setOpenFolder(prevOpenFolder => (prevOpenFolder === id ? null : id));
    };
    return (
        <ul>
             {mainCatalogs.map(catalog => (
          <li key={catalog.id}>
            
          <span onClick={() => handleFolderClick(catalog.id)}> 
          {openFolder === catalog.id ? <OpenFolder /> : <CloseFolder />}
             <p>{catalog.name}</p> </span>
          {openFolder === catalog.id && <SecondaryCatalogs/>}
          </li>
        ))}
        </ul>
    )
}

