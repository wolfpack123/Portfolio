import React ,{useState} from 'react'
import { HeroContainer,HeroBg,VideoBg,HeroBtnWrapper,HeroContent,HeroH1,HeroP,ArrowForward,ArrowRight,FButton} from './HeroElements'
import Video from "../../components/Videos/video.mp4"

const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src = {Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
            <HeroH1>Hola, I am Manish Pathak</HeroH1>
            <HeroP>Web Developer, Writer, Designer</HeroP>
            <HeroBtnWrapper>
                <FButton to = "footer" smooth={true} duration={1000} spy={true} exact="true" offset={-80} onMouseEnter = {onHover} onMouseLeave ={onHover} primary="true" dark="true">
                    My Interests {hover ? <ArrowForward/>:<ArrowRight/>}
                </FButton>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
