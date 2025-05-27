
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const MentorProfile = () => {
  const [selectedSession, setSelectedSession] = useState('06 May 2025');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('3:30 PM');
  const [isAppreciated, setIsAppreciated] = useState(false);
  const { toast } = useToast();

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
      text: "Vikas provided excellent guidance on my portfolio. His feedback was actionable and helped me land my dream job!"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Amazing mentor! Really helped me understand design principles and gave great career advice."
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
      avatars: 4
    },
    {
      name: "Raj Kumar",
      role: "Design Lead",
      sessions: "40+",
      avatars: 5
    }
  ];

  const handleBookSession = () => {
    console.log('Booking session:', { date: selectedSession, time: selectedTimeSlot });
    toast({
      title: "Session Booked!",
      description: `Your session for ${selectedSession} at ${selectedTimeSlot} has been confirmed.`,
    });
  };

  const handleAppreciate = () => {
    setIsAppreciated(!isAppreciated);
    toast({
      title: isAppreciated ? "Appreciation Removed" : "Appreciation Added!",
      description: isAppreciated ? "Thanks for your feedback" : "Thank you for appreciating this mentor!",
    });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `Opening ${platform}`,
      description: `Redirecting to ${platform} profile...`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        <Button 
          onClick={handleAppreciate}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            isAppreciated 
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg animate-pulse' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isAppreciated ? '✨ Appreciated!' : 'Appreciate'}
        </Button>
      </div>

      {/* Top Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5m0 0l-5 5m5-5V3" />
              </svg>
              Back
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
              <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
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
            <Button 
              onClick={handleBookSession}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Session ✨
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Mentor Profile</h2>

            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
            </section>

            {/* Background */}
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

            {/* Reviews */}
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
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Available Sessions */}
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

              <Button 
                onClick={handleBookSession}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Book session for {selectedSession} 🚀
              </Button>
            </section>

            {/* Similar Profiles */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
