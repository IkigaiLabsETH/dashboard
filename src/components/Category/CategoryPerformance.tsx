"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Category = {
  name: string;
  day: string;
  month: string;
  year: string;
};

const CategoryPerformance: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/categoryPerformance');
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category performance data:', error);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-yellow-500 mb-4">Category Performance</h2>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <div key={index} className="flex justify-between bg-gray-900 p-4 rounded-lg">
            <span>{category.name}</span>
            <span className={`text-green-400`}>{category.day}</span>
            <span className={`text-green-400`}>{category.month}</span>
            <span className={`text-green-400`}>{category.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPerformance;