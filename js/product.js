import { productSection, url } from "./index.js";

export async function showProducts() {
   try{
    const response = await fetch(url);
    const products = await response.json();    

    for (let i = 0; i <products.length; i++) {
       //console.log(products[i]);
    
  


products.forEach(function (jacket){  
    
       
    productSection.innerHTML += ` <div class="jacketInfo">
                                  <div class="jacketContainer">
                                    <a href="product.html?id=${jacket.id}" class="productJacket>
                                    <div class="productname">${jacket.title}</div>
                                    <div class="productImage"style="background-image: url(${jacket.image})" alt"${jacket.title}"></div>
                                    <p class="productPrice">${jacket.price + " " + "$"}</p><div>
                                    <div class="onSaleSection"><p id="onSaleSection">${jacket.discountedPrice + " " + "$"}</p></div>                                    <div class="bnBox"><a href="product.html?id=${jacket.id}" id="bn"> Read More </a></div> 
                                    </a>
                                  </div>
                                </div>`;

let priceText = document.querySelector(".productPrice");
let onSaleText = document.querySelector(".onSaleSection");
    if (products.onSale) {
        priceText.innerHTML = "<strike>" + "(" + priceText.innerHTML + ")" + "</strike>";
        priceText.style.fontSize = "0.8em"
    } else {
        onSaleText.style.display = "none";
    }              
                 
}); 
  
    }
   }catch(error) {
    console.log (error);
    productSection.innerHTML = message ("error", error);
   }

}
showProducts ();


/*

for (let i = 0; i <jacket.length; i++) {   
let text = jacket.price;
let sale = jacket.discountedPrice;
    
    console.log(sale);
}    */


