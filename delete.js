
/*const properties = ([
    flora = {
        "id": "jacketFlora",
        "title": "Flora",
        "image": "/images/Jacket/flora.jpg",
        "gender": "Female",
        "sizes": ["S", "M", "L"],
        "baseColor": ["red", "black","white"],
        "price": 199,
        "discountedPrice": false,
        "onSale": false,
        "tags": ["Jacket", "Female"],
        "favoritt": true,
        "description": "Thin sporty jacket",
    },
    river = {
        "id": "jacketRiver",
        "title": "River",
        "image": "/images/Jacket/river.jpg",
        "gender": "Male",
        "sizes": ["S", "M", "L"],
        "baseColor": ["Black","Grey"],
        "price": 299,
        "discountedPrice": 299,
        "onSale": false,
        "tags": ["Jacket", "Male"],
        "favoritt": true,
        "description": "Windproof, waterproof and warm jacket",
    },
    oxygen = {
        "id": "jacketOxygen",
        "title": "Oxygen",
        "image": "/images/Jacket/oxygen.jpg",
        "gender": ["Male", "Female"],
        "sizes": ["S", "M", "L"],
        "baseColor": ["Orange", "Grey"],
        "price": 249,
        "discountedPrice":false,
        "onSale": false,
        "tags": ["Jacket", "Male", "Female"],
        "favoritt": true,
        "description": "Windproof, waterproof and warm jacket",
    },
    {
        "id": "jacketSteam",
        "title": "Steam",
        "image": "/images/Jacket/steam.jpg",
        "gender": ["Male", "Female"],
        "sizes": ["S", "M", "L"],
        "baseColor": "Green",
        "price": 199,
        "discountedPrice": 149,
        "onSale": true,
        "tags": ["Jacket", "Male", "Female"],
        "favoritt": false,
        "description": "Windproof and light jacket",
    },
    ocean = {
        "id": "jacketOcean",
        "title": "Ocean",
        "image": "/images/Jacket/ocean.jpg",
        "gender": "Female",
        "sizes": ["S", "M", "L"],
        "baseColor": "Grey",
        "price": 249,
        "discountedPrice": false,
        "onSale": false,
        "tags": ["Jacket", "Female"],
        "favoritt": true,
        "description": "Windproof and lightweight jacket"
    },
    lake = {    
        "id": "jacketLake",
        "title": "Lake",
        "image": "/images/Jacket/lake.jpg",
        "gender": ["Male", "Female"],
        "sizes": ["S", "M", "L"],
        "baseColor": "Grey",
        "price": 199,
        "discountedPrice": 149,
        "onSale": true,
        "tags": ["Jacket", "Male", "Female"],
        "favoritt": false,
        "description": "Waterproof and windproof, your every day jacket",
    },
    ozone = {
        "id": "jacketOzone",
        "title": "Ozone",
        "image": "/images/Jacket/ozone.jpg",
        "gender": "Male",
        "sizes": ["S", "M", "L"],
        "baseColor": ["Black", "White"],
        "price": 299,
        "discountedPrice": 249,
        "onSale": true,
        "tags": ["Jacket", "Male"],
        "favoritt": false,
        "description": "Windproof, waterproof and warm jacket",
    }
 ] );

for (var i = 0; i < 7; i++){
    var jackets = properties[i];

    console.log(jackets);
}

const jacketRiver = document.getElementById("river");
const jacketOxygen = document.getElementById("oxygen");
const jacketOcean = document.getElementById("ocean");
const jacketSteam = document.getElementById("steam");
const jacketLake = document.getElementById("lake");
const jacketOzone = document.getElementById("ozone");
const productImage = document.getElementById("productimg");
const productName = document.getElementById("productname");
const productPrice = document.getElementById("price");


const divs = document.querySelectorAll("productselect > div");


const url = "https://api.noroff.dev/api/v1/rainy-days";


function productPage () {
    window.location.href = "../product.html";
}

async function productPage () {
  try {
    const response = await fetch (url);
    const product = await response.json();

    console.log (product); 
    productContent.innerHTML = "";
    const jackets = product.results;
   

 jackets.forEach(function (jacket) {
  

       productContent.innerHTML += `<a href="product.html?id=${jackets.id}" class="productInfo">
       <h1 class="name">${jackets.title}</h1> 
       <div class="jacketImage" style="background-image: url(${jacket.image}></div>
       <p class="productPrice">${jacket.price}</p> 
       <p class="productDetail">${jacket.description}</p>
       <p class="size">${jacket.sizes}</p>
       </a>`;
  });
}    catch (error) {
        console.log(error); 
        productContent.innerHTML = message("Something went wrong", error);
} }
productPage();
   */