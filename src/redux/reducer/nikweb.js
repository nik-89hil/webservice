import {REQ_NIK,SUCC_NIK,FAIL_NIK} from '../action/nikweb'

const intialstate = {
    loading:true,
    data:[],
    err:""
}


export const nikwebReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case REQ_NIK:
            return{
                ...state,
            }
        case SUCC_NIK:
            return{
                ...state,
                data:[action.payload],
                loading:false
            }
        case FAIL_NIK:
            return{
                ...state,
                err:action.payload,
                loading:true
            }
    
        default: return state
    }
}
















