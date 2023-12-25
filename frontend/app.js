const productList = document.getElementById("search-item");
const API = "http://localhost:3000/products/getproducts";

async function fetchProducts() {
    try {
        const response = await fetch(API);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('There was a problem fetching the products:', error);
        return []; // Return an empty array or handle the error accordingly
    }
}

// Function to create product elements
function createProductElement(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.img;
    productImage.alt = 'image';

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productPrice = document.createElement('h3');
    productPrice.textContent = product.price;

    productDetails.appendChild(productName);
    productDetails.appendChild(productPrice);

    productDiv.appendChild(productImage);
    productDiv.appendChild(productDetails);

    return productDiv;
}

function renderProducts(products) {
    console.log("products", products)
    const productListDiv = document.getElementById('product-list');
    
    // Clear existing content in the product list
    productListDiv.innerHTML = '';

    // Create and append product elements to the product list
    products.data.forEach(product => {
        const productElement = createProductElement(product);
        productListDiv.appendChild(productElement);
    });
}

fetchProducts()
    .then(data => {
        renderProducts(data);
    });

const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeItems.getElementsByTagName("h2")
    
    for (let i = 0; i < pname.length; i++) {
        const match = product[i].getElementsByTagName("h2")[0]
        if (match) {
            const textValue = match.textValue || match.textContent

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
        
    }
    
}