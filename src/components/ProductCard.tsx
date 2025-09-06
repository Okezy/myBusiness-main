import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from './ProductGrid';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      quantity: 1
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}

        {/* Out of Stock Badge */}
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Out of Stock
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
            </button>
            <button className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors">
              <Eye className="h-5 w-5 text-gray-600" />
            </button>
            {product.inStock && (
              <button
                onClick={handleAddToCart}
                className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-500 font-medium">{product.category}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-slate-800 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 ml-2">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Colors */}
        <div className="mb-4">
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color ? 'border-slate-800 scale-110' : 'border-gray-300'
                }`}
                style={{
                  backgroundColor: color.toLowerCase() === 'black' ? '#000000' :
                                 color.toLowerCase() === 'brown' ? '#8B4513' :
                                 color.toLowerCase() === 'tan' ? '#D2B48C' :
                                 color.toLowerCase() === 'navy' ? '#000080' :
                                 color.toLowerCase() === 'olive' ? '#808000' :
                                 color.toLowerCase() === 'gray' ? '#808080' :
                                 color.toLowerCase() === 'burgundy' ? '#800020' :
                                 color.toLowerCase() === 'camel' ? '#C19A6B' :
                                 color.toLowerCase() === 'forest green' ? '#228B22' :
                                 color.toLowerCase() === 'orange' ? '#FFA500' :
                                 color.toLowerCase() === 'blue' ? '#0000FF' :
                                 color.toLowerCase() === 'silver' ? '#C0C0C0' : '#CCCCCC'
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          
          {product.inStock ? (
            <button
              onClick={handleAddToCart}
              className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed"
            >
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;