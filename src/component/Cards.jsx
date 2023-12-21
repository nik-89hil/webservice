import React from 'react'
import './style/service.css'
import { motion } from 'framer-motion'

const Cards = ({color,about,name,link}) => {

    return (
        <>

            <motion.div className="card"
                initial={{ opacity: 0.1 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 3, delay: 0.5 }}
                style={{color:`${color}`}}

            >
                <div className="img-cont">
                    <img loading='lazy'
                        src={link} alt={name} />
                </div>
                <p className='heading' style={{color:`${color}`}}>{name}</p>
                <p className='intro'>
                    {about}
                </p>
            </motion.div>


        </>
    )
}

export default Cards
