const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', () => {
      // Get data from this card
      const imgSrc = card.querySelector('img').src;
      const title = card.querySelector('h3').innerText;
      const price = card.querySelector('.price').innerText;

      // Save to localStorage
      localStorage.setItem('productImage', imgSrc);
      localStorage.setItem('productTitle', title);
      localStorage.setItem('productPrice', price);

      // Redirect to product page
      window.location.href = 'product.html';
    });
  });

  // Get stored data from localStorage
  const imgSrc = localStorage.getItem('productImage');
  const title = localStorage.getItem('productTitle');
  const price = localStorage.getItem('productPrice');

  // Set data in product.html
  if (imgSrc && title && price) {
    document.getElementById('product-img').src = imgSrc;
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-price').innerText = price;
  }