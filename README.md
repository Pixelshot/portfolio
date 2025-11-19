# Portfolio

A simple, modern, and responsive portfolio website to introduce myself to the world.

## Features

- 🎨 Clean and modern design
- 📱 Fully responsive (mobile, tablet, and desktop)
- ⚡ Smooth scrolling and animations
- 🎯 Easy to customize
- 🚀 No build process required - just open and edit!

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and background
- **Skills**: Showcase of technical skills and expertise
- **Projects**: Display of portfolio projects with descriptions
- **Contact**: Ways to get in touch

## Getting Started

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## Customization

### Update Your Information

Edit `index.html` and replace the following:
- **Your Name**: Replace "Your Name" with your actual name
- **Tagline**: Update your professional title/description
- **About**: Rewrite the about section with your own story
- **Skills**: Modify the skills to match your expertise
- **Projects**: Add your own projects with descriptions
- **Contact**: Update email and social media links with your information

### Change Colors

Edit `styles.css` and modify the CSS variables in the `:root` section:
```css
:root {
    --primary-color: #6366f1;    /* Main theme color */
    --secondary-color: #8b5cf6;  /* Secondary accent */
    --accent-color: #10b981;     /* Highlight color */
    /* ... */
}
```

### Add Your Own Images

Replace the emoji placeholders in project cards with actual images:
```html
<div class="project-image">
    <img src="your-image.jpg" alt="Project name">
</div>
```

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # CSS styling
├── script.js       # JavaScript for interactions
└── README.md       # This file
```

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Feel free to use this portfolio template for your own personal use.