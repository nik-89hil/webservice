import React,{useEffect} from 'react'
import Service from './Service'
import '../component/style/service.css'
import Cards from '../component/Cards'
import Footer from '../component/Footer.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {getTool} from '../redux/action/tool.js'

const Tools = () => {
  const dispatch = useDispatch();
  const {loading,data,err} = useSelector((state)=>state.tool);
  const tool = data.data;

  useEffect(()=>{
    dispatch(getTool())
  },[])
  
  return (
    <>
    <Service/>
    
    <br />
    <h2 style={{textAlign:"center"}}>{loading?"Loading..":"Have a look.."}</h2>
    <div className="service-flex">
    {
      data.success?(
        
        tool.map((ele,idx)=>{
          return <Cards key={idx} color={ele.color} about={ele.abouttool} link={ele.toollink} name={ele.toolname}/>
        })
        
      ):null
    }
    </div>
      <Footer/>
    </>
  )
}

export default Tools
