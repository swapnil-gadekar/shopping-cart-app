import { SELECT_PRODUCT, REMOVE_PRODUCT, INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } from "./actionTypes";

export const selectProduct = (selectedProduct) => {
    return {
        type: SELECT_PRODUCT,
        payload: selectedProduct
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}

export const incrementProductCount = (id) => {
    return {
        type: INCREMENT_PRODUCT_COUNT,
        payload: id
    }
}

export const decrementProductCount = (id) => {
    return {
        type: DECREMENT_PRODUCT_COUNT,
        payload: id
    }
}