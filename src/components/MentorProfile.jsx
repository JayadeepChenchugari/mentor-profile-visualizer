
import React, { useState } from 'react';

const MentorProfile = () => {
  const [selectedSession, setSelectedSession] = useState('06 May 2025');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('3:30 PM');
  const [isAppreciated, setIsAppreciated] = useState(false);

  const mentor = {
    name: "Vikas Sharma",
    role: "Product Designer at Vajro",
    location: "Mumbai, India",
    languages: ["English", "Hindi"],
    experience: "5+ Years",
    bio: "Passionate product designer with extensive experience in UI/UX design and user research. I've helped 100+ designers transition into tech roles and love mentoring aspiring professionals.",
    sessions: 22,
    expertise: ["UI/UX Design", "Product Strategy", "User Research", "Design Systems"],
    nextSession: "06 May 2025 (Tuesday) - 3:30 PM"
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Vikas provided excellent guidance on my portfolio. His feedback was actionable and helped me land my dream job!",
      avatar: "https://via.placeholder.com/40x40/4F46E5/FFFFFF?text=SJ"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Amazing mentor! Really helped me understand design principles and gave great career advice.",
      avatar: "https://via.placeholder.com/40x40/059669/FFFFFF?text=MC"
    }
  ];

  const availableSessions = [
    { day: 'Mon', date: '06 May', slots: '2/3' },
    { day: 'Tue', date: '07 May', slots: '1/3' },
    { day: 'Wed', date: '08 May', slots: '3/3' },
    { day: 'Thu', date: '09 May', slots: '0/3' }
  ];

  const timeSlots = ['2:30 PM', '3:30 PM', '4:30 PM'];

  const similarProfiles = [
    {
      name: "Priya Patel",
      role: "Senior UX Designer",
      sessions: "35+",
      avatar: "https://via.placeholder.com/48x48/EC4899/FFFFFF?text=PP",
      studentAvatars: 4
    },
    {
      name: "Raj Kumar",
      role: "Design Lead",
      sessions: "40+",
      avatar: "https://via.placeholder.com/48x48/8B5CF6/FFFFFF?text=RK",
      studentAvatars: 5
    }
  ];

  const handleBookSession = () => {
    console.log('Booking session:', { date: selectedSession, time: selectedTimeSlot });
  };

  const handleAppreciate = () => {
    setIsAppreciated(!isAppreciated);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Left Fixed Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 13.363c-.29.718-.687 1.312-1.196 1.789-.509.477-1.135.718-1.878.718-.743 0-1.369-.24-1.878-.718-.509-.477-.906-1.071-1.196-1.789-.29-.718-.435-1.551-.435-2.5s.145-1.782.435-2.5c.29-.718.687-1.312 1.196-1.789.509-.477 1.135-.718 1.878-.718.743 0 1.369.24 1.878.718.509.477.906 1.071 1.196 1.789.29.718.435 1.551.435 2.5s-.145 1.782-.435 2.5z"/>
          </svg>
        </div>
      </div>

      {/* Right Fixed Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span className="text-2xl">💬</span>
        </div>
        <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <span className="text-2xl">⭐</span>
        </div>
        <button 
          onClick={handleAppreciate}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isAppreciated 
              ? 'bg-yellow-500 text-white shadow-lg' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isAppreciated ? '✨ Appreciated!' : 'Appreciate'}
        </button>
      </div>

      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <span>&lt;</span>
              <span>Back</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-semibold text-lg">Growbinar</span>
            </div>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search mentors..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <span className="text-xl">🔔</span>
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background */}
      <div className="relative h-64 bg-gradient-to-r from-violet-600 to-purple-700 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=300&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/80 to-purple-700/80"></div>
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pb-8">
        <div className="flex flex-col items-center -mt-16">
          <img
            src="https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=VS"
            alt={mentor.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{mentor.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{mentor.role}</p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-6">
            <span>📍 {mentor.location}</span>
            <span>🗣️ {mentor.languages.join(', ')}</span>
            <span>⏱️ {mentor.experience}</span>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <p className="text-sm text-gray-600 mb-2">Next Available Session</p>
            <p className="font-semibold text-gray-900 mb-4">{mentor.nextSession}</p>
            <button 
              onClick={handleBookSession}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-800"
            >
              Book Session ✨
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid - 2/3 and 1/3 layout */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentor Profile</h2>

            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4 inline-block">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
            </section>

            {/* Background */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-violet-600 mb-6">Background</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="font-semibold text-gray-700">Mentored:</span>
                  <span className="ml-2 bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {mentor.sessions} Sessions ⚡
                  </span>
                </div>

                <div>
                  <span className="font-semibold text-gray-700 block mb-2">Expertise:</span>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm"
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
                        className="border border-gray-800 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 inline-block">Reviews</h3>
                <button className="text-violet-600 hover:text-violet-800 text-sm font-medium">View All &gt;</button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="font-semibold text-gray-700">{review.name}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Available Sessions */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Sessions</h3>
              <p className="text-sm text-gray-600 mb-4">Book 1-1 sessions from the below options</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {availableSessions.map((session, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border text-center cursor-pointer ${
                      session.slots === '0/3' 
                        ? 'border-gray-200 bg-gray-50 text-gray-400' 
                        : 'border-violet-200 bg-violet-50 hover:bg-violet-100'
                    }`}
                    onClick={() => session.slots !== '0/3' && setSelectedSession(`${session.date} 2025`)}
                  >
                    <div className="font-semibold text-sm">{session.day}</div>
                    <div className="text-xs text-gray-600">{session.date}</div>
                    <div className="text-xs mt-1">{session.slots}</div>
                  </div>
                ))}
              </div>

              <button className="text-violet-600 hover:text-violet-800 text-sm font-medium mb-4">View All &gt;</button>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Available Time Slots</h4>
                <div className="space-y-2">
                  {timeSlots.map((time, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={time}
                        checked={selectedTimeSlot === time}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-4 h-4 text-violet-600"
                      />
                      <span className="text-sm">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleBookSession}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                Book session for {selectedSession} 🚀
              </button>
            </section>

            {/* Similar Profiles */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Similar Profiles</h3>
                <button className="text-violet-600 hover:text-violet-800 text-sm font-medium">Browse Mentors &gt;</button>
              </div>
              
              <div className="space-y-4">
                {similarProfiles.map((profile, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src={profile.avatar} 
                        alt={profile.name} 
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold text-sm">{profile.name}</h4>
                        <p className="text-xs text-gray-600">{profile.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(profile.studentAvatars)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-6 h-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-full border-2 border-white -ml-1 first:ml-0" 
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{profile.sessions} Sessions</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
