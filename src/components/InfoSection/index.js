 import React from 'react'
 import { InfoContainer,InfoRow,InfoWrapper,Column1, TextWrapper,TopLine,Heading,Subtitle,BtnWrap, Column2, ImgWrap,Img,NavBtnLink } from './InfoElements'
 import Icon from "../images/svg-4.svg"

 const InfoSection = ({lightBg,id,imgStart,lightText,darkText,buttonLabel,img,alt,topLine,topLine1,topLine2,headline,headline1,headline2,description,primary,dark,dark2}) => {
     return (
         <>
          <InfoContainer lightBg={lightBg} id ={id}>
              <InfoWrapper>
                  <InfoRow imgStart ={imgStart}>
                      <Column1>
                          <TextWrapper>
                              <TopLine>{topLine}</TopLine>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle darkText={darkText}>{description}</Subtitle>
                              <TopLine>{topLine1}</TopLine>
                              <Heading lightText={lightText}>{headline1}</Heading>
                              <TopLine>{topLine2}</TopLine>
                              <Heading lightText={lightText}>{headline2}</Heading>
                              <BtnWrap>
                                  <NavBtnLink
                                  to= "/contact"
                                  smooth={true}
                                  duration = {500}
                                  spy={true}
                                  exact="true"
                                  offset={-80}
                                  primary={primary ? 1:0}
                                  dark={dark ? 1:0}
                                  dark2={dark2 ? 1:0}
                                  >{buttonLabel}</NavBtnLink>
                              </BtnWrap>
                          </TextWrapper>
                      </Column1>
                      <Column2>
                          <ImgWrap>
                              <Img src={Icon} alt={alt}/>
                          </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>   
         </>
     )
 }
 
 export default InfoSection
 