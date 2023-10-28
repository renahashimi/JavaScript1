const productContent = document.querySelector(".productContent"); 

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");

const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;



async function showProductInfo () {
    try {
      const response = await fetch(apiUrl);
      const jacket = await response.json();

      createProductInfo (jacket); 
      selectSizes (jacket.sizes);
      
    
  } catch(error) {
    console.log (error);
}}

function createProductInfo (jacket) {
    productContent.innerHTML += `
                                    <h1 class="productName">${jacket.title}</h1> 
                                    <div class="productImage2" style="background-image: url(${jacket.image})"></div>
                                    <div>
                                    <div class="properties">discription ${jacket.title}</div> 
                                    <p class="productDetail">${jacket.description}</p>
                                    <div class="infoBox">
                                    <p class="productGender">Gender: ${jacket.gender}</p> 
                                    <p class="productColor">Color: ${jacket.baseColor}</p> 
                                    </div>
                                    <div><p class="productPrice2">${jacket.price}</p></div>
                                    <div> 
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
                                    <a href="cart.html" id="atc">ADD TO CART</a>
                                  `;  

}
showProductInfo (); 
   
const backButton = document.querySelector(".backbutton");
backButton.innerHTML = "  "+ "BACK TO JACKETS";


