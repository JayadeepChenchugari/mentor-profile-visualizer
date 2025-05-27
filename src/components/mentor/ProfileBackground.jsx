
import React from 'react';

const ProfileBackground = ({ mentor }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-violet-600 mb-6">Background</h3>
      
      <div className="space-y-6">
        <div className="group">
          <span className="font-semibold text-gray-700">Mentored:</span>
          <span className="ml-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-red-200 transition-colors cursor-pointer">
            {mentor.sessions} Sessions ⚡
          </span>
        </div>

        <div>
          <span className="font-semibold text-gray-700 block mb-2">Expertise:</span>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill, index) => (
              <span 
                key={index} 
                className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm hover:bg-violet-200 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="font-semibold text-gray-700 block mb-2">Fluency:</span>
          <div className="flex flex-wrap gap-2">
            {mentor.languages.map((language, index) => (
              <span 
                key={index} 
                className="border border-gray-800 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-100 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBackground;
