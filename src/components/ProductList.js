import React from "react";
import ProductCart from "./ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../redux/action/productAction";

const productList = [
  {
    id: 1,
    product_name: "Bread",
    price: 1.1,
  },
  {
    id: 2,
    product_name: "Milk",
    price: 0.5,
  },
  {
    id: 3,
    product_name: "Cheese",
    price: 0.9,
  },
  {
    id: 4,
    product_name: "Soup",
    price: 0.6,
  },
  {
    id: 5,
    product_name: "Butter",
    price: 1.2,
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const setProductToStore = (id, name, price) => {
    let selectedProduct = {
      id: id,
      product_name: name,
      price: price,
      product_count: 1,
    };
    dispatch(selectProduct(selectedProduct));
  };

  const productDetails = useSelector((state) => state.selectedProduct);
  let productMatching = [];
  productList.forEach((element) => {
    productDetails?.forEach((prod) => {
      if (prod.product_name === element.product_name) {
        productMatching.push(prod);
      }
    });
  });

  return (
    <div className="flex md:flex-col justify-between lg:flex-row">
      <div className="flex flex-col container bg-gray-300 rounded-md p-3 justify-items-start max-w-sm">
        <h1 className="font-bold mb-3 text-center">Product List</h1>
        <hr className="border-1 w-full" />
        {productList.map((product) => (
          <div key={product.id}>
            <div className="flex flex-row items-center justify-evenly p-3">
              <div className="font-bold w-20">{product.product_name}</div>
              <div className="font-bold w-20">£ {product.price}</div>
              <button
                className="bg-gradient-to-r from-blue-900 to-blue-400 rounded-full py-2 px-2 my-2 text-sm text-white hover:bg-blue-400 hover:from-blue-500 hover:to-blue-600 flex flex-row justify-center w-28 outline-none"
                disabled={productMatching.find(
                  (matchProduct) => matchProduct.id === product.id
                )}
                onClick={() =>
                  setProductToStore(
                    product.id,
                    product.product_name,
                    product.price,
                    product.selected
                  )
                }
                style={
                  productMatching.find(
                    (matchProduct) => matchProduct.id === product.id
                  )
                    ? { background: "#8080809e", cursor: "not-allowed" }
                    : {}
                }
              >
                Add
              </button>
            </div>
            <hr className="border-1 w-full" />
          </div>
        ))}
      </div>
      <ProductCart />
    </div>
  );
}

export default ProductList;
