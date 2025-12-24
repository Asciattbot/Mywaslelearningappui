import React from 'react';
import { ArrowLeft, Star, Clock, BookOpen, Award, Calendar } from 'lucide-react';

interface TutorProfileScreenProps {
  onNavigate: (screen: string) => void;
  tutorId: number;
}

const tutorData: { [key: number]: any } = {
  1: {
    name: 'Dr. Ahmed Hassan',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 127,
    price: 25,
    avatar: '👨‍🏫',
    experience: '10 years',
    bio: 'Passionate mathematics educator with a Ph.D. in Applied Mathematics. Specialized in making complex concepts easy to understand.',
    subjects: ['Algebra', 'Calculus', 'Geometry', 'Statistics'],
    languages: ['English', 'Arabic'],
    students: 245,
    sessions: 1240,
  },
};

export function TutorProfileScreen({ onNavigate, tutorId }: TutorProfileScreenProps) {
  const tutor = tutorData[tutorId] || tutorData[1];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-b-3xl">
        <button onClick={() => onNavigate('tutors')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
            {tutor.avatar}
          </div>
          <div className="flex-1">
            <h1 className="mb-1">{tutor.name}</h1>
            <p className="text-blue-100">{tutor.subject}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>{tutor.rating}</span>
              <span className="text-blue-100 text-sm">({tutor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center">
            <p className="text-2xl mb-1">{tutor.students}</p>
            <p className="text-xs text-blue-100">Students</p>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center">
            <p className="text-2xl mb-1">{tutor.sessions}</p>
            <p className="text-xs text-blue-100">Sessions</p>
          </div>
          <div className="bg-blue-700 bg-opacity-50 rounded-lg p-3 text-center">
            <p className="text-2xl mb-1">{tutor.experience}</p>
            <p className="text-xs text-blue-100">Experience</p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-5">
        {/* About */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="mb-3">About</h2>
          <p className="text-gray-700">{tutor.bio}</p>
        </div>

        {/* Subjects */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h2>Subjects</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tutor.subjects.map((subject: string, idx: number) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="mb-3">Languages</h2>
          <p className="text-gray-700">{tutor.languages.join(', ')}</p>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2>Availability</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span>2:00 PM - 8:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span>10:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Hourly Rate</p>
              <h2 className="text-blue-600">${tutor.price}/hour</h2>
            </div>
            <Award className="w-8 h-8 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Book Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <button
          onClick={() => onNavigate('bookSession')}
          className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Book a Session
        </button>
      </div>
    </div>
  );
}
