import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div `
    width:100%;
    height:100%;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    top:0;
    z-index:0;
    overflow:hidden;
    background: linear-gradient(180deg, rgba(138,43,226,1)0%, rgba(138,43,226,1)100%);
`;

export const FormWrap = styled.div `
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;

    @media screen and (max-width: 480px){
        height:80%;
    }
`

export const Icon = styled(Link)`
    color:#fff;
    cursor:pointer;
    font-size:40px;
    align-items:center;
    font-weight:bold;
    text-decoration:none;
    float:left;
    padding:5px;
    max-width: 160px;
    margin-top:30px;

    &:hover{
        transition: all 0.2s ease-in-out;
        color:white;
        box-shadow: -10px -5px white;
        background:black; 
    }
`;

export const FormContent = styled.div `
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    @media screen and (max-width: 480px){
        padding:10px;
    }
`

export const Form = styled.form `
    background:#010101;
    max-width:480px;
    max-height:auto;
    width:100%;
    z-index:1;
    display:grid;
    margin:0 auto;
    padding:50px 32px;
    border-radius:4px;
    box-shadow:0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 480px){
        padding:30px 25px;
    }
`;

export const FormH1 = styled.h1 `
    margin-bottom: 48px;
    color: #fff;
    font-size:20px;
    font-weight: 400;
    text-align: center;
    top:5px;

    @media screen and (max-width:480px){
        font:size:10px;
    }
`;

export const FormLabel = styled.label `
    margin-bottom:8px;
    font-size:14px;
    color:#fff;
`;

export const FormInput = styled.input `
    padding:16px 16px;
    margin-bottom:32px;
    border:none;
    border-radius: 4px;
    font-size:20px;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 15px;
    }
`;

export const FormButton = styled.button`
    background: blueviolet;
    padding:16px 0;
    border:none;
    border-radius: 4px;
    color:#fff;
    font-size:28px;
    cursor:pointer;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 0px;
    }
`;


export const TextArea = styled.textarea `
    padding:16px 20px;
    margin-bottom:32px;
    border:none;
    border-radius: 4px;
    rows:"40"; 
    cols:"100";
    font-size:20px;

    @media screen and (max-width:480px){
        font:size:10px;
        padding: 10px 15px;
    }
`;

export const SuccessText = styled.p `
    color:white;
    text-align:center;
    justify-content:center;
    font-size:10px;
    margin-top:10px;

    @media screen and (max-width:480px){
        font:size:5px;
    }
`