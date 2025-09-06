import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useCart();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-amber-400 pr-20">
              O. W. Ent.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-amber-400 transition-colors">Categories</a></li>
              <li><a href="#products" className="hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors pr-2">Contact</a></li>
            </ul>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-800 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="relative mb-4 lg:hidden">
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 w-full"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <nav>
              <ul className="space-y-2">
                <li><a href="#home" className="block py-2 hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#categories" className="block py-2 hover:text-amber-400 transition-colors">Categories</a></li>
                <li><a href="#products" className="block py-2 hover:text-amber-400 transition-colors">Products</a></li>
                <li><a href="#reviews" className="block py-2 hover:text-amber-400 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="block py-2 hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;