import React,{useState,useEffect} from 'react'
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from './navbarElement'
import {FaBars} from "react-icons/fa"
import { animateScroll as scroll } from 'react-scroll'
 
const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
               <NavbarContainer>
                   <NavLogo to="/" onClick={toggleHome}>Manish</NavLogo>
                   <MobileIcon onClick = {toggle}>
                    <FaBars/>
                   </MobileIcon>
                   <NavMenu> 
                       <NavItem>
                            <NavLinks to = "home" smooth={true} duration={500} spy={true} exact="true" offset={-80} >Home</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to = "about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About Me</NavLinks>
                       </NavItem>
                       <NavItem>
                           <NavLinks to = "services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</NavLinks>
                       </NavItem>
                   </NavMenu> 
                   <NavBtn>
                       <NavBtnLink to = "/contact">Contact Me</NavBtnLink>
                   </NavBtn>
               </NavbarContainer> 
            </Nav>
        </>
    )
}

export default Navbar
