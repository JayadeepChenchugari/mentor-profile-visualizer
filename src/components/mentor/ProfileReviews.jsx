
import React from 'react';

const ProfileReviews = ({ reviews }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2">Reviews</h3>
        <button className="text-violet-600 hover:text-violet-800 text-sm font-medium hover:underline transition-all duration-300">View All &gt;</button>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-700">{review.name}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfileReviews;
