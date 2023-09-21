import { PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL } from "../constants/productconstants";

export const productListReducer=(state={product:[]},action)=>{
switch(action.type){
    case PRODUCT_LIST_SUCCESS:
        return {product:action.payload}
    case PRODUCT_LIST_FAIL:
        return{product:action.error}
    default:
        return state        
}
}