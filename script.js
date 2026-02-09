const products = [
  {
    title: "Premium Deadlift Straps",
    description: "Built to withstand the toughest workouts, these weight lifting gloves with straps offer long-lasting performance.",
    image: "images/grip.png",
    rating: "★★★★☆",
    link: "https://amzn.to/4baN4CM"
  },
  {
    title: "Honey Jar",
    description: "No Drip with Base 2025 Upgrade, 12OZ Glass Honey Jar pot with Handle, Syrup Dispenser for Coffee or Tea, Mess Free Honey Dispenser for Honey and Syrup, Honey Container",
    image: "images/jar.png",
    rating: "★★★★☆",
    link: "https://amzn.to/4qqJ0SO"
  },
  {
    title: "Smart Fitness Watch",
    description: "CONTINUOUS MONITORING: WHOOP monitors your most important metrics, including sleep, heart rate, blood oxygen, stress, menstrual cycle, and insights to optimize fitness, recovery, and overall health.",
    image: "images/watch.png",
    rating: "★★★★☆",
    link: "https://amzn.to/3NydlB6"
  },
  {
    title: "Portable Power Bank",
    description: "Fast charging power bank for phones and tablets.",
    image: "images/power .png",
    rating: "★★★★☆",
    link: "https://amzn.to/3Nx4cZx"
  }

,
  {
    title: "Noise Cancelling Headphones",
    description: "Hybrid Active Noise Cancelling: 2 internal and 2 external mics work in tandem to detect external noise and effectively reduce up to 90% of it, no matter in airplanes, trains, or offices.",
    image: "images/headphones.png",
    rating: "★★★★★",
    link: "https://amzn.to/3LF2aWO"
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
