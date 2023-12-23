import React from 'react'
import './style/home.css'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'
import logo from '../images/nikweblogo.jpg'

const Header = () => {
  return (
    <>
    <div className="navbar-box">

      <motion.div
        className='company'
        initial={{ y:-150 }}
        animate={{ y:-5 }}
        transition={{ ease: "easeInOut", duration: 1.4,delay:1 }}
        > @nikwebservice.onrender.com 
      </motion.div>


      <ul className='nav-links'>
        <li>
          <a href="/">
            <img className='logo-img' src={logo} alt="logo" />
          </a>
        </li>
       <li>
        <NavLink to="/"> Home </NavLink>
       </li>
       <li>
        <NavLink to="/about"> About </NavLink>
       </li>
       <li>
        <NavLink to="/service"> Service </NavLink>
       </li>
       <li>
        <NavLink to="/contact"> Contact </NavLink>
       </li>
      </ul>
      
      
    </div>
    
      
    </>
  )
}

export default Header
