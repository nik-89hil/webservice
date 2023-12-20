import React from 'react'
import Header from '../component/Header.jsx'
import '../component/style/about.css'
import { Link } from 'react-router-dom'
import aboutimg from '../images/about.jpeg'
import {motion} from 'framer-motion'
import Fotter from '../component/Footer.jsx'
import { useSelector } from 'react-redux'

const About = () => {
  const {data} = useSelector((state)=>state.nikweb)
    
  return (
    <>
    <Header/>
    <div className="about-cont">
    <motion.h2
    initial={{x:-600}}
    animate={{x:0}}
    transition={{ease:"easeIn",duration:1,delay:1}}
    >About us : <span className='touch'><Link to={"/"}>@nikwebservice.onrender.com</Link></span></motion.h2>
    <motion.div className="about-para"
    initial={{y:900}}
    animate={{y:-20}}
    transition={{ease:"easeInOut",duration:2,delay:1}}
    >
        <img  className="para-img" src={aboutimg} alt="photoabout" />
        <div className="about-text">
       {
        data[0].success && data[0].data[0].about
       }
        </div>
    </motion.div>
    </div>

  
      <Fotter/>
    </>
  )
}

export default About
