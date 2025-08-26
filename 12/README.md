# Frontend Mentor - E-commerce Product Page

![Design preview for the E-commerce product page coding challenge](./design/desktop-preview.jpg)

## 🌐 Live Demo

**[View Live Site](https://collection12.onrender.com)**

## �️ Overview

This is my solution to the [E-commerce Product Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/e-commerce-product-page-UPsZ9MJp6). This project features a fully responsive e-commerce product page with an interactive image gallery, lightbox, and cart functionality.

## ✨ Features

- **Responsive Design**: Mobile-first approach with a seamless transition to desktop.
- **Interactive Image Gallery**: Mobile slider and desktop thumbnail gallery.
- **Lightbox**: Full-screen image gallery for a closer look at the product.
- **Cart Functionality**: Add items to the cart, view the cart, and remove items.
- **Dynamic Content**: Cart updates dynamically with JavaScript.
- **Hover States**: Interactive elements have hover states for a better user experience.

## 🎯 The Challenge

Your challenge is to build out this e-commerce product page and get it looking as close to the design as possible.

Users should be able to:

- ✅ View the optimal layout for the site depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Open a lightbox gallery by clicking on the large product image
- ✅ Switch the large product image by clicking on the small thumbnail images
- ✅ Add items to the cart
- ✅ View the cart and remove items from it

## 🛠️ Built With

- **HTML5** - Semantic markup for a well-structured page.
- **CSS3** - Modern styling with Flexbox for responsive layouts.
- **JavaScript** - Interactive features like the image gallery, lightbox, and cart functionality.
- **Google Fonts** - Kumbh Sans for typography.

## 📱 Key Implementation Details

### Lightbox Gallery
```javascript
// Open the lightbox with the selected image
function openLightbox(index) {
    currentLightboxIndex = index;
    lightboxImage.src = galleryImageSources[currentLightboxIndex];
    lightbox.classList.add('show');
}

// Close the lightbox
function closeLightbox() {
    lightbox.classList.remove('show');
}
```

### Cart Management
```javascript
// Add items to the cart and update the display
function addToCart() {
    const quantity = parseInt(amountDisplay.textContent);
    if (quantity > 0) {
        // ... logic to create and display cart item
        cartCount.textContent = quantity;
        cartCount.classList.add('show');
    }
}

// Remove items from the cart
function deleteCartItem(btn) {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartCount.classList.remove('show');
    cartCount.textContent = '0';
}
```

## 🎨 Design System

### Colors
- **Orange**: hsl(26, 100%, 55%)
- **Pale orange**: hsl(25, 100%, 94%)
- **Very dark blue**: hsl(220, 13%, 13%)
- **Dark grayish blue**: hsl(219, 9%, 45%)
- **Grayish blue**: hsl(220, 14%, 75%)
- **Light grayish blue**: hsl(223, 64%, 98%)
- **White**: hsl(0, 0%, 100%)
- **Black (with 75% opacity for lightbox background)**: hsl(0, 0%, 0%)

### Typography
- **Font Family**: Kumbh Sans
- **Font Weights**: 400, 700

**Have fun building!** 🚀


### Built with ❤️ as part of Frontend Mentor challenges