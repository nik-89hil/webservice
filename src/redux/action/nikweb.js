export const REQ_NIK = "REQ_NIK";
export const SUCC_NIK = "SUCC_NIK";
export const FAIL_NIK = "FAIL_NIK";
import {rooturlserver} from '../../component/axio'
import axios from 'axios'

const req = ()=>{
    return{
        type:REQ_NIK
    }
}

const succ = (data)=>{
    return{
        type:SUCC_NIK,
        payload:data
    }
}

const fail = (err) =>{
    return{
        type:FAIL_NIK,
        payload:err
    }
}


export const GETNIK = () =>{
    return(dispatch)=>{
        dispatch(req);
        axios({
            url:`${rooturlserver}`,
            method:"get",
        }).then((data)=>{
            dispatch(succ(data.data))
        }).catch((err)=>{
            dispatch(fail(err))
        })


    }
}





























