import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love my new handbag! The quality is outstanding and it matches everything in my wardrobe.',
    date: '2 weeks ago',
    product: 'Luxury Leather Handbag',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Perfect backpack for my daily commute. Lots of compartments and very durable construction.',
    date: '1 week ago',
    product: 'Urban Explorer Backpack',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 4,
    comment: 'Great travel bag! Spacious enough for weekend trips and the quality exceeded my expectations.',
    date: '3 days ago',
    product: 'Weekend Travel Duffle',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    comment: 'Professional looking briefcase that\'s perfect for business meetings. Highly recommended!',
    date: '1 month ago',
    product: 'Executive Briefcase',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    rating: 5,
    comment: 'The crossbody bag is exactly what I needed. Stylish, functional, and great value for money.',
    date: '5 days ago',
    product: 'Crossbody Messenger Bag',
    avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 6,
    name: 'James Wilson',
    rating: 4,
    comment: 'Solid hiking pack with plenty of room. Has survived several camping trips already!',
    date: '2 weeks ago',
    product: 'Hiking Adventure Pack',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our products.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-800 mb-2">4.8</div>
            <div className="flex justify-center items-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-800 mb-2">2,450+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-800 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-800 mb-2">1,200+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              <div className="mb-4">
                <Quote className="h-8 w-8 text-amber-400 mb-2" />
                <p className="text-gray-700 italic leading-relaxed">"{review.comment}"</p>
              </div>

              <div className="text-sm text-amber-600 font-medium">
                Product: {review.product}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;