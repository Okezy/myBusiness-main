import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Handbags',
    description: 'Elegant and stylish handbags',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '250+ styles'
  },
  {
    id: 2,
    name: 'Backpacks',
    description: 'Durable and functional backpacks',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '180+ styles'
  },
  {
    id: 3,
    name: 'Travel Bags',
    description: 'Spacious bags for your journeys',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '120+ styles'
  },
  {
    id: 4,
    name: 'Business Bags',
    description: 'Professional bags for work',
    image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '90+ styles'
  }
];

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of premium bags designed for every lifestyle and occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="aspect-w-4 aspect-h-5 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-200 mb-2">{category.description}</p>
                <p className="text-amber-400 font-semibold">{category.count}</p>
              </div>

              <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight: React.FC<{ className: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default Categories;