# Frontend Mentor - Loopstudios Landing Page

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)

## 🌐 Live Demo

**[View Live Site](https://collection11.onrender.com/)**

## � Overview

This is my solution to the [Loopstudios Landing Page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). This project features a fully responsive VR company landing page with an interactive mobile navigation menu, hero section, and immersive product gallery.

## ✨ Features

- **Responsive Design**: Mobile-first approach with seamless desktop adaptation
- **Interactive Mobile Menu**: Full-screen overlay navigation with hamburger animation
- **Hero Section**: Immersive hero with responsive background images
- **Interactive VR Section**: Overlapping content layout with responsive positioning
- **Product Gallery**: Grid-based creations showcase with responsive images
- **Smooth Animations**: CSS transitions and JavaScript interactions
- **Touch-Friendly**: Optimized for mobile touch interactions
- **Performance Optimized**: Responsive images with picture elements

## 🎯 The Challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. But you could also choose to do this without JS!

Users should be able to:

- ✅ View the optimal layout for the site depending on their device's screen size
- ✅ See hover states for all interactive elements on the page
- ✅ Navigate through the mobile menu with smooth animations
- ✅ Experience responsive image loading for optimal performance
- ✅ Interact with the hamburger menu and full-screen navigation overlay

## 🛠️ Built With

- **HTML5** - Semantic markup with picture elements for responsive images
- **CSS3** - Modern styling with Grid, Flexbox, and CSS transforms
- **JavaScript** - Mobile navigation functionality and menu interactions
- **Google Fonts** - Alata and Josefin Sans typography
- **CSS Grid & Flexbox** - Complex responsive layout systems
- **Picture Elements** - Responsive image optimization for mobile/desktop

## 📱 Key Implementation Details

### Mobile Navigation System
```javascript
// Full-screen mobile menu with hamburger animation
function openMobileMenu() {
    mobileMenuOverlay.classList.add('active');
    hamburgerMenu.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Multiple close methods: click, escape key, outside click
function closeMobileMenu() {
    mobileMenuOverlay.classList.remove('active');
    hamburgerMenu.classList.remove('active');
    body.style.overflow = 'auto'; // Restore scrolling
}
```

### Responsive Image Strategy
```html
<!-- Optimized images for mobile and desktop -->
<picture>
  <source media="(max-width: 767px)" srcset="./images/mobile/image-name.jpg">
  <img src="./images/desktop/image-name.jpg" alt="Description">
</picture>
```

### Interactive VR Section Layout
```css
/* Mobile: Stacked layout */
.interactive article {
    position: static;
    text-align: center;
}

/* Desktop: Overlapping design */
@media (min-width: 768px) {
    .interactive article {
        position: absolute;
        top: 170px;
        left: 48%;
    }
}
```

## 🎨 Design System

### Colors
- **White**: hsl(0, 0%, 100%) - Primary background and text overlays
- **Black**: hsl(0, 0%, 0%) - Text, footer background, mobile menu overlay
- **Dark Gray**: hsl(0, 0%, 55%) - Secondary text and muted content
- **Gradient Overlays**: Used on creation items for text readability

### Typography
- **Primary Font**: 'Alata', sans-serif - Body text and UI elements
- **Display Font**: 'Josefin Sans', sans-serif - Headings and hero text
- **Font Weights**: 300 (Light), 400 (Regular)
- **Responsive scaling**: 15px base with rem/em scaling

## 📂 Project Structure

```
11/
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Complete responsive CSS styling
├── script.js           # Mobile navigation functionality
├── images/
│   ├── desktop/        # Desktop optimized images
│   ├── mobile/         # Mobile optimized images
│   ├── logo.svg        # Company logo
│   └── icon-*.svg      # Social media icons
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedTel18/Collection.git
   cd Collection/11
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   ```

3. **For development**
   ```bash
   # Use Live Server extension in VS Code
   # Or any local development server
   ```

## 📋 Features Checklist

- ✅ **Responsive Design**: Mobile-first approach with 768px breakpoint
- ✅ **Mobile Navigation**: Full-screen overlay menu with hamburger animation
- ✅ **Hero Section**: Responsive background images and typography
- ✅ **Interactive VR Section**: Overlapping content layout on desktop
- ✅ **Product Gallery**: 4-column grid on desktop, single column on mobile
- ✅ **Responsive Images**: Picture elements for optimal loading
- ✅ **Smooth Animations**: CSS transitions and JavaScript interactions
- ✅ **Touch Optimization**: Mobile-friendly interactions and sizing
- ✅ **Cross-browser Compatibility**: Tested across modern browsers
- ✅ **Performance Optimized**: Efficient image loading and CSS

## 🎯 Learning Outcomes

- **Mobile-First Design**: Progressive enhancement from mobile to desktop
- **CSS Grid Mastery**: Complex responsive layout systems
- **Picture Elements**: Responsive image optimization techniques
- **JavaScript DOM**: Interactive navigation and menu functionality
- **CSS Transforms**: Hamburger menu animations and overlays
- **Layout Positioning**: Absolute and relative positioning strategies

## 🔧 Technical Challenges Solved

### Mobile Menu Implementation
```css
/* Full-screen overlay with smooth transitions */
.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: hsl(0, 0%, 0%);
    z-index: 1000;
}

/* Hamburger to X animation */
.hamburger-menu.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}
```

### Responsive Grid System
```css
/* Mobile: Single column */
.creation-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

/* Desktop: Four columns */
@media (min-width: 768px) {
    .creation-list {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
}
```

### Overlapping Content Layout
- **Mobile Strategy**: Stacked content with centered text
- **Desktop Strategy**: Absolute positioning for content overlay
- **Responsive Images**: Picture elements for optimal performance
- **Typography Scaling**: Fluid typography across breakpoints

### Built with ❤️ as part of Frontend Mentor challenges