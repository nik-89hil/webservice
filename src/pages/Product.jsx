import React from 'react'
import Service from './Service'
import '../component/style/service.css'
import {motion} from 'framer-motion'
import ProdCard from '../component/ProdCard.jsx'




const Product = () => {
  setTimeout(()=>{
    window.scrollBy(0,300)
},1000)
  return (
    <>
    <Service/>
    <br />
    <div className="product-box">
    <h2>Our products are :</h2>
    <p>what we can make for you..</p>
    <br />
    <motion.div className="prod-grid"
    initial={{opacity:.1}}
    animate={{opacity:1}}
    transition={{ease:"easeIn",delay:0.2,duration:5}}
    >

      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      <ProdCard/>
      

    </motion.div>
    </div>
      
    </>
  )
}

export default Product
