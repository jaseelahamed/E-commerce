import {PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS}from '../constants/productconstants'
import axios from 'axios'


export const listproduct=()=>async (dispatch)=>{
    const {data}=await axios.get('/prodect.json')
    try {
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }
    catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,error:error})
    }
}