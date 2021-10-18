import React from 'react'
import Icon1 from "../images/project-1.png"
import Icon2 from "../images/project-2.png"
import Icon3 from "../images/project-3.png"
import { ServicesContainer,ServicesH1, ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,ServicesLink } from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>My Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Weather App</ServicesH2>
                    <ServicesP>This App is made using React Js and openweathermap API</ServicesP>
                    <ServicesLink href="https://weather-app-manish-project.herokuapp.com/" target="_blank" aria-label="Link">Link</ServicesLink>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Chat App</ServicesH2>
                    <ServicesP>I build this multiple people chatting app by socket.io</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Tic-Tac-Toe</ServicesH2>
                    <ServicesP>I build this two-player game app using Angular</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
