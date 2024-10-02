import styled from "styled-components";
// import { device } from 'Device';
// import { device } from "../../Device";
import { FaRegFolderClosed, FaRegFolderOpen } from "react-icons/fa6";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa";
 
export const CatalogsWrap = styled.main`
padding: 15px 3px;
    border: 1px solid rgb(7, 94, 138);
`
export const ButtonWrap = styled.div`
display: block;
width: 130px;
height: 70px;
margin-left: 50px;
    border: 1px solid rgb(56, 61, 63);
    border-radius: 5px;
`
export const Button = styled.button`
width: 100%;
background-color: inherit;
border: none;
`
export const ButtonIcon = styled(FaFolderPlus)`
    width: 25px;
    height: 25px;
`
export const ButtonText = styled.p`
    font-size: 18px;
`
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

export const CatalogList = styled.span`
    display: flex;
`