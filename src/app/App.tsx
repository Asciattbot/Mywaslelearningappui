import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { TutorsScreen } from './components/TutorsScreen';
import { TutorProfileScreen } from './components/TutorProfileScreen';
import { BookSessionScreen } from './components/BookSessionScreen';
import { BookingConfirmationScreen } from './components/BookingConfirmationScreen';
import { SessionDetailsScreen } from './components/SessionDetailsScreen';
import { CourseDetailScreen } from './components/CourseDetailScreen';
import { LiveClassScreen } from './components/LiveClassScreen';
import { MessagesScreen } from './components/MessagesScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { SettingsScreen } from './components/SettingsScreen';

type Screen = 
  | 'login' 
  | 'home' 
  | 'tutors' 
  | 'tutorProfile' 
  | 'bookSession' 
  | 'bookingConfirmation'
  | 'sessionDetails'
  | 'courseDetail'
  | 'liveClass' 
  | 'messages' 
  | 'profile'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedTutorId, setSelectedTutorId] = useState<number>(1);
  const [selectedCourse, setSelectedCourse] = useState<string>('Physics');
  const [sessionDetails, setSessionDetails] = useState({
    tutor: 'Dr. Ahmed Hassan',
    subject: 'Mathematics',
    date: 'December 24, 2024',
    time: '4:00 PM',
    price: '$25.00',
  });

  const handleNavigate = (screen: string, data?: number | string) => {
    setCurrentScreen(screen as Screen);
    if (typeof data === 'number') {
      setSelectedTutorId(data);
    } else if (typeof data === 'string') {
      setSelectedCourse(data);
    }
  };

  const handleLogin = () => {
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
      {currentScreen === 'tutors' && <TutorsScreen onNavigate={handleNavigate} />}
      {currentScreen === 'tutorProfile' && (
        <TutorProfileScreen onNavigate={handleNavigate} tutorId={selectedTutorId} />
      )}
      {currentScreen === 'bookSession' && <BookSessionScreen onNavigate={handleNavigate} />}
      {currentScreen === 'bookingConfirmation' && (
        <BookingConfirmationScreen onNavigate={handleNavigate} sessionDetails={sessionDetails} />
      )}
      {currentScreen === 'sessionDetails' && <SessionDetailsScreen onNavigate={handleNavigate} />}
      {currentScreen === 'courseDetail' && (
        <CourseDetailScreen onNavigate={handleNavigate} courseTitle={selectedCourse} />
      )}
      {currentScreen === 'liveClass' && <LiveClassScreen onNavigate={handleNavigate} />}
      {currentScreen === 'messages' && <MessagesScreen onNavigate={handleNavigate} />}
      {currentScreen === 'profile' && (
        <ProfileScreen onNavigate={handleNavigate} onLogout={handleLogout} />
      )}
      {currentScreen === 'settings' && (
        <SettingsScreen onNavigate={handleNavigate} onLogout={handleLogout} />
      )}
    </div>
  );
}