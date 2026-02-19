# E-Comzy - Shopping Cart Application

A modern, responsive e-commerce shopping cart application built with React and Redux. Browse products, manage your cart, and enjoy a seamless shopping experience.

## Features

- 🛍️ **Product Catalog** - Browse and view product details on the home page
- 🛒 **Shopping Cart** - Add/remove products and manage quantities
- 🎨 **Responsive Design** - Beautiful UI with Tailwind CSS
- ⚡ **State Management** - Efficient Redux store for cart management
- 🔔 **Toast Notifications** - User-friendly feedback for actions
- 🚀 **Fast Performance** - Optimized React 18 application

## Tech Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **UI Icons**: React Icons
- **Notifications**: React Hot Toast & React Toastify
- **Bundler**: Create React App

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## Project Structure

```
e-commerce/
├── public/
│   ├── index.html          # Main HTML file
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── Product.js      # Product card component
│   │   ├── CartItems.js    # Cart items display
│   │   └── Spinner.js      # Loading spinner
│   ├── pages/              # Page components
│   │   ├── Home.js         # Product listing page
│   │   └── Cart.js         # Shopping cart page
│   ├── redux/              # Redux store setup
│   │   └── Slices/
│   │       ├── cartSlice.js   # Cart state management
│   │       └── Store.js       # Redux store configuration
│   ├── data.js             # Product data
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Performance metrics
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Home Page
- View all available products
- Click on products to see details
- Add products to your cart

### Cart Page
- Review items in your cart
- Adjust quantities
- Remove items
- View total price

## Development

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

### Running Tests
```bash
npm test
```

## Browser Support

The application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
