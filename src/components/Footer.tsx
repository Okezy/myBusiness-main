import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-6">
              Okezy Wholesale Enterprise
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for premium quality bags. We've been serving customers worldwide with 
              exceptional products and service since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-amber-400 transition-colors">Categories</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-amber-400 transition-colors">Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Wholesale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">123 Business St, Commerce City, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">info@okezywholesale.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <p className="text-gray-300 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 4:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new products, special offers, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Okezy Wholesale Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;