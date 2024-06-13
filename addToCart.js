
import { getCardProductFromLS } from "./getCardProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCardProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCardProductFromLS();
  // console.log(arrLocalStorageProduct);

  const currentProdElem = document.querySelector(`#card${id}`);

  let quantity = currentProdElem.querySelector(".productQuantity").innerText;
  let price = currentProdElem.querySelector(".productPrice").innerText;
  price = price.replace("₹", "");

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity).toFixed(2);

    let updatedCart = { id, price, quantity };
    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    //? to show the pop up toast after removed or added
    showToast("add", id);
  }

  if (existingProd) {
    return false;
  }

  price = Number(price * quantity).toFixed(2);
  quantity = Number(quantity);
  // console.log(price, quantity);

  arrLocalStorageProduct.push({ id, price, quantity });
  // console.log(arrLocalStorageProduct.length);

  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update cart value
  updateCartValue(arrLocalStorageProduct);

  //? to show the pop up toast after removed or added
  showToast("add", id);
};
