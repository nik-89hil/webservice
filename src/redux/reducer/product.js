import {REQ_PRODUCT,SUCC_PRODUCT,FAIL_PRODUCT} from '../action/product'

const intialstate = {
    loading:true,
    data:[],
    err:""
}


export const productReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case REQ_PRODUCT:
            return{
                ...state,
            }
        case SUCC_PRODUCT:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
        case FAIL_PRODUCT:
            return{
                ...state,
                err:action.payload,
                loading:true
            }
    
        default: return state
    }
}
















