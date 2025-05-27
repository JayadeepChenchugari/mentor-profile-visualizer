
import React from 'react';

const ProfileOverview = ({ mentor }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">Overview</h3>
      <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
    </section>
  );
};

export default ProfileOverview;
