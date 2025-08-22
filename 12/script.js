const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const images = document.querySelectorAll('.image-container img[alt="Product Image"]');
const amountDisplay = document.querySelector('.amount');
const AddCart = document.querySelector('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const CartSummary = document.querySelector('.cart-summary');
let currentIndex = 0;

function openSidebar() {
  sidebar.style.display = "flex";
  overlay.style.display = "block";
}

function closeSidebar() {
  sidebar.style.display = "none";
  overlay.style.display = "none";
}

function ShowImage(index){
    images[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % images.length;
    ShowImage(nextIndex);
});

prevBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    ShowImage(prevIndex);
});

function increaseQuantity()
{
    let currentAmount = parseInt(amountDisplay.textContent);
    amountDisplay.textContent = currentAmount + 1;
}

function decreaseQuantity()
{
    let currentAmount = parseInt(amountDisplay.textContent);
    if (currentAmount > 0) {
        amountDisplay.textContent = currentAmount - 1;
    }
}

function toggleCart() {
    CartSummary.classList.toggle('show');
}

function addToCart() {
    const quantity = parseInt(amountDisplay.textContent);
    if (quantity > 0) {
        const cartItemsContainer = document.querySelector('.cart-items');
        const productTitle = document.querySelector('main h1').textContent;
        const productPrice = 125.00;
        const totalPrice = (productPrice * quantity).toFixed(2);

        // Clear previous items and add the new one
        cartItemsContainer.innerHTML = `
            <div class="cart-item">
                <img src="./images/image-product-1-thumbnail.jpg" alt="product thumbnail">
                <div class="cart-item-details">
                    <p>${productTitle}</p>
                    <p>$${productPrice.toFixed(2)} x ${quantity} <span>$${totalPrice}</span></p>
                </div>
                <button class="delete-btn" onclick="deleteCartItem(this)"><img src="./images/icon-delete.svg" alt="delete"></button>
            </div>
            <button class="checkout-btn">Checkout</button>
        `;

        // Update and show cart count
        cartCount.textContent = quantity;
        cartCount.classList.add('show');
    }
}

function deleteCartItem(btn) {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartCount.classList.remove('show');
    cartCount.textContent = '0';
}