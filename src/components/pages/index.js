import React ,{useState} from 'react'
// import { Router } from 'react-router-dom'
import InfoSection from '../InfoSection'
import HeroSection from "../HeroSection"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { homeObjOne,homeObjTwo } from '../InfoSection/Data'
import Services from '../Services'
import Footer from '../Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle =()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
        <Sidebar isOpen ={isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home;
