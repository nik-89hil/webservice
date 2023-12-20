export const REQ_ADMIN = "REQ_ADMIN";
export const SUCC_ADMIN = "SUCC_ADMIN";
export const FAIL_ADMIN = "FAIL_ADMIN";

import axios from 'axios'

const req = ()=>{
    return{
        type:REQ_ADMIN
    }
}

const succ = (data)=>{
    return{
        type:SUCC_ADMIN,
        payload:data
    }
}

const fail = (err) =>{
    return{
        type:FAIL_ADMIN,
        payload:err
    }
}


export const ADMIN = (admin) =>{
    return(dispatch)=>{
        dispatch(req);
        console.log("reached")
        axios({
            url:"https://webserviceapi.onrender.com/api/admin/login",
            method:"post",
            data:{
                ...admin
            },
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data)=>{
            dispatch(succ(data.data))
        }).catch((err)=>{
            dispatch(fail(err))
        })


    }
}




























