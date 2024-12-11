// site-script.js (JavaScript module)

const products = [
  {
    name: 'Product 1',
    price: '$25.00',
    description: 'This is an amazing product.',
    image: 'eco-product1.jpg' // Optional: Add an image path
  },
  {
    name: 'Product 2',
    price: '$40.00',
    description: 'This product will blow your mind.',
    image: 'eco-product2.jpg' // Optional: Add an image path
  },
  {
    name: 'Product 3',
    price: '$30.00',
    description: 'The best product ever.',
    image: 'eco-product3.jpg' // Optional: Add an image path
  }
];

// Function to dynamically display products
function displayProducts() {
  const productsContainer = document.getElementById('products-container');
  productsContainer.innerHTML = ''; // Clear existing content

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // Add styling class

    // Dynamically generate HTML for each product
    productDiv.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>${product.description}</p>
      <button class="buy-now-btn">Buy Now</button>
    `;
    productsContainer.appendChild(productDiv); // Append to the container
  });
}

// Call the function to display products when the page loads
window.onload = displayProducts;
