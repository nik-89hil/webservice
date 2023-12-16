import React from 'react'
import Header from '../component/Header'
import '../component/style/about.css'
import { Link } from 'react-router-dom'
import aboutimg from '../images/about.jpeg'
import {motion} from 'framer-motion'

const About = () => {
    
  return (
    <>
    <Header/>
    <div className="about-cont">
    <motion.h2
    initial={{x:-600}}
    animate={{x:0}}
    transition={{ease:"easeIn",duration:1,delay:1}}
    >About us : <span className='touch'><Link to={"/"}>@nikwebservice.onrender.com</Link></span></motion.h2>
    <motion.div className="about-para"
    initial={{y:900}}
    animate={{y:-20}}
    transition={{ease:"easeInOut",duration:2,delay:1}}
    >
        <img  className="para-img" src={aboutimg} alt="photoabout" />
        <div className="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam velit aperiam laboriosam maxime? Incidunt quod, doloribus, facilis optio sit perspiciatis corrupti ea saepe aperiam totam soluta nam qui recusandae adipisci.
        Minima atque aperiam expedita! Dicta totam libero tempore blanditiis perspiciatis harum voluptate sint aliquam voluptas sunt praesentium voluptates quisquam commodi impedit, fuga repellat voluptatem, magni cumque quibusdam nihil cum. Beatae?
        Error exercitationem quibusdam incidunt in possimus officia eaque, vel aperiam ullam. Consequuntur itaque sunt suscipit eaque eligendi! Enim et odit, similique iste praesentium quasi dolore officiis numquam totam, omnis asperiores.
        Harum aliquid cum assumenda voluptate earum suscipit magni vel delectus officia. Cumque, doloremque sapiente? Itaque, animi illo? Incidunt aspernatur odio velit ipsa repudiandae? Voluptate nemo rem dolorum, ullam numquam modi.
        Facilis praesentium suscipit culpa dicta, animi est nesciunt delectus eius ducimus iusto? Dolorem recusandae, numquam cumque dolores placeat quisquam id eaque culpa vero maiores, vel magni quas quos incidunt necessitatibus.
        Molestias aliquid libero rem alias velit, fugit, cum animi nulla tenetur odit quidem quis ad molestiae laborum laudantium, eligendi blanditiis harum facilis totam sapiente mollitia repudiandae explicabo veniam? Ipsum, libero?
        Aperiam rem veniam quae corporis ad atque aliquam veritatis, voluptates nostrum expedita debitis consectetur optio eos dignissimos exercitationem excepturi reiciendis rerum distinctio nesciunt non adipisci dolorem inventore! Harum, iure atque.
        Id sunt iste ipsam dolor, perspiciatis nam corrupti vero quos minima ab sed, animi eaque. Corrupti inventore earum vel nulla sit maiores minus quos molestias neque. Deserunt ducimus delectus voluptatum.
        A voluptatibus adipisci modi molestias sunt, incidunt labore neque accusamus quo, quis eaque possimus maiores mollitia magni quaerat reiciendis ab nulla nostrum! Vitae perspiciatis vel exercitationem tempora labore id praesentium?
        In possimus odio aliquid distinctio repellat unde voluptate eum? Quis, perspiciatis est hic eum maxime natus sequi dignissimos aliquam autem officiis suscipit, sed harum. Sapiente rem nostrum natus ipsa dolore!
        Totam tenetur minus fugiat cupiditate reiciendis dicta optio nesciunt minima reprehenderit ullam neque culpa saepe est exercitationem quaerat, illum ducimus maxime dignissimos. Voluptates minima ratione neque provident, debitis quae velit.
        Similique consequatur veniam ex a voluptatibus animi rerum ipsum commodi perferendis. Accusamus, minima neque. Ducimus nobis recusandae consequuntur delectus repellat animi voluptate id provident possimus vitae incidunt, a laboriosam alias!
        Quisquam dolorum suscipit soluta eveniet aut necessitatibus deleniti delectus ullam nulla, provident voluptatem quas beatae laudantium iure in nemo tempore consectetur similique facilis commodi exercitationem saepe eos! Doloribus, odit voluptatibus.
        Quidem officia ab illo dolor voluptates, repellat architecto, voluptatem veniam, cumque officiis itaque quos in temporibus exercitationem atque soluta dolorem excepturi nihil et autem quaerat! Aspernatur sapiente itaque earum consequatur?
        Magnam saepe, ad nobis odio nulla ipsa possimus! Ad inventore dolore consequuntur adipisci laboriosam possimus nihil deleniti laborum, iusto hic quas minima ab corrupti animi esse eum beatae illum doloribus.
        Ea suscipit nesciunt provident consequatur architecto facilis nemo saepe illo ad corporis voluptate omnis ratione aperiam cum, incidunt, esse aut nisi eaque molestiae perferendis. Cumque nulla cupiditate incidunt est vel.
        Labore voluptates earum voluptate? Modi eum voluptas iste velit laudantium obcaecati ratione sed harum ad nesciunt quo, veniam expedita magnam neque architecto mollitia odit maiores minus alias, a aliquam vel!
        Quibusdam amet, quos tenetur odit repudiandae quo mollitia unde esse cupiditate tempore illum, beatae optio consequuntur accusamus voluptas, iure impedit cum repellat! Commodi aliquid deleniti optio quia! Eaque, harum est!
        </div>
    </motion.div>
    </div>
      
    </>
  )
}

export default About
