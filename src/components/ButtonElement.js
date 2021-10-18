import styled from "styled-components"
import {Link} from "react-scroll"

export const Button = styled(Link)`
    border-radius:50px;
    background:${({primary}) => (primary ? 'white' : 'blueviolet')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'blueviolet' : 'white')};
    font-size: ${({fontBig}) => (fontBig ? '30px' : '20px')};
    outline:none;
    border:none;
    cursor:pointer;
    dispaly:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary}) => (primary ? 'blueviolet' : 'white')};
        color: white;
    }
`

