
import React, { useState } from 'react';
import Navigation from './mentor/Navigation';
import AnimatedSidebars from './mentor/AnimatedSidebars';
import ProfileHeader from './mentor/ProfileHeader';
import ProfileOverview from './mentor/ProfileOverview';
import ProfileBackground from './mentor/ProfileBackground';
import ProfileReviews from './mentor/ProfileReviews';
import AvailableSessions from './mentor/AvailableSessions';
import SimilarProfiles from './mentor/SimilarProfiles';

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
    alert(`Your session for ${selectedSession} at ${selectedTimeSlot} has been confirmed.`);
  };

  const handleAppreciate = () => {
    setIsAppreciated(!isAppreciated);
    alert(isAppreciated ? "Appreciation Removed" : "Thank you for appreciating this mentor!");
  };

  const handleSocialClick = (platform) => {
    console.log(`Opening ${platform}`);
    alert(`Redirecting to ${platform} profile...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedSidebars 
        handleSocialClick={handleSocialClick}
        handleAppreciate={handleAppreciate}
        isAppreciated={isAppreciated}
      />

      <Navigation />

      <ProfileHeader mentor={mentor} onBookSession={handleBookSession} />

      {/* Main Content Grid */}
      <div className="px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 animate-fade-in">Mentor Profile</h2>
            <ProfileOverview mentor={mentor} />
            <ProfileBackground mentor={mentor} />
            <ProfileReviews reviews={reviews} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <AvailableSessions 
              availableSessions={availableSessions}
              timeSlots={timeSlots}
              selectedSession={selectedSession}
              selectedTimeSlot={selectedTimeSlot}
              setSelectedSession={setSelectedSession}
              setSelectedTimeSlot={setSelectedTimeSlot}
              handleBookSession={handleBookSession}
            />
            <SimilarProfiles similarProfiles={similarProfiles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
