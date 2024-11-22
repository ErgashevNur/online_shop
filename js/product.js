import "./mode.js";
import request from "./request.js";

const titleEl = document.getElementById("title");
const thumbnailEl = document.getElementById("thumbnail");
const descriptionEl = document.getElementById("description");
const brandEl = document.getElementById("brand");
const carousel = document.getElementById("carousel");
const coruselItemTemp = document.getElementById("carousel-item");

const location = window.location.search;
const params = new URLSearchParams(location).get("id");
console.log(params);

if (params) {
  request(`https://dummyjson.com/products/${params}`).then((product) => {
    const { title, thumbnail, description, brand, images } = product;

    if (images.length > 1) {
      carousel.classList.remove("hidden");
      images.forEach((imgSrc) => {
        const clone = coruselItemTemp.content.cloneNode(true);
        console.log(clone);
        const image = clone.querySelector("img");
        image.src = imgSrc;
        carousel.appendChild(clone);
      });
    } else {
      thumbnailEl.src = images[0];
    }
    titleEl.textContent = title;
    descriptionEl.textContent = description;
    brandEl.textContent = brand;
  });
}
