export function showToast(operation , id) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  //* set the text content of the toast based omn the operation
  if (operation === "add") {
    toast.textContent = `Product with ID ${id} has been added.`;
  } else {
    toast.textContent = `Product with ID ${id} has been deleted.`;
  }

  document.body.appendChild(toast);

  //* Automatically remove the toast after 2s
  setTimeout(() => {
    toast.remove();
  } , 2000);
};