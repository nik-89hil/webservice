import React from 'react'
import Header from '../component/Header.jsx'
import '../component/style/contact.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Header/>
    <br />
    <div className="contact-box">
        <motion.h2
        initial={{x:-900}}
        animate={{x:0}}
        transition={{ease:"easeInOut",delay:1,duration:0.7,type:"spring"}}
        >Contact us</motion.h2>
        <p>feel free to contact, we listen you carefully.</p>
        <h2 className='tool-link'><Link to={"/"}>@nikwebservice.onrender.com</Link></h2>
        <br />
       

        <form className='form-cont'>
           <p>
              <label htmlFor="clientemail">Your Email</label><br />
              <input type="email" required placeholder='email@gmail.com' name="clientemail" id="clientemail" />
           </p>

           <p>
              <label htmlFor="phone">Your Phone Number or Whatsapp</label><br />
              <input type="tel" required name="phone" placeholder='9#########8' id="phone" />
           </p>

            <p>
                <label htmlFor="description">Tell us about your Project and Idea. so we can give you best result.</label>
                <br />
                <textarea name="description" required placeholder='write..' id="description" cols="30" rows="10"></textarea>
            </p>

            <button type="submit">Submit Form</button>
            <button type="reset">Reset Form</button>
        
        
        </form>
        <br />
        <h2>If you have any Query, Connect with us</h2>
        <br />
        <a href="" className="social linkedin"><i className="fa-brands fa-linkedin"></i> linkedIn</a>
        <a href="" className="social whatsapp"><i className="fa-brands fa-whatsapp"></i> whatsapp</a>
        <a href="" className="social email"><i className="fa-solid fa-at"></i> email</a>
        <a href="" className="social github"><i className="fa-brands fa-github"></i> github</a>
    </div>
      
    </>
  )
}

export default Contact
