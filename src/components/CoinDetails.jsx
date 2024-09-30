import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CoinDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { coinData } = location.state || {};

  if (!coinData) {
    navigate('/');
    return null;
  }

  return (
    <div className="text-white">
      <div className="flex flex-col items-center mb-8">
        <img src={coinData.image} alt={coinData.name} className="w-24 h-24 mb-4" />
        <h2 className="text-4xl font-semibold">{coinData.name} ({coinData.symbol.toUpperCase()})</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">Crypto Market Rank</p>
          <p className="text-2xl font-semibold">{coinData.market_cap_rank}</p>
        </div>
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">Current Price</p>
          <p className="text-2xl font-semibold">₹{coinData.current_price.toLocaleString()}</p>
        </div>
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">Market Cap</p>
          <p className="text-2xl font-semibold">₹{coinData.market_cap.toLocaleString()}</p>
        </div>
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">24 Hour High</p>
          <p className="text-2xl font-semibold">₹{coinData.high_24h.toLocaleString()}</p>
        </div>
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">24 Hour Low</p>
          <p className="text-2xl font-semibold">₹{coinData.low_24h.toLocaleString()}</p>
        </div>
        <div className="bg-purple-medium p-6 rounded-lg">
          <p className="text-gray-300 mb-2">24h Change</p>
          <p className={`text-2xl font-semibold ${coinData.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {coinData.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
