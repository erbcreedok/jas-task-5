import axios from "axios";

export const SET_PRODUCTS = 'shop/setProducts'

export const ADD_TO_BASKET = 'shop/addToBasket'
export const INC_BASKET = 'shop/incBasket'
export const DEC_BASKET = 'shop/decBasket'

export const OPEN_MODAL = 'shop/openModal'
export const CLOSE_MODAL = 'shop/closeModal'

export const fetchProducts = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data,
        })
    })
}

export const addToBasket = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: product,
    })
}
