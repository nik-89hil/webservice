export const REQ_TOOL = "REQ_TOOL";
export const SUCC_TOOL = "SUCC_TOOL";
export const FAIL_TOOL = "FAIL_TOOL";

import axios from 'axios'

const req = ()=>{
    return{
        type:REQ_TOOL
    }
}

const succ = (data)=>{
    return{
        type:SUCC_TOOL,
        payload:data
    }
}

const fail = (err) =>{
    return{
        type:FAIL_TOOL,
        payload:err
    }
}


export const getTool = () =>{
    return(dispatch)=>{
        dispatch(req);
        axios({
            url:"https://webserviceapi.onrender.com/api/admin/tools",
            method:"get",
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




























