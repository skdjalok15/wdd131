// Define an array of eco-friendly products
const ecoProducts = [
    { name: "Reusable Water Bottle", price: "$10", image: "images/product1.jpg" },
    { name: "Organic Cotton T-Shirt", price: "$20", image: "images/product2.jpg" },
    { name: "Bamboo Toothbrush", price: "$5", image: "images/product3.jpg" }
  ];
  
  // Function to render products dynamically
  function renderProducts() {
    const productList = document.getElementById("productList");
    ecoProducts.forEach(product => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${product.image}" alt="${product.name}" width="100">
                      <p><strong>${product.name}</strong> - ${product.price}</p>`;
      productList.appendChild(li);
    });
  }
  
  // Add event listener to toggle button
  document.getElementById("toggleBtn").addEventListener("click", function() {
    const tipsSection = document.getElementById("tipsSection");
    tipsSection.style.display = (tipsSection.style.display === "none") ? "block" : "none";
  });
  
  // Call the render function when the page loads
  window.onload = function() {
    renderProducts();
  };
  
