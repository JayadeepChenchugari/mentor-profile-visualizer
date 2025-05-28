
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell, Github, MessageCircle, Linkedin, Star, ArrowLeft, Search, User } from 'lucide-react';

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
      text: "Vikas provided excellent guidance on my portfolio. His feedback was actionable and helped me land my dream job!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1ad?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Amazing mentor! Really helped me understand design principles and gave great career advice.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
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
      avatars: 4,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
    },
    {
      name: "Raj Kumar",
      role: "Design Lead",
      sessions: "40+",
      avatars: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Fixed Top Icons - Using position fixed instead of absolute */}
      <div className="fixed top-4 right-4 z-50 flex gap-3">
        <div className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <Bell className="w-5 h-5 text-gray-600 hover:text-violet-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
        <div className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <MessageCircle className="w-5 h-5 text-gray-600 hover:text-blue-600" />
        </div>
        <div className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
          <User className="w-5 h-5 text-gray-600 hover:text-green-600" />
        </div>
      </div>

      {/* Fixed Left Side Social Icons */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <div 
          onClick={() => handleSocialClick('GitHub')}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-110"
        >
          <Github className="w-6 h-6 text-gray-700 hover:text-black" />
        </div>
        <div 
          onClick={() => handleSocialClick('LinkedIn')}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-110"
        >
          <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-700" />
        </div>
        <div 
          onClick={() => handleSocialClick('Star')}
          className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-110"
        >
          <Star className="w-6 h-6 text-yellow-500 hover:text-yellow-600" />
        </div>
      </div>

      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b px-6 py-4 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
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
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b1ad?w=32&h=32&fit=crop&crop=face" 
              alt="Profile" 
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=150&h=150&fit=crop&crop=face"
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
            <Button 
              onClick={handleBookSession}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-700 text-white py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-purple-800"
            >
              Book Session ✨
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Equal Width */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Overview, Background, Reviews */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentor Profile</h2>

            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2 mb-4">Overview</h3>
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
                        className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm hover:bg-violet-200"
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
                        className="border border-gray-800 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-100"
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
                <h3 className="text-lg font-semibold text-violet-600 border-b-2 border-violet-600 pb-2">Reviews</h3>
                <button className="text-violet-600 hover:text-violet-800 text-sm font-medium hover:underline">View All &gt;</button>
              </div>
              
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-10 h-10 rounded-full border border-gray-200"
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

          {/* Right Column - Available Sessions and Similar Profiles */}
          <div className="space-y-6">
            {/* Available Sessions */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Available Sessions</h3>
              <p className="text-sm text-gray-600 mb-4">Book 1-1 sessions from the below options</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {availableSessions.map((session, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border text-center cursor-pointer transition-all duration-300 ${
                      session.slots === '0/3' 
                        ? 'border-gray-200 bg-gray-50 text-gray-400' 
                        : 'border-violet-200 bg-violet-50 hover:bg-violet-100'
                    }`}
                    onClick={() => session.slots !== '0/3' && setSelectedSession(`${session.date} May 2025`)}
                  >
                    <div className="font-semibold text-sm">{session.day}</div>
                    <div className="text-xs text-gray-600">{session.date}</div>
                    <div className="text-xs mt-1">{session.slots}</div>
                  </div>
                ))}
              </div>

              <button className="text-violet-600 hover:text-violet-800 text-sm font-medium mb-4 hover:underline">View All &gt;</button>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Available Time Slots</h4>
                <div className="space-y-2">
                  {timeSlots.map((time, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer hover:bg-violet-50 p-2 rounded-lg">
                      <input
                        type="radio"
                        name="timeSlot"
                        value={time}
                        checked={selectedTimeSlot === time}
                        onChange={(e) => setSelectedTimeSlot(e.target.value)}
                        className="w-4 h-4 text-violet-600 focus:ring-violet-500"
                      />
                      <span className="text-sm">{time}</span>
                      {selectedTimeSlot === time && (
                        <span className="ml-auto text-violet-600">✓</span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleBookSession}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 mb-4"
              >
                Book session for {selectedSession} 🚀
              </Button>

              {/* Appreciate Button */}
              <div className="text-center">
                <Button 
                  onClick={handleAppreciate}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    isAppreciated 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg' 
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isAppreciated ? '✨ Appreciated!' : 'Appreciate'}
                </Button>
              </div>
            </section>

            {/* Similar Profiles */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Similar Profiles</h3>
                <button className="text-violet-600 hover:text-violet-800 text-sm font-medium hover:underline">Browse Mentors &gt;</button>
              </div>
              
              <div className="space-y-4">
                {similarProfiles.map((profile, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <img 
                        src={profile.photo} 
                        alt={profile.name} 
                        className="w-12 h-12 rounded-full border border-gray-200"
                      />
                      <div>
                        <h4 className="font-semibold text-sm hover:text-violet-600">{profile.name}</h4>
                        <p className="text-xs text-gray-600">{profile.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(profile.avatars)].map((_, i) => (
                          <img 
                            key={i} 
                            src={`https://images.unsplash.com/photo-150${7 + i}003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face`}
                            alt="Student"
                            className="w-6 h-6 rounded-full border-2 border-white -ml-1 first:ml-0 shadow-sm" 
                          />
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
