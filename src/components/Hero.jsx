import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    // Fetching three featured items from FakeAPI
    fetch('https://fakestoreapi.com/products?limit=3') // Obtiene 3 productos
      .then((res) => res.json())
      .then((data) => setFeaturedItems(data))
      .catch((error) => console.error('Error fetching featured items:', error));
  }, []);

  if (featuredItems.length === 0) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="text-2xl font-semibold text-gray-900 mb-4">
                ${item.price}
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
