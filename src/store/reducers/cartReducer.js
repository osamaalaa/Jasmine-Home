import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY, ADD_SHIPPING,ADD_QUANTITY_WITH_NUMBER,RESET_CART,ADD_TO_COMPARE,REMOVE_ITEM_FROM_COMPARE
} from '../actions/action-types/cart-actions'

const initState = {

    
    products: [{
            id: 1,
            title: "Tawel1",
            price: 461,
            image: require("../../markup/images/0.jpg"),
            // //imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../markup/images/0.jpg") , 
            Availability: 7
        },{
            id: 3,
            title: "Tawel2",
            price: 522,
            image: require("../../markup/images/2.jpg"),
            // //imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../markup/images/2.jpg"),
            availability: 7
        },{
            id: 4,
            title: "Tawel3",
            price: 160,
            image: require("../../markup/images/2.jpg"),
            // //imageHover: require("../../images/img-hover3.jpg"),
            quickView: require("../../markup/images/2.jpg"),
            availability: 7
        },{
            id: 5,
            title: "Tawel4",
            price: 130,
            image: require("../../markup/images/4.jpg"),
            // //imageHover: require("../../images/img-hover4.jpg"),
            quickView: require("../../markup/images/4.jpg"),
            available: 7

        },{
            id: 6,
            title: "Tawel5",
            price: 90,
            image: require("../../markup/images/0.jpg"),
            // //imageHover: require("../../images/img-hover5.jpg"),
            quickView: require("../../markup/images/0.jpg"),
            available: 7
        },{
            id: 7,
            title: "Tawel6",
            price: 180,
            image: require("../../markup/images/2.jpg"),
            // //imageHover: require("../../images/img-hover6.jpg"),
            quickView: require("../../markup/images/2.jpg"),
            available: 7

        },
        
    ],
    









    addedItems:[],

    addedItemsToCompare:[],
    

    total: 0,

    shipping: 0
}

const cartReducer = (state = initState, action) => {
   
    if(action.type === ADD_TO_CART)
    {

        let addedItem = state.products.find(item => item.id === action.id)

        //check if the action id exists in the addedItems
        let existed_item= state.addedItems.find(item=> action.id === item.id)

        if(existed_item){

            addedItem.quantity += 1 

            return {
                ...state,
                total: state.total + addedItem.price 
            }

        } else {

            addedItem.quantity = 1;

            //calculating the total

            let newTotal = state.total + addedItem.price 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

            
        }

    }

    if(action.type === ADD_TO_COMPARE){

        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }

    }


    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }

        } else {

            addedItem.quantity = action.qty;
            //calculating the total

            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    // ==============================================================================

    if(action.type === REMOVE_ITEM)
    {
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){

        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {

            ...state,

            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {

            ...state,

            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  

        let addedItem = state.products.find(item=> item.id === action.id) 

        //if the qt == 0 then it should be removed

        if(addedItem.quantity === 1){

            let new_items = state.addedItems.filter(item=>item.id !== action.id)

            let newTotal = state.total - addedItem.price

            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }

        } else {

            addedItem.quantity -= 1

            let newTotal = state.total - addedItem.price

            return {
                ...state,
                total: newTotal
            }

        }
        
    }

    if(action.type === ADD_SHIPPING)
    {
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === 'SUB_SHIPPING')
    {

        return {
            ...state,
            shipping: state.shipping -= 6
        }

    }

    if(action.type === RESET_CART)
    {
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0

        }
    }
    
    else {
        return state
    }
}

export const initStore = (initialState = initState) => {
    return createStore(
        cartReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )

}
