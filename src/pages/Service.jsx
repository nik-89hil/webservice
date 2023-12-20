import React from 'react'
import Header from '../component/Header.jsx'
import {motion} from 'framer-motion'
import '../component/style/service.css'
import serviceimg from '../images/service.jpeg'
import {NavLink} from 'react-router-dom'
import {useSelector } from 'react-redux'


const Service = () => {
  const {data} = useSelector((state)=>state.nikweb)
  setTimeout(()=>{
    window.scrollBy(0,700)
  },3000)
  return (
    <>
    <Header/>
    <div className="service-box">
    <motion.h2
    style={{color:'blue'}}
    initial={{y:-400}}
    animate={{y:5}}
    transition={{ease:"easeInOut",duration:1,delay:1,type:"spring"}}
    >#Services, </motion.h2>
    <p>we provides to you.</p>

    <br />
    <motion.p className="service-intro"
    initial={{opacity:0.2}}
    animate={{opacity:1}}
    transition={{duration:.5,delay:1}}
    >
      {
        data[0].success && data[0].data[0].service
      }
      <br /><br />
      {
        data[0].success && data[0].data[0].service2
      }
      <br />
      <br />
      <h2>Importance of Website</h2>
      <br />
      {
        data[0].success && data[0].data[0].service3
      }
       
    </motion.p>
    <br />
    <motion.img
    initial={{opacity:0.1}}
    animate={{opacity:1}}
    transition={{ease:"easeIn",delay:.1,duration:1}}
    loading='lazy' src={serviceimg} className='serviceimg' alt="" />
    <br />
    <h2 className='heading'>Latest Website Tools and Technologies, we used for website creation.</h2>
    <p className='service-intro'>connect your application with latest tools, Be a future ready.</p>
    <br />
    <h2 className='heading'>#Checkout</h2>
    <h2 className='tool-link'>/<NavLink to={"/service/tools-technology"}>Tools and Technologies</NavLink> / <NavLink to={"/service/products"}>Products</NavLink></h2>
    <br />
   
    </div>

    
      
    </>
  )
}

export default Service
