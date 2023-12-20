export const REQ_CLIENT = "REQ_CLIENT";
export const SUCC_CLIENT = "SUCC_CLIENT";
export const FAIL_CLIENT = "FAIL_CLIENT";

import axios from 'axios'

const req = ()=>{
    return{
        type:REQ_CLIENT
    }
}

const succ = (data)=>{
    return{
        type:SUCC_CLIENT,
        payload:data
    }
}

const fail = (err) =>{
    return{
        type:FAIL_CLIENT,
        payload:err
    }
}


export const getClient = (token) =>{
    return(dispatch)=>{
        dispatch(req);
        console.log(token,"reached")
        axios({
            url:"https://webserviceapi.onrender.com/api/admin/getclient",
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        }).then((data)=>{
            dispatch(succ(data.data))
        }).catch((err)=>{
            dispatch(fail(err))
        })


    }
}




























