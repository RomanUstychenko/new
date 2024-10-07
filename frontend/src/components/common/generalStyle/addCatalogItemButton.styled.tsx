import styled from "styled-components";
import { FaFolderPlus } from "react-icons/fa";
import { BsFileEarmarkPlus } from "react-icons/bs";

export const ButtonsWrap = styled.div`
display: flex;
`
export const ButtonWrap = styled.div`
display: block;
width: 130px;
height: 50px;
margin-left: 50px;
    border: 1px solid rgb(56, 61, 63);
    border-radius: 5px;
`
export const Button = styled.button`
width: 100%;
background-color: inherit;
border: none;
`
export const ButtonFolderIcon = styled(FaFolderPlus)`
    width: 20px;
    height: 20px;
`
export const ButtonItemIcon = styled(BsFileEarmarkPlus)`
    width: 20px;
    height: 20px;
`
export const ButtonText = styled.p`
    font-size: 18px;
`