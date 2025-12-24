import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { TutorsScreen } from './components/TutorsScreen';
import { TutorProfileScreen } from './components/TutorProfileScreen';
import { BookSessionScreen } from './components/BookSessionScreen';
import { LiveClassScreen } from './components/LiveClassScreen';
import { MessagesScreen } from './components/MessagesScreen';
import { ProfileScreen } from './components/ProfileScreen';

type Screen = 
  | 'login' 
  | 'home' 
  | 'tutors' 
  | 'tutorProfile' 
  | 'bookSession' 
  | 'liveClass' 
  | 'messages' 
  | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedTutorId, setSelectedTutorId] = useState<number>(1);

  const handleNavigate = (screen: string, tutorId?: number) => {
    setCurrentScreen(screen as Screen);
    if (tutorId) {
      setSelectedTutorId(tutorId);
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
      {currentScreen === 'liveClass' && <LiveClassScreen onNavigate={handleNavigate} />}
      {currentScreen === 'messages' && <MessagesScreen onNavigate={handleNavigate} />}
      {currentScreen === 'profile' && (
        <ProfileScreen onNavigate={handleNavigate} onLogout={handleLogout} />
      )}
    </div>
  );
}
