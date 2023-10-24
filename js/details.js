const productSection = document.querySelector(".productSection");
const url = "https://api.noroff.dev/api/v1/rainy-days";

async function showProducts() {

    const response = await fetch(url);
    const result = await response.json();
    
    let products = result ;
    console.log(products);
    productSection.innerHTML = "";
    

    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);

        if (i === 12) {
            break;
        }

products.forEach(function (jacket){
    
productSection.innerHTML += ` <a href="product.html?id=${jacket.id}" class="productJacket>
                                <div class="productName">${jacket.title}</div>
                                <div class="productImage"style="background-image: url(${jacket.image})"></div>
                                <p class="price">${jacket.price + " " + "$"}</p><div>
                                <div><a href="product.html?id=${jacket.id}" id="atc">  </a></div> 
                            </a>`;
    });
    }}

    showProducts ();
  