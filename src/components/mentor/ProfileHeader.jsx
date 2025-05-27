
import React from 'react';

const ProfileHeader = ({ mentor, onBookSession }) => {
  return (
    <>
      {/* Hero Section with Background */}
      <div className="relative h-64 bg-gradient-to-r from-violet-600 to-purple-700 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=300&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/80 to-purple-700/80"></div>
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pb-8">
        <div className="flex flex-col items-center -mt-16">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
              alt={mentor.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in">{mentor.name}</h1>
          <p className="text-lg text-gray-600 mb-4 animate-fade-in">{mentor.role}</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-6 animate-fade-in">
            <span className="hover:text-violet-600 transition-colors cursor-pointer">📍 {mentor.location}</span>
            <span className="hover:text-violet-600 transition-colors cursor-pointer">🗣️ {mentor.languages.join(', ')}</span>
            <span className="hover:text-violet-600 transition-colors cursor-pointer">⏱️ {mentor.experience}</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <p className="text-sm text-gray-600 mb-2">Next Available Session</p>
            <p className="font-semibold text-gray-900 mb-4">{mentor.nextSession}</p>
            <button 
              onClick={onBookSession}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Session ✨
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
