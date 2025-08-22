const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const images = document.querySelectorAll('.image-container img[alt="Product Image"]');
const amountDisplay = document.querySelector('.amount');
const container = document.querySelector('.image-container');
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

function changeImageGroup(index) {
    container.style.display = 'block';
    ShowImage(index);
}

// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail-section img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const lightboxNextBtn = document.querySelector('.lightbox-move.next');
    const lightboxPrevBtn = document.querySelector('.lightbox-move.prev');

    const galleryImageSources = [
        './images/image-product-1.jpg',
        './images/image-product-2.jpg',
        './images/image-product-3.jpg',
        './images/image-product-4.jpg'
    ];
    let currentLightboxIndex = 0;

    function openLightbox(index) {
        currentLightboxIndex = index;
        lightboxImage.src = galleryImageSources[currentLightboxIndex];
        lightbox.classList.add('show');
    }

    function closeLightbox() {
        lightbox.classList.remove('show');
    }

    function showNextImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryImageSources.length;
        lightboxImage.src = galleryImageSources[currentLightboxIndex];
    }

    function showPrevImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryImageSources.length) % galleryImageSources.length;
        lightboxImage.src = galleryImageSources[currentLightboxIndex];
    }

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            openLightbox(parseInt(thumbnail.dataset.index));
        });
    });

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextImage);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevImage);

    // Close lightbox when clicking on the overlay
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
});