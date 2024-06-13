
import { getCardProductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCardProductFromLS();

  cartProducts = cartProducts.filter( (curPod) => curPod.id !== id);

  //* update the local Storage after removing the item for  cart
  localStorage.setItem("cartProductLS" , JSON.stringify(cartProducts));

  let removeDiv = document.querySelector(`#card${id}`);

  //* To remove cart item div on click
  if (removeDiv) {
    removeDiv.remove();
    //? to show the pop up toast after removed or added
    showToast("delete", id);
    
  }

  //* To update the cart Value the moment items are removed
  updateCartValue(cartProducts);

  //* updating the cart total in our cartProducts page
  updateCartProductTotal();

};