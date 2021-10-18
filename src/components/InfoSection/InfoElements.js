import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"

export const InfoContainer = styled.div`
    color:#fff;
    height:600px;
    background: ${({lightBg}) => (lightBg ? "white" : "blueviolet")};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div `
    display:grid;
    z-index: 1;
    heigth: 860px;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div `
    display:grid;
    grid-auto-columns:minmax(auto , 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div `
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col1;
`;
export const Column2 = styled.div `
    margin-bottom:15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top:0;
    padding-bottom:60px;
`;
export const TopLine = styled.p `
    margin-top:50px;
    color: black;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 25px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 1.1px;
    color: ${({lightText}) => (lightText ? 'white' : 'blueviolet')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }    
`;

export const Subtitle = styled.p `
    max-width:440px;
    margin-bottom:35px;
    font-size: 18px;
    line-height:1.5;
    color: ${({darkText})=>(darkText ? 'white' : "black")};
`;

export const BtnWrap = styled.div `
    display: flex;
    justify-content:flex-start;
`;

export const ImgWrap = styled.div `
    max-width:555px;
    height:100%;
`;
export const Img = styled.img `
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width:768px){
        display:none;
    } 
`;

export const NavBtnLink = styled(LinkR)`
    border-radius:20px;
    background: white;
    white-space:nowrap;
    padding:10px 10px;
    color:blueviolet;
    font-size:25px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:blueviolet;
        color:white;
    }
`;