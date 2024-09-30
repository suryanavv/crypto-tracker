import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/api/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      );
      if (Array.isArray(response.data)) {
        setCryptos(prevCryptos => [...prevCryptos, ...response.data]);
      } else {
        console.error('Unexpected response format:', response.data);
        setError('Received unexpected data format from the server.');
      }
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCryptos();
    }, 1000);

    return () => clearTimeout(timer);
  }, [page]);

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <p className="text-center mb-12 max-w-3xl mx-auto">
        Welcome to CrypCoinTracker, your go-to resource for real-time cryptocurrency data. Our platform provides up-to-date information on coin prices, 24-hour changes, and market capitalization.
      </p>
      <div>
        <table className="w-full bg-[#2a0e6b] rounded-lg overflow-hidden">
          <thead>
            <tr className="text-left">
              <th className="p-4">#</th>
              <th className="p-4">Coins</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-right">24H Change</th>
              <th className="p-4 text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, index) => (
              <tr key={crypto.id} className="border-t border-[#3d1c8f] hover:bg-[#3d1c8f] transition duration-300">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">
                  <Link to={`/${crypto.id}`} state={{ coinData: crypto }} className="flex items-center">
                    <img src={crypto.image} alt={crypto.name} className="w-8 h-8 mr-3" />
                    <span className="font-semibold">{crypto.name}</span>
                    <span className="text-gray-400 ml-2">{crypto.symbol.toUpperCase()}</span>
                  </Link>
                </td>
                <td className="p-4">₹{crypto.current_price.toFixed(2)}</td>
                <td className={`p-4 text-right ${crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {crypto.price_change_percentage_24h > 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="p-4 text-right">₹{crypto.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-10">
          <button
            onClick={handleShowMore}
            className="bg-[#3d1c8f] hover:bg-[#4e2ba8] text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#3d1c8f] focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Show More'}
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </>
  );
};

export default CryptoList;