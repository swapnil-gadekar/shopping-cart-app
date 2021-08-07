import {
  SELECT_PRODUCT,
  REMOVE_PRODUCT,
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
} from "../action/actionTypes";

const initialState = {
  selectedProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      let products = [...state.selectedProduct];
      products.push(action.payload);
      return {
        ...state,
        selectedProduct: products,
      };

    case INCREMENT_PRODUCT_COUNT:
      let incrementCount = [...state.selectedProduct];
      incrementCount.map((item) =>
        item.id === action.payload
          ? { ...item, product_count: (item.product_count += 1) }
          : { ...item }
      );
      return {
        ...state,
        selectedProduct: incrementCount,
      };

    case DECREMENT_PRODUCT_COUNT:
      let decrementCount = [...state.selectedProduct];
      decrementCount.map((item) =>
        item.id === action.payload
          ? { ...item, product_count: (item.product_count -= 1) }
          : { ...item }
      );
      return {
        ...state,
        selectedProduct: decrementCount,
      };

    case REMOVE_PRODUCT:
      let itemToRemove = state.selectedProduct.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        selectedProduct: itemToRemove,
      };
    default:
      return { ...state };
  }
};

export default productReducer;
