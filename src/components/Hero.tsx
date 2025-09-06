import React from 'react';
import { ArrowRight, Truck, Shield, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Bags for
            <span className="block text-amber-400">Every Occasion</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover our exclusive collection of high-quality bags. From elegant handbags to durable backpacks, 
            find the perfect companion for your lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Shop Now <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              View Catalog
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-300">On orders over $100</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">30-day return policy</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-amber-500 p-4 rounded-full mb-4">
                <Star className="h-8 w-8 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold mb-2">5-Star Service</h3>
              <p className="text-gray-300">Trusted by thousands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;