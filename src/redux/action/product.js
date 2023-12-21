export const REQ_PRODUCT = "REQ_PRODUCT";
export const SUCC_PRODUCT = "SUCC_PRODUCT";
export const FAIL_PRODUCT = "FAIL_PRODUCT";
import {rooturlserver} from '../../component/axio'
import axios from 'axios'

const req = ()=>{
    return{
        type:REQ_PRODUCT
    }
}

const succ = (data)=>{
    return{
        type:SUCC_PRODUCT,
        payload:data
    }
}

const fail = (err) =>{
    return{
        type:FAIL_PRODUCT,
        payload:err
    }
}


export const getProduct = () =>{
    return(dispatch)=>{
        dispatch(req);
        axios({
            url:`${rooturlserver}/api/admin/product`,
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




























