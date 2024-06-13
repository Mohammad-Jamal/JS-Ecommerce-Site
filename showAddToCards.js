import products from './api/products.json';
import { fetchQuantityFromCartLS } from './fetchQuantityFromCartLS';
import { getCardProductFromLS } from './getCardProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCardProductFromLS();

let filterProducts = products.filter( (curProd) => {
  return cartProducts.some( (curElem) => curElem.id === curProd.id)
})

// console.log(filterProducts);

//* To Update Cart Page

let cartElement = document.querySelector('#productCartContainer');
let templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const {name, category, image , id , stock, price} = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productName").textContent = name;

    productClone.querySelector(".productPrice").textContent = lSActualData.price;
    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;

    productClone.querySelector(".stockElement").addEventListener('click', (event) => {
      incrementDecrement(event, id, stock, price);
    })

    productClone.querySelector(".remove-to-cart-button").addEventListener('click',() => removeProdFromCart(id));

    cartElement.appendChild(productClone);
  }) 
}



//* Showing Cart products

showCartProduct();

//* updating the cart total in our cartProducts page

updateCartProductTotal();