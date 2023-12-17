import React from 'react'
import Header from '../component/Header.jsx'
import {motion} from 'framer-motion'
import '../component/style/service.css'
import serviceimg from '../images/service.jpeg'
import {NavLink} from 'react-router-dom'

const Service = () => {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus soluta quam saepe eos doloribus? Aliquid animi aspernatur at et. Quo nam tempora, eveniet aliquid labore qui numquam laudantium optio dicta?
        Minus, ipsum pariatur atque molestiae aliquid nesciunt! Veritatis labore officiis autem vero aut incidunt pariatur tempora accusantium dolor debitis, ipsam adipisci numquam deserunt, facilis eum veniam aspernatur molestiae saepe. Laudantium!
        Repellat minima tempore quibusdam facere, libero voluptates qui? Placeat provident error explicabo cum natus, voluptate alias numquam quibusdam aut illo ducimus suscipit aliquam autem. Architecto possimus dolore ipsum. Corporis, ad.
        Dolor omnis totam, quos natus maiores necessitatibus excepturi, fugiat a sunt minus, iusto expedita atque laudantium sequi. Aspernatur suscipit distinctio quas reiciendis similique quae a aliquam deserunt, ex et esse.
        Culpa earum quisquam impedit, molestias ullam animi ipsa itaque nihil asperiores distinctio excepturi! Cumque vero optio eos quisquam accusamus quos molestiae a, tempora consequuntur voluptatibus minus accusantium laudantium illum numquam?
    </motion.p>
    <br />
    <motion.img
    initial={{opacity:0.1}}
    animate={{opacity:1}}
    transition={{ease:"easeIn",delay:.1,duration:1}}
    loading='lazy' src={serviceimg} className='serviceimg' alt="" />
    <br />
    <h2 className='heading'>Latest Website Tools and Technologies, we used for website creation.</h2>
    <p className='service-intro'>connect your application with latest tools, so you can be a future ready.</p>
    <br />
    <h2 className='heading'>#Checkout</h2>
    <h2 className='tool-link'>/<NavLink to={"/service/tools-technology"}>Tools and Technologies</NavLink> / <NavLink to={"/service/products"}>Products</NavLink></h2>
    <br />
   
    </div>

    
      
    </>
  )
}

export default Service
