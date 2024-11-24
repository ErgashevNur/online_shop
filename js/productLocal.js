export let localProducts = JSON.parse(localStorage.getItem("products")) || [];
import { toast } from "./toast.js";
import { updateTbodyUI } from "./updateUI.js";
const basket = document.getElementById("basket");

const calculateTotal = () => {
  let totalAmount = 0;
  let totalPrice = 0;
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];
  localProducts.forEach((product) => {
    totalAmount += product.amount;
    totalPrice += product.amount * product.price;
  });
  basket.textContent = totalAmount;
};

if (localProducts.length) {
  calculateTotal();
}

// add prodact
export const addProduct = (product) => {
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];

  const item = localProducts.find((prod) => prod.id == product.id);

  if (!item) {
    localStorage.setItem(
      "products",
      JSON.stringify([...localProducts, product])
    );
    calculateTotal();
    toast("success", "Nice choise! You've added a new item to your cart ;)");
  } else {
    toast("massage", "Oops! Slow down! This item is already in your cart :)");
  }
};

// remove product
export const deleteElement = (e) => {
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];
  const id = e.target.dataset.id;
  localProducts = localProducts.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
  calculateTotal();
};

// updateAmount
export const updateAmount = (e, currentAmount) => {
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];

  if (currentAmount == 0) {
    deleteElement(e);
    return;
  }

  const id = e.target.dataset.id;
  let updateAmountItem = localProducts.map((product) => {
    if (product.id == id) {
      return {
        ...product,
        amount: currentAmount,
      };
    } else {
      return product;
    }
  });
  localStorage.setItem("products", JSON.stringify(updateAmountItem));
  calculateTotal();
};
