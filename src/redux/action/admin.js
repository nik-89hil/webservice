export const REQ_ADMIN = "REQ_ADMIN";
export const SUCC_ADMIN = "SUCC_ADMIN";
export const FAIL_ADMIN = "FAIL_ADMIN";
import {rooturlserver} from '../../component/axio'
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
        axios({
            url:`${rooturlserver}/api/admin/login`,
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




























