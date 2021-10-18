import React from 'react'
import {FooterContainer,FooterWrap,FotterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLinkTitle1, FooterLink,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from "../Footer/FooterElements"
import {FaFacebook,FaInstagram,FaLinkedin,FaGithub, FaClipboardList} from "react-icons/fa"
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer id="footer">
            <FooterWrap>
                <FotterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>My Interests</FooterLinkTitle>
                            <FooterLink to="/contact">Creating Music</FooterLink>
                            <FooterLink to="/contact">Poems</FooterLink>
                            <FooterLink to="/contact">Photographs</FooterLink>
                            <FooterLink to="/contact">Support</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>My Resume</FooterLinkTitle>
                            <FooterLinkTitle1 href="https://drive.google.com/file/d/1P6A7S_MpTeioe3za8RzKveggnG5EHMMZ/view?usp=sharing" target="_blank" aria-label="File"><FaClipboardList/></FooterLinkTitle1>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Things I know</FooterLinkTitle>
                            <FooterLink to="/contact">Cloud Computing</FooterLink>
                            <FooterLink to="/contact">DBMS</FooterLink>
                            <FooterLink to="/contact">Computer Networks</FooterLink>
                            <FooterLink to="/contact">Web Development</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FotterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Manish Pathak</SocialLogo>
                        <WebsiteRights>Manish @ {new Date().getFullYear()}
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/manish.pathak.184881" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/manish_pathak1103/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/manish-pathak-83996a211/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/wolfpack123" target="_blank" aria-label="GitHub">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
