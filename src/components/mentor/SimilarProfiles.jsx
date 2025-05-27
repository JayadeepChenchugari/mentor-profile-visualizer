
import React from 'react';

const SimilarProfiles = ({ similarProfiles }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Similar Profiles</h3>
        <button className="text-violet-600 hover:text-violet-800 text-sm font-medium hover:underline transition-all duration-300">Browse Mentors &gt;</button>
      </div>
      
      <div className="space-y-4">
        {similarProfiles.map((profile, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105 hover:border-violet-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
              <div>
                <h4 className="font-semibold text-sm hover:text-violet-600 transition-colors duration-300">{profile.name}</h4>
                <p className="text-xs text-gray-600">{profile.role}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(profile.avatars)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full border-2 border-white -ml-1 first:ml-0 hover:scale-110 transition-transform duration-300" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{profile.sessions} Sessions</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProfiles;
