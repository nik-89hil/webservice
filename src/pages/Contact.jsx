import React from 'react'
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'
import '../component/style/contact.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {rooturlserver} from '../component/axio.js'

const Contact = () => {
  const [client,setClient] = React.useState({
    clientemail:"",
    phone:"",
    description:""
  });

  const [message,setMessage] = React.useState("")


  const handleclient = (e)=>{
    e.preventDefault();
    setClient({
      ...client,
      [e.target.name]:e.target.value
    })
  }

  const submitclient = async(e) =>{
    e.preventDefault();
    const result = await axios({
      url:`${rooturlserver}/api/client/connect`,
      method:"post",
      data:client
    });
    if(result.data.success){
      setMessage("we received your request, contact you soon..")
      setTimeout(()=>{
        window.location.href ="/";
        setClient({
          clientemail:"",
          phone:"",
          description:""
        })
        setMessage("")
      },3000)
      
    }
  }








  return (
    <>
    <Header/>
    <br />
    <div className="contact-box">
        <motion.h2
        initial={{x:-900}}
        animate={{x:0}}
        transition={{ease:"easeInOut",delay:1,duration:0.7,type:"spring"}}
        >Contact us </motion.h2>
        <span className='message'> "{message}" </span>
        <p className='cont-para'>feel free to contact, we listen you carefully.</p>
        <h2 className='tool-link'><Link to={"/"}>@nikwebservice.onrender.com</Link></h2>
        <br />
       

        <form className='form-cont'>
           <p>
              <label htmlFor="clientemail">Your Email</label><br />
              <input type="email" name="clientemail"  onChange={handleclient} required placeholder='email@gmail.com' />
           </p>

           <p>
              <label htmlFor="phone">Your Phone Number or Whatsapp</label><br />
              <input type="tel" name="phone" onChange={handleclient} required  placeholder='9#########8' id="phone" />
           </p>

            <p>
                <label htmlFor="description">Tell us about your Project and Idea. so we can give you best result.</label>
                <br />
                <textarea name="description" onChange={handleclient} required placeholder='write..' id="description" cols="30" rows="10"></textarea>
            </p>
            

            <button type="submit" onClick={submitclient}>Submit Form</button>
            <button type="reset">Reset Form</button>
        
        </form>
    
        <br />
    </div>
      
      <Footer/>
    </>
  )
}

export default Contact
