document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Black Hoodie', price: '$50' },
        { id: 2, name: 'White T-Shirt', price: '$30' },
        { id: 3, name: 'Grey Sweatshirt', price: '$45' }
    ];

    const productContainer = document.getElementById('product-list');
    if (productContainer) {
        products.forEach(product => {
            const div = document.createElement('div');
            div.innerHTML = `<p>${product.name} - ${product.price}</p>
                             <button onclick="addToCart(${product.id})">Add to Cart</button>`;
            productContainer.appendChild(div);
        });
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase();
            const searchResults = document.getElementById('search-results');
            searchResults.innerHTML = '';
            products.forEach(product => {
                if (product.name.toLowerCase().includes(query)) {
                    const div = document.createElement('div');
                    div.textContent = product.name;
                    searchResults.appendChild(div);
                }
            });
        });
    }
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `Product ID: ${item}`;
        cartItems.appendChild(div);
    });
}