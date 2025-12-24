import React from 'react';
import { ArrowLeft, Star, Filter } from 'lucide-react';

interface TutorsScreenProps {
  onNavigate: (screen: string, tutorId?: number) => void;
}

const tutors = [
  {
    id: 1,
    name: 'Dr. Ahmed Hassan',
    subject: 'Mathematics',
    rating: 4.9,
    reviews: 127,
    price: 25,
    avatar: '👨‍🏫',
    experience: '10 years',
  },
  {
    id: 2,
    name: 'Dr. Fatima Ali',
    subject: 'Physics',
    rating: 4.8,
    reviews: 98,
    price: 30,
    avatar: '👩‍🏫',
    experience: '8 years',
  },
  {
    id: 3,
    name: 'Prof. Omar Said',
    subject: 'Chemistry',
    rating: 4.7,
    reviews: 85,
    price: 28,
    avatar: '👨‍🔬',
    experience: '12 years',
  },
  {
    id: 4,
    name: 'Ms. Layla Ahmed',
    subject: 'English',
    rating: 4.9,
    reviews: 142,
    price: 22,
    avatar: '👩‍💼',
    experience: '6 years',
  },
  {
    id: 5,
    name: 'Dr. Khalid Ibrahim',
    subject: 'Biology',
    rating: 4.6,
    reviews: 73,
    price: 26,
    avatar: '👨‍⚕️',
    experience: '9 years',
  },
];

export function TutorsScreen({ onNavigate }: TutorsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 shadow-sm">
        <div className="flex items-center mb-4">
          <button onClick={() => onNavigate('home')} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>Find Tutors</h1>
        </div>
        
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search tutors or subjects..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-100 text-blue-600 px-4 rounded-lg">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tutors List */}
      <div className="px-6 pt-4 space-y-4">
        {tutors.map((tutor) => (
          <button
            key={tutor.id}
            onClick={() => onNavigate('tutorProfile', tutor.id)}
            className="w-full bg-white rounded-2xl shadow p-4 hover:shadow-lg transition-shadow text-left"
          >
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                {tutor.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="mb-1">{tutor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{tutor.subject}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-900">{tutor.rating}</span>
                    <span className="text-gray-500">({tutor.reviews})</span>
                  </div>
                  <span className="text-gray-500">{tutor.experience}</span>
                </div>
              </div>

              <div className="text-right flex flex-col justify-between">
                <span className="text-blue-600">${tutor.price}/hr</span>
                <span className="text-xs text-gray-500 mt-auto">View Profile</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
