import {REQ_TOOL,SUCC_TOOL,FAIL_TOOL} from '../action/tool'

const intialstate = {
    loading:true,
    data:[],
    err:""
}


export const toolReducer = (state=intialstate,action)=>{
    switch (action.type) {
        case REQ_TOOL:
            return{
                ...state,
            }
        case SUCC_TOOL:
            return{
                ...state,
                data:action.payload,
                loading:false
            }
        case FAIL_TOOL:
            return{
                ...state,
                err:action.payload,
                loading:true
            }
    
        default: return state
    }
}
















