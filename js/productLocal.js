let localProducts = JSON.parse(localStorage.getItem("products")) || [];
import { toast } from "./toast.js";
import { updateTbodyUI } from "./updateUI.js";

// add prodact
export const addProduct = (product) => {
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];

  const item = localProducts.find((prod) => prod.id == product.id);

  if (!item) {
    localStorage.setItem(
      "products",
      JSON.stringify([...localProducts, product])
    );
    toast("success", "Nice choise! You've added a new item to your cart ;)");
  } else {
    toast("massage", "Oops! Slow down! This item is already in your cart :)");
  }
};

// remove product
export const deleteElement = (e) => {
  const id = e.target.dataset.id;
  localProducts = localProducts.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
};

// increment
export const incrementItem = (e) => {
  const id = e.target.dataset.id;
  console.log(e.target.dataset.id);

  localProducts = localProducts.map((product) => {
    if (product.id == id) {
      return {
        ...product,
        amount: product.amount + 1,
      };
    } else {
      return product;
    }
  });

  localStorage.setItem("product", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
};
