import {REQ_ADMIN,SUCC_ADMIN,FAIL_ADMIN} from '../action/admin'

const intialstate = {
    loading:true,
    data:[],
    err:""
}


export const adminReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case REQ_ADMIN:
            return{
                ...state,
            }
        case SUCC_ADMIN:
            return{
                ...state,
                data:[action.payload],
                loading:false
            }
        case FAIL_ADMIN:
            return{
                ...state,
                err:action.payload,
                loading:true
            }
    
        default: return state
    }
}
















