import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import {Link as LinkS} from "react-scroll"
import {Link as LinkR} from "react-router-dom"

export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width:100%;
    height:100%;
    background:blueviolet;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=> (isOpen ? "100%" : "0")};
    top: ${({isOpen})=> (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;
export const Icon =styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`;
export const SidebarWrapper =styled.div`
    color:#fff;
`;
export const SidebarMenu =styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: repeat(6,80px);
    text-align:center;
    
    @media screen and (max-width:480px){
        grid-template-rows: repeat(6,60px);
    }
`;
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    jusitfy-content:center;
    text-decoration:none;
    font-size:25px;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;
    margin-left:45%;

    &:hover{
        transition:0.2s ease-in-out;
        color:black;  
        }
`;

export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;
export const SidebarRoute = styled(LinkR)`
    border-radius:2px 10px;
    background: white;
    white-space:nowrap;
    padding:10px 20px;
    color:blueviolet;
    font-size:25px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:rgb(140, 69, 207);
        color:white;
        box-shadow: 5px 10px black
    }
`;
