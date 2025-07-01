# Lumina Candle Store

## Introduction

Welcome to the **Lumina Candle Store** React web application — a fictional online store designed to showcase candles with a beautiful, intuitive user interface built with React. This project is part of a React app capstone assignment, demonstrating practical skills in React, Redux, and modern web development practices.

The application allows users to browse candle products, register and log in, add items to a cart, select shipping options, and get help about shipments — all wrapped in an attractive and responsive UI.

---

## Features

- User registration with input validation (first name, surname, username, email, password)
- User login and session display in the header
- Navigation menu present on all pages
- Landing page, store/product page, and cart page components
- Product listing dynamically rendered with unique keys using `.map()`
- Shopping cart state management using Redux
- Add/remove items from cart with live total cost updates
- Shipping method selection
- Help/info about shipping options
- Responsive design with React-Bootstrap and custom CSS

---

## Installation

To install and run Lumina Candle Store locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/lumina-candle-store.git
   cd lumina-candle-store

   ```

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

4. Open your browser and visit http://localhost:3000 to see the app running.

---

## Project Structure

- /src/components — React components for pages, header, product cards, cart, etc.
- /src/redux — Redux setup for global state management (actions, reducers, store)
- /src/styles — Custom CSS and Bootstrap styling
- /public — Static assets and HTML template

## Usage

- Register with your details on the Register page.
- Log in with your username; your name will display in the header.
- Browse candles on the Store page.
- Add candles to your cart.
- View and modify your cart on the Cart page.
- Select a shipping method.
- Click "Help" to get information about shipping options.

## Technologies Used

- React
- Redux for state management
- React-Bootstrap for UI components
- JavaScript
- HTML5 & CSS

## Version Control

This project uses Git for version control to manage changes efficiently, collaborate easily, and maintain a history of all modifications.

---
