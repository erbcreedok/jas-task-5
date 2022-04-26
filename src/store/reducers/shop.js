import {ADD_TO_BASKET, CLOSE_MODAL, DEC_BASKET, INC_BASKET, OPEN_MODAL, SET_PRODUCTS} from '../actions/shopActions'

const initState = {
    products: [],
    basket: [],
    modalOpen: false,
}
export function shop(state = initState, action) {
    const newState = {...state}
    let item;
    switch (action.type) {
        case SET_PRODUCTS:
            newState.products = action.payload;
            break;
        case ADD_TO_BASKET:
            item = newState.basket.find(({ product }) => product.id === action.payload.id)
            if (item) {
                item.count += 1;
                newState.basket = [...newState.basket];
            } else {
                newState.basket = [...newState.basket, { product: action.payload, count: 1 }];
            }
            break;
        case INC_BASKET:
            item = newState.basket.find(({ product }) => product.id === action.payload.id)
            if (item) {
                item.count += 1;
                newState.basket = [...newState.basket];
            }
            break;
        case DEC_BASKET:
            item = newState.basket.find(({ product }) => product.id === action.payload.id)
            if (item) {
                item.count -= 1;
                newState.basket = [...newState.basket];
            }
            break;
        case OPEN_MODAL:
            newState.modalOpen = true
            break;
        case CLOSE_MODAL:
            newState.modalOpen = false
            break;
        default:
            return state
    }
    return newState;
}
