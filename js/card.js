import "./mode.js";
import { toast } from "./toast.js";

const localProducts = JSON.parse(localStorage.getItem("products"));

import { updateTbodyUI } from "./updateUI.js";

if (!localProducts) {
  toast("warning", "Oops you don't have any products yet :(");
} else {
  updateTbodyUI(localProducts);
}
