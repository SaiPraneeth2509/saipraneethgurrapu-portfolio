# Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, and experience as a software developer. The website is built with modern web technologies and features a responsive design, smooth animations, and interactive elements.

## 🚀 Live Demo

Check out the live version of the portfolio: [Portfolio Website](https://saipraneeth2509.github.io/saipraneethgurrapu-portfolio/)

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, and mobile).
- **Animations**: Smooth scroll-triggered animations using Framer Motion.
- **Dynamic Skills Display**: Typewriter effect for skills in the Hero section.
- **Floating Particles**: Interactive floating particles in the background.
- **Contact Form**: Integrated with EmailJS for seamless form submissions.
- **Social Media Links**: Quick access to GitHub, LinkedIn, and more with hover animations.
- **Modern UI**: Built with Tailwind CSS for a clean and professional look.

## 🛠️ Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - Framer Motion (for animations)
  - Typewriter-effect (for dynamic text)
- **Backend**:
  - EmailJS (for contact form submissions)
- **Deployment**:
  - GitHub Pages

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SaiPraneeth2509/saipraneethgurrapu-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd saipraneethgurrapu-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add your EmailJS credentials:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and visit:
   ```bash
   http://localhost:5173
   ```

### Deployment

To deploy the project to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy using gh-pages:
   ```bash
   npm run deploy
   ```
3. Visit your GitHub Pages URL:
   ```bash
   https://SaiPraneeth2509.github.io/saipraneethgurrapu-portfolio/
   ```

### 📂Project Structure

```bash
saipraneethgurrapu-portfolio/
├── public/                  # Static assets (images, fonts, etc.)
├── src/
│   ├── components/          # Reusable components (Hero, About, Contact, etc.)
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point
│   └── styles/              # Global styles (if any)
├── .env                     # Environment variables
├── .gitignore               # Files and directories to ignore in Git
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration file
```

### 🎨 Customization

- Update Content: Modify the text and images in the src/components folder to reflect your personal information.

- Change Colors: Update the color scheme in the tailwind.config.js file.

- Add Animations: Use Framer Motion to add or modify animations in the components.

### 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

### 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

### 📧 Contact

If you have any questions or feedback, feel free to reach out:

GitHub: SaiPraneeth2509

LinkedIn: Sai Praneeth Gurrapu
