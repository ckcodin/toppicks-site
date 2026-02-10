let allProducts = [];

// Fetch products from JSON
fetch("products.json")
  .then(response => response.json())
  .then(data => {
    allProducts = data;

    renderProducts("topPicks", filterByCategory("top"));
    renderProducts("bestDeals", filterByCategory("deal"));
    renderProducts("trending", filterByCategory("trending"));
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });

// Filter by category
function filterByCategory(category) {
  return allProducts.filter(product =>
    product.categories.includes(category)
  );
}

// Search
function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(input) ||
    product.description.toLowerCase().includes(input)
  );

  renderProducts("topPicks", filtered);
}

// Render cards (UNCHANGED UI)
function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  productList.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="rating">${product.rating}</div>
      <a href="${product.link}" target="_blank" rel="nofollow noopener">
        Check Price on Amazon
      </a>
    `;

    container.appendChild(card);
  });
}
