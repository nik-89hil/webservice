import React from 'react'
import './style/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer-box">
      <h2><a href="/">@nikwebservice.onrender.com</a>|<Link to={'/admin'}>admin</Link> </h2>
      <p><i className="fa-solid fa-copyright"></i> all rights are reserved || 2024</p>
      <div className="fot-soci">
        <p><a href="https://www.linkedin.com/in/nik-192002hil/" target='_blank'><i className="fa-brands fa-linkedin-in"></i> LinkedIn</a></p>
        <p><a href="https://github.com/nik-89hil?tab=repositories" target='_blank'><i className="fa-brands fa-github"></i> Github</a></p>
        <p><a href="mailto:nikhilkumar19072002@gmail.com" target='_blank'><i className="fa-solid fa-at"></i> Email</a></p>
      </div>
    </div>
      
    </>
  )
}

export default Footer
