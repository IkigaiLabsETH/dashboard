"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type CryptoData = {
  usd: number;
  usd_24h_change: number;
};

const MainDashboard: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<{
    bitcoin: CryptoData;
    ethereum: CryptoData;
    solana: CryptoData;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/cryptoData');
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Set up polling to fetch data every 60 seconds
    const intervalId = setInterval(fetchData, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!cryptoData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-yellow-500 mb-4">Main Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-1 bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg">BTC</h3>
          <p className="text-2xl font-bold text-green-400">${cryptoData.bitcoin.usd.toFixed(2)}</p>
          <p className={`text-lg ${cryptoData.bitcoin.usd_24h_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {cryptoData.bitcoin.usd_24h_change.toFixed(2)}%
          </p>
        </div>
        <div className="col-span-1 bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg">ETH</h3>
          <p className="text-2xl font-bold text-green-400">${cryptoData.ethereum.usd.toFixed(2)}</p>
          <p className={`text-lg ${cryptoData.ethereum.usd_24h_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {cryptoData.ethereum.usd_24h_change.toFixed(2)}%
          </p>
        </div>
        <div className="col-span-1 bg-gray-900 p-4 rounded-lg">
          <h3 className="text-lg">SOL</h3>
          <p className="text-2xl font-bold text-red-400">${cryptoData.solana.usd.toFixed(2)}</p>
          <p className={`text-lg ${cryptoData.solana.usd_24h_change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {cryptoData.solana.usd_24h_change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;