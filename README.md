# CrypCoin Tracker

CrypCoin Tracker is a real-time cryptocurrency tracking application built with React and Vite. It provides up-to-date information on coin prices, 24-hour changes, and market capitalization.

Live Demo: [CrypCoin Tracker](https://crypcointracker.netlify.app/)

## Features

- Real-time cryptocurrency data
- Detailed view for individual coins
- Responsive design for desktop and mobile
- Infinite scrolling for loading more cryptocurrencies

## Technologies Used

- React
- Vite
- Tailwind CSS
- Axios for API requests
- React Router for navigation

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crypto-tracker.git
   cd crypto-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` to view the application.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run lint`: Lints the project files
- `npm run preview`: Previews the built app

## Project Structure

```
crypto-tracker/
│
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── CoinDetails.jsx
│   │   └── CryptoList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## API

This project uses the CoinGecko API to fetch cryptocurrency data. The API calls are proxied through the Vite development server to avoid CORS issues.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Surya Naveen - [LinkedIn](https://www.linkedin.com/in/surya-naveen-veeravalli-609976257/)

Project Link: [https://github.com/your-username/crypto-tracker](https://github.com/your-username/crypto-tracker)

## Acknowledgements

- [CoinGecko API](https://www.coingecko.com/en/api/documentation)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
