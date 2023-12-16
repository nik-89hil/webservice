import React from 'react'
import './style/service.css'
import {motion} from 'framer-motion'

const Cards = () => {
    const arr = [{
        heading:"react.js",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"node.js",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"html",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"css",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"bootstap",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"redux",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
    {
        heading:"mongodb",
        intro:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ab expedita facilis a itaque non tenetur quasi magnam, error repudiandae quod optio quae voluptate voluptates officia odio. Tempora, ipsum saepe.Quisquam inventore sint facere amet, ullam, aperiam iusto unde cupiditate est blanditiis cum, obcaecati cumque? Voluptatum asperiores id mollitia quos et, adipisci aliquid quae fugit in. Animi culpa ea facilis."
    },
]
  return (
    <>
    {
        arr.map((e)=>{
            return(
                <motion.div className="card"
                initial={{opacity:0.1}}
                animate={{boxShadow:"2px 2px 4px blue", opacity:1}}
                transition={{ease:"easeIn",duration:3,delay:0.5}}

                >
        <div className="img-cont">
            <img loading='lazy'
            src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="" />
        </div>
        <p className='heading'>{e.heading}</p>
        <p className='intro'>
           {e.intro}
        </p>
    </motion.div>
            )
        })
    }
      
    </>
  )
}

export default Cards
