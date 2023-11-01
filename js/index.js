//URL for Rainydays
export const productSection = document.querySelector(".productSection");
export const url = "https://api.noroff.dev/api/v1/rainy-days/";
import { showProducts } from "./product.js";
showProducts();




//URL for Rainydays + ID
export const productContent = document.querySelector(".productContent"); 
export const params = new URLSearchParams (document.location.search);
export const id = params.get ("id");
export const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;
export const cartContent = document.getElementById(".cartContent");



//Loader only for "Productpage" /"product.html"
const load = document.querySelector(".loader");
const loader = document.querySelector(".loader-indicator");

setTimeout (function () {
  loader.classList.remove("loader-indicator");
}, 3000);

setTimeout(function () {
  load.innerHTML = "Is this your new jacket?" + " " + "&#128525"
}, 3000);




// Error message

