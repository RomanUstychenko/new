import styled from "styled-components";
import { FaRegFolderClosed, FaRegFolderOpen } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";



export const CloseArrow = styled(IoIosArrowDown)`
    width: 20px;
    height: 20px;
`
export const CloseFolder = styled(FaRegFolderClosed)`
    fill: #0e0e7e;
    width: 20px;
    height: 20px;
`
export const OpenArrow = styled(IoIosArrowForward)`
    width: 20px;
    height: 20px;
`
export const OpenFolder = styled(FaRegFolderOpen)`
     fill: #0e0e7e;
     width: 20px;
    height: 20px;
`