# Frontend Mentor - Contact Form

![Design preview for the Contact form coding challenge](./design/desktop-preview.jpg)

## 🌐 Live Demo

**[View Live Site](https://collection10.onrender.com/)**

## � Overview

This is my solution to the [Contact Form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). This project features a fully accessible contact form with comprehensive validation, success notifications, and responsive design.

## ✨ Features

- **Complete Form Validation**: Real-time validation for all required fields
- **Email Format Validation**: Regex-based email validation with user feedback
- **Accessible Design**: Full keyboard navigation and screen reader support
- **Success Toast Notification**: 5-second success message with smooth transitions
- **Error Handling**: Clear error messages for each validation rule
- **Responsive Layout**: Mobile-first design with desktop optimization
- **Interactive States**: Hover and focus effects for all interactive elements
- **Form Reset**: Automatic form clearing after successful submission

## 🎯 The Challenge

Your challenge is to build out this contact form and get it looking as close to the design as possible. Pay particular attention to making this form accessible. Building accessible forms is a key skill for front-end developers. So this is a perfect challenge to practice.

Users should be able to:

- ✅ Complete the form and see a success toast message upon successful submission
- ✅ Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- ✅ Complete the form only using their keyboard
- ✅ Have inputs, error messages, and the success message announced on their screen reader
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page

## 🛠️ Built With

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript** - Form validation and DOM manipulation
- **CSS Grid & Flexbox** - Responsive layout system
- **Google Fonts** - Karla typography
- **Accessibility Features** - ARIA labels, semantic HTML, keyboard navigation

## 📱 Key Implementation Details

### Form Validation
```javascript
// Comprehensive validation for all form fields
function CheckFormValidity() {
  // Validates: firstName, lastName, email, message, queryType, consent
  // Real-time error display with proper feedback
}

// Email validation with regex
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
```

### Success Notification System
```javascript
// 5-second success notification with smooth transitions
function ShowNotification() {
  successNotification.style.display = 'block';
  successNotification.style.opacity = '1';
  
  setTimeout(() => {
    hideSuccessNotification();
  }, 5000);
}
```

### Accessibility Features
- **Semantic HTML**: Proper form structure with labels and fieldsets
- **ARIA Support**: Screen reader announcements for validation states
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Association**: Proper error message association with form fields

## 🎨 Design System

### Colors
- **Primary Green**: hsl(169, 82%, 27%) - Submit button and success states
- **Red**: hsl(0, 66%, 54%) - Error states and validation
- **Grey Backgrounds**: hsl(148, 38%, 91%) - Form backgrounds
- **Dark Text**: hsl(187, 24%, 22%) - Primary text color

### Typography
- **Font Family**: 'Karla', sans-serif
- **Font Weights**: 400 (Regular), 700 (Bold)
- **Responsive sizing**: 16px base with em scaling

## 📂 Project Structure

```
10/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS styling
├── script.js           # Form validation & interactions
├── assets/
│   └── images/
│       ├── icon-success-check.svg
│       └── favicon-32x32.png
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedTel18/Collection.git
   cd Collection/10
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

- ✅ **Form Validation**: Real-time validation for all required fields
- ✅ **Email Validation**: Regex-based email format checking
- ✅ **Error Messages**: Clear, accessible error feedback
- ✅ **Success Notification**: 5-second toast message with fade transitions
- ✅ **Keyboard Navigation**: Full accessibility support
- ✅ **Screen Reader Support**: ARIA labels and semantic markup
- ✅ **Responsive Design**: Mobile-first with desktop optimization
- ✅ **Interactive States**: Hover and focus effects
- ✅ **Form Reset**: Automatic clearing after successful submission
- ✅ **Cross-browser Compatibility**: Tested across modern browsers

## 🎯 Learning Outcomes

- **Form Accessibility**: Building inclusive, screen-reader friendly forms
- **JavaScript Validation**: Real-time form validation with user feedback
- **Event Handling**: Preventing default form submission behavior
- **CSS Grid Layout**: Complex responsive form layouts
- **Error State Management**: Dynamic error message display
- **User Experience**: Smooth transitions and feedback systems

## 🔧 Technical Challenges Solved

### Form Submission Prevention
```javascript
// Prevented default form submission to avoid page refresh
function handleSubmit(event) {
    event.preventDefault(); // Critical for SPA-like behavior
    // Custom validation and success handling
}
```

### Accessibility Implementation
- **Semantic HTML**: Used proper form elements and labels
- **ARIA Support**: Added ARIA descriptions for error states
- **Focus Management**: Logical tab order and clear focus indicators
- **Screen Reader Testing**: Verified with accessibility tools

### Responsive Form Design
- **Mobile-First**: Started with mobile layout, enhanced for desktop
- **Grid Layout**: Used CSS Grid for complex form arrangements
- **Flexible Typography**: Responsive text sizing with em units

### Built with ❤️ as part of Frontend Mentor challenges