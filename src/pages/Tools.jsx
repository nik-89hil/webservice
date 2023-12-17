import React from 'react'
import Service from './Service'
import '../component/style/service.css'
import Cards from '../component/Cards'
import {motion} from 'framer-motion'
import Footer from '../component/Footer.jsx'

const Tools = () => {
    setTimeout(()=>{
        window.scrollBy(0,200)
    },1000)
  return (
    <>
    <Service/>
    
    <div className="service-flex">
    <Cards/>
    </div>


      <Footer/>
    </>
  )
}

export default Tools
