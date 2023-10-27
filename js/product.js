import { productSection } from "./index.js"
import  { url }  from "./index.js"

async function showProducts() {

    const response = await fetch(url);
    const products = await response.json();    
    
    console.log(products);
    productSection.innerHTML = "";
    

    for (let i = 0; i <products.length; i++) {
        console.log(products[i]);

    

products.forEach(function (jacket){
    
productSection.innerHTML += ` <div class="jacketInfo">
                                <div class="jacketContainer">
                                <a href="product.html?id=${jacket.id}" class="productJacket>
                                <div class="productname">${jacket.title}</div>
                                <div class="productImage"style="background-image: url(${jacket.image})"></div>
                                <p class="productPrice">${jacket.price + " " + "$"}</p><div>
                                <div class="bnBox"><a href="product.html?id=${jacket.id}" id="bn"> Read More </a></div> 
                                </a>
                                </div>
                             </div>`;
    });
    }}

showProducts ();
