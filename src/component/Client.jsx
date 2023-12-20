import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getClient} from '../redux/action/client'
import '../pages/admin.css'

const Client = () => {
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.admin.data[0].data[0].token) || null
    
    const {data , loading,err} = useSelector((state)=>state.client)

    console.log(data[0])

    useEffect(()=>{
        dispatch(getClient(token))
    },[])



  return (
    <>

    <div className="tableform">
      {
        data.length>0?(
          data[0].data && data[0].data.map((ele,idx)=>{
            return(
            <div className="tab-cont" key={idx}>
                <p className='tab-des'>
                  About : <br />
                  {ele.description}
                </p>
                <br />
                <p className="tabhead">email : {ele.clientemail}</p>
                <br />
                <span className='phone'>Phone : {ele.phone}</span>
            </div>
            )
          })
        ):null
      }
    </div>

    </>
  )
}

export default Client
