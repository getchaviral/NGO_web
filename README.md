Basti Ki Pathshala Foundation Website
A modern, responsive, and easy-to-use single-page application built for the Basti Ki Pathshala Foundation to showcase their mission and engage with potential volunteers and supporters. This website is designed to be mobile-first, providing a clean and user-friendly experience across all devices.

📚 Table of Contents
Project Overview

🚀 Key Features

🛠️ Technologies Used

🏃 Getting Started

🎨 Customization

📜 License

📝 Project Overview
This project serves as a digital home for the Basti Ki Pathshala Foundation. It is a single-page application that allows visitors to learn about the organization's mission, get a quick overview of their story, and easily apply to become a volunteer. The application is built with a focus on simplicity, performance, and a professional aesthetic, making it a great starting point for any non-profit's web presence.

🚀 Key Features
Responsive Design: Optimized for a seamless experience on mobile, tablet, and desktop screens.

Single-Page Navigation: Smooth and fast transitions between the Home, About Us, and Volunteer sections.

Dynamic Volunteer Form: A form to capture volunteer information, featuring a custom, professional modal for a great user experience.

Branded Content: All content is tailored to reflect the Basti Ki Pathshala Foundation's mission to provide education in underserved communities.

🛠️ Technologies Used
React: A declarative and component-based JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework that enables rapid UI development and ensures a consistent, responsive design.

Lucide React: A beautiful, accessible, and highly customizable icon library.

🏃 Getting Started
To get a copy of the project up and running on your local machine, follow these simple steps.

Prerequisites
You'll need to have Node.js and npm installed on your computer.

Installation
Clone the Repository:

git clone https://github.com/your-username/basti-ki-pathshala-website.git
cd basti-ki-pathshala-website

Install Dependencies:

This project was created using create-react-app. You will need to set up the necessary styling dependencies.

npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react

Configure Tailwind CSS:

Add the following content to your tailwind.config.js file:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add the Tailwind CSS directives to your src/index.css file:

@tailwind base;
@tailwind components;
@tailwind utilities;

Run the Application:

Start the development server:

npm start

The website will now be running on https://ngo-web-woad.vercel.app/

🎨 Customization
This project is highly customizable. Here are a few things you can do:

Content: Easily update the text in the HomePage, AboutUs, and VolunteerForm components in src/App.js to match new initiatives or events.

Images: Replace the placeholder images (https://placehold.co/...) with your own. For example, you can add images of the foundation's work to the img tags.

Functionality: The volunteer form currently logs data to the console. To make it fully functional, you would connect it to a backend API to store and process the submissions.

📜 License
This project is open-source and available under the MIT License.

🙏 Credits
React - The JavaScript library for building user interfaces.

Tailwind CSS - The framework for modern, responsive styling.

Lucide React - The icon library for a clean and professional look.
