const products = [
  {
    title: "Wireless Bluetooth Earbuds",
    description: "Compact earbuds with deep bass and long battery life.",
    image: "images/ad.png",
    rating: "★★★★☆",
    link: "https://amzn.to/3YXnvxt"
  },
  {
    title: "Smart Fitness Watch",
    description: "Track steps, heart rate, and workouts easily.",
    image: "images/ut.png",
    rating: "★★★★★",
    link: "https://www.amazon.com/?tag=YOURAFFILIATEID"
  },
  {
    title: "Portable Power Bank",
    description: "Fast charging power bank for phones and tablets.",
    image: "images/ut.png",
    rating: "★★★★☆",
    link: "https://amzn.to/3YXnvxt"
  }

,
  {
    title: "Noise Cancelling Headphones",
    description: "Immersive sound with active noise cancellation.",
    image: "images/cc.png",
    rating: "★★★★★",
    link: "https://www.amazon.com/?tag=YOURAFFILIATEID"
  }
];

function searchProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(input) ||
    product.description.toLowerCase().includes(input)
  );

  renderProducts("topPicks", filteredProducts);
}




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


renderProducts("topPicks", products);
renderProducts("bestDeals", products);
renderProducts("trending", products);
