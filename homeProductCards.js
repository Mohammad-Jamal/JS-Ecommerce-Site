import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
  if (!products) {
    return false
  }

  products.forEach( (curProd) => {
    const {id ,name, description, brand, stock, image,price, category} = curProd;

    const productClone = document.importNode(productTemplate.content , true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = 'image';
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 2}`;

    productClone.querySelector(".stockElement").addEventListener('click', (event) => {
      homeQuantityToggle(event, id, stock);
    })

    productClone.querySelector(".add-to-cart-button").addEventListener('click',(event) => {
      addToCart(event, id, stock);
    })

    productContainer.append(productClone);

  })
};