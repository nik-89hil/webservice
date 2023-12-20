import {configureStore,combineReducers, applyMiddleware} from '@reduxjs/toolkit';
import  {thunk} from 'redux-thunk';
import { productReducer } from './reducer/product';
import {toolReducer} from './reducer/tool';
import {adminReducer} from './reducer/admin';
import {clientReducer} from './reducer/client';
import {nikwebReducer} from './reducer/nikweb';


const rootReducer = combineReducers({
    product:productReducer,
    tool:toolReducer,
    admin:adminReducer,
    client:clientReducer,
    nikweb:nikwebReducer,

});

const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware: ()=>[thunk]
});

export default store



