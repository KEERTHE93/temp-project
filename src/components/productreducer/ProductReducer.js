import { ACTION_TYPE } from "../../redux/types/Actiontypes";

const initialstate={
    products:[],
    cartData:[]

}


export const ProductReducer=(state=initialstate,action)=>{
    switch(action.type){

        case ACTION_TYPE.ADD_TO_CART:
        return {...state,cartData:[...state.cartData,action.payload]};
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterproduct= state.cartData.filter((cartitems)=>cartitems.id!==action.payload)
            return {...state,cartData:filterproduct} ;
        case ACTION_TYPE.FETCH_PRODUCTS:
            return {...state,products:action.payload};          
        default :
        return state;

    }
}