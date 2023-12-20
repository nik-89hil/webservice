import React, { useEffect } from 'react'
import Service from './Service'
import '../component/style/service.css'
import {motion} from 'framer-motion'
import ProdCard from '../component/ProdCard.jsx'
import Footer from '../component/Footer.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {getProduct} from '../redux/action/product.js'

const Product = () => {
  const dispatch = useDispatch();
  const {loading,data,err} = useSelector((state)=>state.product);
  const product = data.data;

  useEffect(()=>{
    dispatch(getProduct())
  },[])



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

      {
        loading?"Loading products...":null
      }
      {
        data.success?(
          product.map((ele,idx)=>{
            return <ProdCard key={idx}  name={ele.prodname} about={ele.prodabout} source={ele.prodimg}/>
          
          })
        ):null
      }
    
     
      

    </motion.div>
    </div>


    <Footer/>
      
    </>
  )
}

export default Product
