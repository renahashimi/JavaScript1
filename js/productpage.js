const productContent = document.querySelector(".productContent"); 

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");

const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;
console.log (apiUrl);



async function showProductInfo () {
    try {
      const response = await fetch(apiUrl);
      const jacket = await response.json();

      createProductInfo (jacket); 
      
    
  } catch(error) {
    console.log (error);
}}


function createProductInfo (jacket) {
    productContent.innerHTML += `<a href="product.html?id=${jacket.id}" class="productInfo">
                                    <h1 class="productName">${jacket.title}</h1> 
                                    <div class="productImage2" style="background-image: url(${jacket.image})"></div>
                                    <p class="productPrice2">${jacket.price}</p> 
                                    <div>
                                    <div class="properties">PROPERTIES</div> 
                                    <p class="productDetail">${jacket.description}</p>
                                    <div class="infoBox">
                                    <p class="productGender">Gender: ${jacket.gender}</p> 
                                    <p class="productColor">Color: ${jacket.baseColor}</p> 
                                    </div>
                                    <div>
                                    <button class="sizeButton">${jacket.sizes}</button>
                                    <a href="cart.html" id="atc">ADD TO CART</a>
                                  </div>`;  
} 
showProductInfo (); 
   
const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "  "+ "BACK TO JACKETS";


const 
  selectSize = document.querySelector (".sizeButton") ;         
  let sizes = document.getElementById ("{jacket.sizes}");

array.from(sizes).forEach(function (selectSize) {
 selectSize.addEventlistener("click", function () {

  console.log (selectSize);
  
  console.log(sizes);

  });
});
