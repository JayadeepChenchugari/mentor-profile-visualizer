
import React from 'react';

const AnimatedSidebars = ({ handleSocialClick, handleAppreciate, isAppreciated }) => {
  return (
    <>
      {/* Animated Left Sidebar - Sticky */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <div 
          onClick={() => handleSocialClick('GitHub')}
          className="group bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-6 animate-pulse hover:animate-none"
        >
          <svg className="w-6 h-6 group-hover:text-gray-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <div 
          onClick={() => handleSocialClick('Dribbble')}
          className="group bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-rotate-6"
        >
          <svg className="w-6 h-6 group-hover:text-pink-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 13.363c-.29.718-.687 1.312-1.196 1.789-.509.477-1.135.718-1.878.718-.743 0-1.369-.24-1.878-.718-.509-.477-.906-1.071-1.196-1.789-.29-.718-.435-1.551-.435-2.5s.145-1.782.435-2.5c.29-.718.687-1.312 1.196-1.789.509-.477 1.135-.718 1.878-.718.743 0 1.369.24 1.878.718.509.477.906 1.071 1.196 1.789.29.718.435 1.551.435 2.5s-.145 1.782-.435 2.5z"/>
          </svg>
        </div>
      </div>

      {/* Animated Right Sidebar - Sticky */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <div 
          onClick={() => handleSocialClick('LinkedIn')}
          className="group bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110 hover:rotate-12"
        >
          <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-800 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        <div 
          onClick={() => handleSocialClick('Chat')}
          className="group bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110"
        >
          <svg className="w-6 h-6 group-hover:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <div className="group bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-110">
          <svg className="w-6 h-6 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300 group-hover:animate-spin" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l3.708 7.511 8.292 1.206-6 5.846 1.416 8.261L12 18.511l-7.416 4.313L6 14.563 0 8.717l8.292-1.206L12 0z"/>
          </svg>
        </div>
        <button 
          onClick={handleAppreciate}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            isAppreciated 
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg animate-pulse' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isAppreciated ? '✨ Appreciated!' : 'Appreciate'}
        </button>
      </div>
    </>
  );
};

export default AnimatedSidebars;
