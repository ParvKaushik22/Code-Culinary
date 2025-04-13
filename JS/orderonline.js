// script.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    function toggleHeaderOnScroll() {
        if (window.scrollY > 50) { // Adjust threshold as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleHeaderOnScroll);
});

// Simulated menu data (this would come from the backend in a real app)
const menu = [
    { id: 1, name: "Pulled Pork Sandwich", price: 10.99 },
    { id: 2, name: "Brisket Sandwich", price: 12.99 },
    { id: 3, name: "Mac & Cheese", price: 4.99 },
];

const cart = [];

// Load menu items dynamically
function loadMenu() {
    const menuContainer = document.getElementById("menu-items");
    menu.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuContainer.appendChild(div);
    });
}

// Add item to cart
function addToCart(itemId) {
    const item = menu.find(m => m.id === itemId);
    cart.push(item);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartContainer.appendChild(div);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total-price").textContent = total.toFixed(2);
}

// Initialize page
loadMenu();
