import {configureStore} from "@reduxjs/toolkit";
import customerReducer from './slices/CustomerSlices';
import './App.css';

export const store = configureStore({
    devTools:true,
    reducer:{
        customer:customerReducer
    }   
})