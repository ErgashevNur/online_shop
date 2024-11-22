import { addProduct, incrementItem, deleteElement } from "./productLocal.js";

const homeCartTemplate = document.getElementById("home-card-template");
const productsContainer = document.getElementById("products-container");
const trTemplate = document.getElementById("tr-template");
const tbody = document.querySelector("tbody");

let allProducts;

// stop navigation
const stopNavigation = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  const item = allProducts.find((product) => product.id == id);
  addProduct({ ...item, amount: 1 });
};

export const updateHomeUI = ({ products }) => {
  allProducts = products;
  allProducts.forEach((product) => {
    const { thumbnail, title, description, price, stock, id } = product;
    const clone = homeCartTemplate.content.cloneNode(true);
    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const productTitle = clone.querySelector("h2");
    const paragref = clone.querySelector("p");
    const prices = clone.getElementById("price");
    const stok = clone.getElementById("stock");
    const button = clone.querySelector("button");

    a.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    productTitle.textContent = title;
    paragref.textContent = description;
    prices.textContent = price;
    stok.textContent = stock;
    button.setAttribute("data-id", id);
    button.addEventListener("click", stopNavigation);

    productsContainer.appendChild(clone);
  });
};

export const updateProductUI = () => {};

import { formatNumber } from "./Formatumber.js";
export const updateTbodyUI = (products) => {
  tbody.innerHTML = "";
  products.forEach((prodcut) => {
    const { id, thumbnail, price, amount, brand, title } = prodcut;
    const clone = trTemplate.content.cloneNode(true);
    const image = clone.querySelector("img");
    const titleEl = clone.querySelector(".title");
    const brandEl = clone.querySelector(".brand");
    const priceEl = clone.querySelector(".price");
    const amountEl = clone.querySelector(".amount");
    const deleteBtnEl = clone.querySelector(".delete-btn");
    const incrementItemEl = clone.querySelector(".incrementItem");

    image.src = thumbnail;
    titleEl.textContent = title;
    brandEl.textContent = `Brand: ${brand}`;
    priceEl.textContent = ` ${formatNumber(price)}`;
    amountEl.textContent = amount;
    deleteBtnEl.setAttribute("data-id", id);
    incrementItemEl.setAttribute("data-id", id);

    deleteBtnEl.addEventListener("click", (e) => {
      deleteElement(e);
    });

    incrementItemEl.addEventListener("click", (e) => {
      incrementItem(e);
    });

    // appendchild
    tbody.appendChild(clone);
  });
};
