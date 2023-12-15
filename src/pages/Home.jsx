import React from 'react'
import {motion} from 'framer-motion';
import img1 from '../images/frontimg.jpeg';
import img2 from '../images/femaleimg.png';
import img3 from '../images/modelfem.jpeg';
import img4 from '../images/it.jpeg';
import img5 from '../images/mountain.jpeg';
import img6 from '../images/vaccine.jpeg';
import Header from '../component/header';
import Footer from '../component/Footer';

const Home = () => {
  return (
    <>
    <Header/>

    <div className="box">
        
        <img src={img1} loading='lazy'  alt="No img" />
        <br />
        <h1>Get your website with latest tools and technologies</h1>
        <h3>Why website is better for your bussiness?</h3>
        <br />

        <div className="flex-box">
            <div className="item1">
                <h2>Accessibility</h2>
                <p>
                    if you have startup and you want to make it available for your client
                    easily.you should have a website that connects you with your client.
                    by using some keywords your client can check your services.
                </p>
            </div>
            <div className="item2">
                <h2>No download</h2>
                <p>
                    website do not take your more memory in device. they are used on any web browsers, no need for download just
                    a one click you can login and access services.
                </p>
            </div>
            <div className="item3">
                <h2>For personal use</h2>
                <p>
                    in the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income.
                </p>
            </div>
            <div className="item4">
                <h2>Responsiveness and Adaptibility</h2>
                <p>
                    website are adaptable and responsive nature they can look best
                    across all devices whatever you client has your website automatically
                    arrange itself according to device.
                </p>
            </div>
            <div className="item3">
                <h2>For personal use</h2>
                <p>
                    in the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income.
                </p>
            </div>
            <div className="item3">
                <h2>For personal use</h2>
                <p>
                    in the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income.
                </p>
            </div>
            <div className="item3">
                <h2>low cost</h2>
                <p>
                    in the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income.
                </p>
            </div>
        </div>
     
    </div>
    <br />

    <div className="box2">
        <motion.h1
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{ease:"easeInOut",duration:2,repeat:Infinity}}
        >Touch with creativity and animation</motion.h1>

        <div className="flex-box2">
            <motion.img loading='lazy'
            whileHover={{scale:1.2,rotateY:360}}
            transition={{ease:"easeInOut",delay:.1,duration:.5}}
            src={img3} alt="image" />
            <motion.img loading='lazy' className='img2'
            whileHover={{scale:1.1,objectFit:"cover"}}
            transition={{ease:"easeInOut",delay:.1,duration:.5}}
            src={img6} alt="image" />
            <motion.img loading='lazy'
            whileHover={{scale:1.1,rotate:20}}
            transition={{ease:"easeInOut",delay:.1,duration:.5}}
            src={img5} alt="image" />
        </div>
        <br />

        <h1>Free templates और customise it...</h1>
        <h2>आप किसी भी भाषा में अपनी कल्पना को वास्तविक वेबसाइट में बदल सकते हैं|</h2>
        <br />
        <div className="box3">
            <img loading='lazy' src="https://marketplace.canva.com/EAE6WTyrSQ0/2/0/1600w/canva-light-beige-sleek-and-simple-blogger-personal-website--7Q4-7tyJj4.jpg" alt="" />
        </div>

    </div>


    <Footer/>


    </>
  )
}

export default Home
