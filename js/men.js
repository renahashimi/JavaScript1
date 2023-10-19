
const url = "https://api.noroff.dev/api/v1/rainy-days";
let productSection = document.querySelector(".productSection");

const productContainerMen = document.querySelector(".productContainerMen");
productContainerMen.innerHTML += `<h1>MEN</h1>`;


const buyNow = document.querySelector(".bn");
function productPage () {
    window.location.href = "../product.html";
}

async function showProducts() {

    const response = await fetch(url);
    const result = await response.json();
    this.info = result;
    
    let products = result ;
    console.log(products);
    productSection.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);

        if (i === 10) {
            break;
        }

        productSection.innerHTML += `
                                     <div class="productName">${products[i].title}</div>
                                     <div class="productImage"style="background-image: url(${products[i].image})"></div>
                                     <p class="price">${products[i].price + " " + "$"}</p>
                                     <button class="bn" onclick="productPage()"> BUY NOW</button> `;

}

}

showProducts();
