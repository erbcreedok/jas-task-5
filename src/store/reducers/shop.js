import {ADD_TO_BASKET, SET_PRODUCTS} from '../actions/shopActions'

const initState = {
    products: [],
    basket: [],
}
export function shop(state = initState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_PRODUCTS:
            newState.products = action.payload;
            break;
        case ADD_TO_BASKET:
            newState.basket = [...newState.basket, action.payload];
            break;
        default:
            return state
    }
    return newState;
}
