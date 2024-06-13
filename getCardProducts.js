import { updateCartValue } from "./updateCartValue";


export const getCardProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");

  if (!cartProducts) {
    return [];
  }

  cartProducts = JSON.parse(cartProducts);


  //update cart value
  updateCartValue(cartProducts);

  return cartProducts;
};