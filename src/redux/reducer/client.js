import {REQ_CLIENT,SUCC_CLIENT,FAIL_CLIENT} from '../action/client'

const intialstate = {
    loading:true,
    data:[],
    err:""
}


export const clientReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case REQ_CLIENT:
            return{
                ...state,
            }
        case SUCC_CLIENT:
            return{
                ...state,
                data:[action.payload],
                loading:false
            }
        case FAIL_CLIENT:
            return{
                ...state,
                err:action.payload,
                loading:true
            }
    
        default: return state
    }
}
















