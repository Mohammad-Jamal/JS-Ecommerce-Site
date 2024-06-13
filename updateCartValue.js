const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
  return cartValue.innerHTML = `<i class="fas fa-shopping-cart"> ${cartProducts.length} </i>`;
};