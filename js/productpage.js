import { productContent, apiUrl } from "./index.js";


export async function showProductInfo () {
    try {
      const response = await fetch(apiUrl);
      const jacket = await response.json();

      createProductInfo (jacket);
     
} catch(error) {
  console.log (error);
}
}

function createProductInfo (jacket) {
  setTimeout (function() {
    productContent.innerHTML += ` <h1 class="productName">${jacket.title}</h1> 
                                  <div class="productImage2" style="background-image: url(${jacket.image})" alt"${jacket.title}"></div>
                                  <div>
                                    <div class="properties">description of ${jacket.title}</div> 
                                    <p class="productDetail">${jacket.description}</p>
                                    <div class="infoBox">
                                    <p class="productGender">Gender: ${jacket.gender}</p> 
                                    <p class="productColor">Color: ${jacket.baseColor}</p> 
                                  </div>
                                  <div>
                                    <div><p class="productPrice2">${jacket.price + " " + "$"}</p></div>
                                    <div class="onSaleSection"><p id="onSaleSection2">${jacket.discountedPrice + " " + "$"}</p></div>
                                  </div>
                                  <div class="selectbox">
                                    <div class="formbox">
                                      <p class="slcSize">SELECT SIZE</p>
                                     <form class="sizeform">
                                      <select class="sizeSelection" id="sizes">
                                        <option value="sizeXS" id="selectsize2">${jacket.sizes[0]}</option>
                                        <option value="sizeS" id="selectsize2">${jacket.sizes[1]}</option>
                                        <option value="sizeM" id="selectsize2">${jacket.sizes[2]}</option>
                                        <option value="sizeL" id="selectsize2">${jacket.sizes[3]}</option>
                                        <option value="sizeXL" id="selectsize2">${jacket.sizes[4]}</option>
                                      </select>
                                    </form>
                                    </div>
                                    <div><a href="cart.html?id=${jacket.id}" id="atc">ADD TO CART</a></div>
                                  </div>`;

let priceText = document.querySelector(".productPrice2");
let onSaleText = document.querySelector("#onSaleSection2");

if (jacket.onSale) {
    priceText.innerHTML = "<strike>" + "(" + priceText.innerHTML + ")" + "</strike>";
    priceText.style.fontSize = "0.8em"
  } else {
    onSaleText.style.display = "none";
  }


}, 2500);


}                                
showProductInfo (); 
   


const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "  "+ "BACK TO JACKETS";


