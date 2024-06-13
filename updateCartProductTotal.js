import { getCardProductFromLS } from "./getCardProducts";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCardProductFromLS();

  let initialValue = 0;

  let totalProductPrice = localCartProducts.reduce( (accum ,curElem) => {
    let productPrice = parseInt(curElem.price) || 0;
    return accum + productPrice;
  }, initialValue);

  // console.log(totalProductPrice);
  productSubTotal.textContent = `${totalProductPrice}`;
  productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
  productFinalTotal.textContent = totalProductPrice !== 0 ? `₹${totalProductPrice + 50}` : 0;
};