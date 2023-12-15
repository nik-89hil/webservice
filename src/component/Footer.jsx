import React from 'react'
import './style/home.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="linker">
            <span className='heading'>Useful Links</span>
            <span><a className='links' href="">Home</a></span>
            <span><a className='links' href="">About</a></span>
            <span><a className='links' href="">Service</a></span>
            <span><a className='links' href="">Contact</a></span>
        </div>
        <div className="social">
            <span className='heading'>Social Media</span>
            <span><a className='links' href="">github</a></span>
            <span><a className='links' href="">linkedin</a></span>
            <span><a className='links' href="">email</a></span>
            <span><a className='links' href="">whatsapp</a></span>
        </div>
    </div>
      
    </>
  )
}

export default Footer
