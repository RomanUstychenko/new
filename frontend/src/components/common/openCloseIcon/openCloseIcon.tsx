import React from 'react';

import { CloseArrow, CloseFolder, OpenArrow, OpenFolder } from './openCloseIcon.styled';

interface OpenCloseIconProps {
    openFolderId: string | null;
    catalog: string | null;
  }

const OpenCloseIcon: React.FC<OpenCloseIconProps> = ({openFolderId, catalog }) => {
    
    return (
        <>
        {openFolderId === catalog ? <><CloseArrow /><OpenFolder /></> : <><OpenArrow /><CloseFolder /></>}
        </>
    )
}

export default OpenCloseIcon;