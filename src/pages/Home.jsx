import React, { useEffect } from 'react'
import {motion} from 'framer-motion';
import img1 from '../images/frontimg.jpeg';
import img3 from '../images/modelfem.jpeg';
import img5 from '../images/mountain.jpeg';
import img6 from '../images/vaccine.jpeg';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';
import {useDispatch, useSelector} from 'react-redux'
import  {GETNIK} from '../redux/action/nikweb.js'

const Home = () => {
    const dispatch = useDispatch();
    const {data,loading,err} = useSelector((state)=>state.nikweb);


    useEffect(()=>{
        dispatch(GETNIK())
    },[])


  return (
    <>
    <Header/>

    <div className="box">
        
        <img src={img1} loading='lazy'  alt="No img" />
        <br />
        <h1 className='home-head'>Get your website with latest tools and technologies</h1>
        <h3 className='home-head'>Why website is better for your bussiness?</h3>
        <br />

        <div className="flex-box">
            <div className="item1">
                <h2 classname="home-head">Accessibility</h2>
                <p>
                    if you have startup and you want to make it available for your client
                    easily.you should have a website that connects you with your client.
                    by using some keywords your client can check your services.
                </p>
            </div>
            <div className="item2">
                <h2 classname="home-head">No download</h2>
                <p>
                    website do not take your more memory in device. they are used on any web browsers, no need for download just
                    a one click you can login and access services.
                </p>
            </div>
            <div className="item3">
                <h2 classname="home-head">Personal</h2>
                <p>
                    in the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income.
                </p>
            </div>
            <div className="item4">
                <h2 classname="home-head">Responsiveness and Adaptibility</h2>
                <p>
                    website are adaptable and responsive nature they can look best
                    across all devices whatever you client has your website automatically
                    arrange itself according to device.
                </p>
            </div>
            <div className="item3">
                <h2 classname="home-head">Improve credibility</h2>
                <p>
                Having a professional website is critical to assuage these concerns and leave a positive impression. This will allow you to build your credibility while effectively engaging people and giving them enough trust in you to make a purchase.
                </p>
            </div>
            <div className="item3">
                <h2 classname="home-head">Access the power of search</h2>
                <p>
                By creating a website that ticks the right SEO boxes, you can drive traffic to your website from people searching for what you have to offer. This will improve your business awareness and generate leads that can be turned into paying customers.
                </p>
            </div>
            <div className="item3">
                <h2 classname="home-head">Low Cost</h2>
                <p>
                    In the world of AI, no matter what your profession is you need a website to enhance your online presence.
                    you can add your experience and services that grow your carrer and income at low cost.
                </p>
            </div>
        </div>
     
    </div>
    <br />

    <div className="box2">
        <motion.h1
        className='home-head'
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

        <h1 className='home-head'>Free templates और customise it...</h1>
        <h2 className='home-head'>आप किसी भी भाषा में अपनी कल्पना को वास्तविक वेबसाइट में बदल सकते हैं|</h2>
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
