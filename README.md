# DigiTools Platform

A modern, responsive digital product marketplace UI where users can browse premium tools, add products to cart, and complete checkout with clean feedback interactions.

## Project Description

DigiTools Platform is a front-end focused web application built to showcase and sell digital products in a smooth and user-friendly interface. It combines a marketing landing page with an interactive product and cart experience, including real-time cart updates and toast notifications.

## Live Project

- https://digitools-platform001.netlify.app/

## Tech Stack

- React.js
- Tailwind CSS
- DaisyUI
- JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for product data)

## Core Features

- Interactive product catalog fetched from local JSON data.
- Add-to-cart and remove-from-cart actions with instant UI updates.
- Dynamic cart total calculation and one-click checkout reset.

## Additional Features

- Toast notifications for add, remove, and checkout events.
- Responsive layout across mobile, tablet, and desktop breakpoints.
- Reusable component-based architecture for easy scaling.
- Sticky top navigation with cart item counter.
- Multiple landing sections: banner, stats, features, pricing, and footer.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Project Structure

```text
src/
	components/
		banner/
		cards/
		contents/
		features/
		footer/
		navbar/
		pricing/
		stats/
		testimonials/
public/
	data.json
```

## Future Improvements

- Persist cart data with localStorage.
- Add search and category filters for products.
- Integrate authentication and payment gateway flow.
- Add unit and integration tests.

## License

This project is for learning and portfolio use.
