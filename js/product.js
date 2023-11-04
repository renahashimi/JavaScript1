import { productSection, url, errorMessage } from "./script.js";

export async function showProducts() {
   try{
    const response = await fetch(url);
    const products = await response.json();    

    for (let i = 0; i <products.length; i++) {
       //console.log(products[i]);
       //(i === 2) - to show more products on page.
     if (i === 2) {
        break;
     }

//API call for every jacket
products.forEach(function (jacket){  
  productSection.innerHTML += ` <div class="jacketInfo">
                                  <div class="jacketContainer">
                                    <a href="product.html?id=${jacket.id}" class="productJacket>
                                    <div class="productname">${jacket.title}</div>
                                    <div class="productImage"style="background-image: url(${jacket.image})" alt"${jacket.title}"></div>
                                    <p class="productPrice">${jacket.price + " " + "$"}</p><div>
                                    <div class="bnBox"><a href="product.html?id=${jacket.id}" id="bn"> Read More </a></div> 
                                    </a>
                                  </div>
                                </div>`;
                         
}); 
}
} catch(error) {
    console.log("Unknown error", error);
    productSection.innerHTML = errorMessage();
} 
}
showProducts ();

