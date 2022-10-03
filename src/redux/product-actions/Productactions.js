import { ACTION_TYPE } from "../types/Actiontypes"




export const addtocart=(products)=>{
    return {
        type:ACTION_TYPE.ADD_TO_CART,payload:products,
    }
}

export const removefromcart=(id)=>{
    return {
        type:ACTION_TYPE.REMOVE_FROM_CART,payload:id,
    }
}
export const fetchproduct= ()=>{
    
    return async(dispatch)=> {
        
        const response=await fetch("https://fakestoreapi.com/products")
        const data=await response.json()
    dispatch({type:ACTION_TYPE.FETCH_PRODUCTS,payload:data})

    }
    
   
}