
import React from 'react';

const AvailableSessions = ({ 
  availableSessions, 
  timeSlots, 
  selectedSession, 
  selectedTimeSlot, 
  setSelectedSession, 
  setSelectedTimeSlot, 
  handleBookSession 
}) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Sessions</h3>
      <p className="text-sm text-gray-600 mb-4">Book 1-1 sessions from the below options</p>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        {availableSessions.map((session, index) => (
          <div 
            key={index} 
            className={`p-3 rounded-lg border text-center cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              session.slots === '0/3' 
                ? 'border-gray-200 bg-gray-50 text-gray-400' 
                : 'border-violet-200 bg-violet-50 hover:bg-violet-100 hover:shadow-md'
            }`}
            onClick={() => session.slots !== '0/3' && setSelectedSession(`${session.date} May 2025`)}
          >
            <div className="font-semibold text-sm">{session.day}</div>
            <div className="text-xs text-gray-600">{session.date}</div>
            <div className="text-xs mt-1">{session.slots}</div>
            {session.slots !== '0/3' && (
              <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-1 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>

      <button className="text-violet-600 hover:text-violet-800 text-sm font-medium mb-4 hover:underline transition-all duration-300">View All &gt;</button>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-3">Available Time Slots</h4>
        <div className="space-y-2">
          {timeSlots.map((time, index) => (
            <label key={index} className="flex items-center gap-3 cursor-pointer group hover:bg-violet-50 p-2 rounded-lg transition-colors duration-300">
              <input
                type="radio"
                name="timeSlot"
                value={time}
                checked={selectedTimeSlot === time}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-4 h-4 text-violet-600 focus:ring-violet-500 transition-all duration-300"
              />
              <span className="text-sm group-hover:text-violet-700 transition-colors duration-300">{time}</span>
              {selectedTimeSlot === time && (
                <span className="ml-auto text-violet-600">✓</span>
              )}
            </label>
          ))}
        </div>
      </div>

      <button 
        onClick={handleBookSession}
        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      >
        Book session for {selectedSession} 🚀
      </button>
    </section>
  );
};

export default AvailableSessions;
