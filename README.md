# Ahmed Elhenidy - Portfolio Website

A modern, creative, and responsive portfolio website built for GitHub Pages.

## 🌟 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Fully Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Interactive Elements**: Engaging animations and hover effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Typing Animation**: Dynamic hero text with typing effect
- **Project Showcase**: Beautiful cards to display your work
- **Timeline**: Professional experience section with visual timeline
- **Contact Form**: Ready-to-use contact form (requires backend integration)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhmedElhenidy/AhmedElhenidy.github.io.git
   cd AhmedElhenidy.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser to view locally
   - Or push to GitHub and visit `https://ahmedelhenidy.github.io`

## 📝 Customization Guide

### Personal Information

1. **Update the Hero Section** (`index.html` lines 28-50):
   - Change your name in the `<h1>` tag
   - Update the typing animation phrases in `script.js` (lines 27-33)

2. **About Section** (`index.html` lines 54-79):
   - Replace the placeholder text with your bio
   - Add your profile image (replace the icon placeholder)
   - Update social media links

3. **Skills Section** (`index.html` lines 82-125):
   - Modify skill categories and tags to match your expertise
   - Add or remove skill categories as needed

4. **Projects Section** (`index.html` lines 128-180):
   - Replace project placeholders with your actual projects
   - Add project images, descriptions, and links
   - Update technology tags

5. **Experience Section** (`index.html` lines 183-233):
   - Add your work experience details
   - Update job titles, companies, dates, and descriptions

6. **Contact Information** (`index.html` lines 236-297):
   - Update email, phone, and location
   - Modify social media links in the footer

### Colors & Styling

Edit the CSS variables in `style.css` (lines 2-13) to change the color scheme:

```css
:root {
    --primary-color: #6366f1;  /* Main brand color */
    --secondary-color: #8b5cf6; /* Secondary color */
    --accent-color: #ec4899;    /* Accent color */
    /* ... other variables */
}
```

### Contact Form Integration

The contact form currently shows an alert. To make it functional:

1. Use a service like [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Update the form action in `index.html` or modify the JavaScript in `script.js` (lines 136-154)

## 📦 File Structure

```
AhmedElhenidy.github.io/
├── index.html          # Main HTML file
├── style.css           # Styles and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Sections Included

- **Navigation**: Fixed navbar with smooth scrolling
- **Hero**: Eye-catching introduction with typing animation
- **About**: Personal introduction and social links
- **Skills**: Categorized skill showcase
- **Projects**: Portfolio of your work
- **Experience**: Professional timeline
- **Contact**: Contact form and information
- **Footer**: Copyright and social links

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🤝 Need Help?

If you need to customize something specific or add new features, feel free to reach out!

---

**Note**: Don't forget to share your CV or specific information you'd like to add, and I can help populate the portfolio with your actual data!