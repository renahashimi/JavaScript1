const url = "https://api.noroff.dev/api/v1/rainy-days";

let cartButton = document.querySelector(".atc");
cartButton.innerHTML = "ADD TO CART";


function addCart() {
  window.location.href = "../cart.html";
}

let jacket = products;
let productTitle = document.createElement(".productTitle");
let productImage = document.querySelector(".productImage");
let productPrice = document.querySelector(".productPrice");
let productSize = document.querySelector(".productSize");
let productDetail = document.querySelector(".productDetail");


async function productPage () {
  try {
    const response = await fetch (url);
    const result = await response.json();

    console.log (result);
    products = result;

    for (let i = 0; i < products.length; i++) {
      console.log(products[i]);

      if (i === 10) {
          break;
      }
    }
  } catch (error) {
        console.log(error);
  }}  

    
productPage().then (() => {

products.forEach((jacket)  => {
    if (jacket === products[O] { 
        productTitle = $(products[0].title)
        productImage =
        productPrice =
        productSize = 
        productDetail = 
      } else if (jacket === products[1]) {
        productTitle = 
        productImage =
        productPrice =
        productSize = 
        productDetail =   
      } else if (jacket === products[2]) { 
        productTitle = 
        productImage =
        productPrice =
        productSize = 
        productDetail =  
      } else if (products[O] === true) { 
        productTitle = 
        productImage =
        productPrice =
        productSize = 
        productDetail = 
      } else if (products[O] === true) { 
        productTitle = 
        productImage =
        productPrice =
        productSize = 
        productDetail = 
          
      } else {
     
      }
    

    )
}
});

      
productPage();
