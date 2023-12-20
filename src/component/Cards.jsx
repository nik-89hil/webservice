import React from 'react'
import './style/service.css'
import { motion } from 'framer-motion'

const Cards = ({color,about,name,link}) => {

    return (
        <>

            <motion.div className="card"
                initial={{ opacity: 0.1 }}
                animate={{ boxShadow: `2px 2px 4px ${color}`, opacity: 1 }}
                transition={{ ease: "easeIn", duration: 3, delay: 0.5 }}
                style={{border:`2px solid ${color}`}}

            >
                <div className="img-cont">
                    <img loading='lazy'
                        src={link} alt={name} />
                </div>
                <p className='heading'>{name}</p>
                <p className='intro'>
                    {about}
                </p>
            </motion.div>


        </>
    )
}

export default Cards
