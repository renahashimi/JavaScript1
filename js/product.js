const productContent = document.querySelector(".productContent"); 

const params = new URLSearchParams (document.location.search);
const id = params.get ("id");
console.log (id);

const apiUrl = "https://api.noroff.dev/api/v1/rainy-days/" + id;
console.log (apiUrl);



async function showProductInfo () {
    try {
      const response = await fetch(apiUrl);
      const jacket = await response.json();
      
    console.log(jacket);

    createProductInfo (jacket);
   
    
  } catch(error) {
    console.log (error);
}}


function createProductInfo (jacket) {
    productContent.innerHTML += `<a href="product.html?id=${jacket.id}" class="productInfo">
                                    <h1 class="name">${jacket.title}</h1> 
                                    <div class="productImage"style="background-image: url(${jacket.image})"></div>
                                    <p class="productPrice">${jacket.price}</p> 
                                    <p class="productDetail">${jacket.description}</p>
                                    <p class="productPrice">${jacket.gender}</p> 
                                    <p class="size">${jacket.sizes}</p>
                                    <a href="product.html?id=${jacket.description}" class="productInfo"></a>
                                  </a>`;
         
 }

showProductInfo (); 
      
  

   




