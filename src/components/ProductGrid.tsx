import React, { useState } from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  colors: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Luxury Leather Handbag',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Handbags',
    rating: 4.8,
    reviews: 124,
    description: 'Premium genuine leather handbag with gold-tone hardware',
    colors: ['Black', 'Brown', 'Tan'],
    inStock: true
  },
  {
    id: 2,
    name: 'Urban Explorer Backpack',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Backpacks',
    rating: 4.6,
    reviews: 89,
    description: 'Durable canvas backpack perfect for daily adventures',
    colors: ['Navy', 'Black', 'Olive'],
    inStock: true
  },
  {
    id: 3,
    name: 'Weekend Travel Duffle',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Travel Bags',
    rating: 4.9,
    reviews: 203,
    description: 'Spacious duffle bag for weekend getaways',
    colors: ['Black', 'Navy', 'Gray'],
    inStock: true
  },
  {
    id: 4,
    name: 'Executive Briefcase',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Business Bags',
    rating: 4.7,
    reviews: 156,
    description: 'Professional leather briefcase for the modern executive',
    colors: ['Black', 'Brown'],
    inStock: true
  },
  {
    id: 5,
    name: 'Crossbody Messenger Bag',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Handbags',
    rating: 4.5,
    reviews: 78,
    description: 'Stylish crossbody bag for hands-free convenience',
    colors: ['Burgundy', 'Black', 'Camel'],
    inStock: true
  },
  {
    id: 6,
    name: 'Hiking Adventure Pack',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Backpacks',
    rating: 4.8,
    reviews: 167,
    description: 'Heavy-duty backpack for outdoor enthusiasts',
    colors: ['Forest Green', 'Orange', 'Blue'],
    inStock: false
  },
  {
    id: 7,
    name: 'Rolling Suitcase Pro',
    price: 229.99,
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Travel Bags',
    rating: 4.6,
    reviews: 112,
    description: 'Professional rolling suitcase with TSA lock',
    colors: ['Black', 'Silver', 'Navy'],
    inStock: true
  },
  {
    id: 8,
    name: 'Laptop Messenger Bag',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Business Bags',
    rating: 4.4,
    reviews: 94,
    description: 'Padded laptop bag with organizational compartments',
    colors: ['Black', 'Gray'],
    inStock: true
  }
];

const categories = ['All', 'Handbags', 'Backpacks', 'Travel Bags', 'Business Bags'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Customer Rating'];

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Customer Rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium bags crafted with attention to detail
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-slate-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-800"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show more button */}
        <div className="text-center mt-12">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;