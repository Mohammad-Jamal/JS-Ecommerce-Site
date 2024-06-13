import { getCardProductFromLS } from "./getCardProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  let productQuantity = currentCardElement.querySelector(".productQuantity");
  let productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  //* get data from local storage
  let localCartProducts = getCardProductFromLS();

  let existingProd = localCartProducts.find((curPod) => curPod.id === id);

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
    
  }

  if (event.target.className === "cartDecrement") {
    if(quantity > 1) {
      quantity -= 1;
    }
  }

  //* Finally we will update the price in local storage
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = {id ,price : localStoragePrice , quantity  };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  })

  localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

  //* Furthermore , we need to reflect these changes on the screen 
  productPrice.innerText = localStoragePrice;
  productQuantity.innerText = quantity;

  //* updating the cart total in our cartProducts page
  updateCartProductTotal();
};
