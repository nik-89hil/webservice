import React from 'react'
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'
import '../component/style/contact.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      url:"https://webserviceapi.onrender.com/api/client/connect",
      method:"post",
      data:client
    });
    if(result.data.success){
      setMessage("we received your request, contact you soon..")
      setClient({
        clientemail:"",
        phone:"",
        description:""
      })
    }
    console.log(result,"from client server")
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
        >Contact us</motion.h2>
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
            <p className='message'>{message}</p>

            <button type="submit" onClick={submitclient}>Submit Form</button>
            <button type="reset">Reset Form</button>
        
        
        </form>
        <br />
        <h2 style={{textAlign:"center"}}>If you have any Query, Connect with us</h2>
        <br />
        <a href="" className="social linkedin"><i className="fa-brands fa-linkedin"></i> linkedIn</a>
        <a href="" className="social whatsapp"><i className="fa-brands fa-whatsapp"></i> whatsapp</a>
        <a href="" className="social email"><i className="fa-solid fa-at"></i> email</a>
        <a href="" className="social github"><i className="fa-brands fa-github"></i> github</a>
    </div>
      
      <Footer/>
    </>
  )
}

export default Contact
