import React from 'react';
import { Calendar, Search, BookOpen, MessageCircle, User, Video } from 'lucide-react';
import logo from 'figma:asset/b1697e26fcecd4b41bb343f74484b2b69f93e55b.png';

interface HomeScreenProps {
  onNavigate: (screen: string, subject?: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <img src={logo} alt="MyWasl" className="h-8 brightness-0 invert" />
          <button onClick={() => onNavigate('profile')}>
            <User className="w-6 h-6" />
          </button>
        </div>
        <h1>Hello, Sarah!</h1>
        <p className="text-blue-100 mt-1">Ready to learn today?</p>
      </div>

      <div className="px-6 -mt-8">
        {/* Upcoming Session Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600">Upcoming Session</p>
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <h3 className="mb-1">Mathematics Tutoring</h3>
          <p className="text-sm text-gray-600 mb-3">with Dr. Ahmed Hassan</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-600">Today, 4:00 PM</p>
            <button 
              onClick={() => onNavigate('sessionDetails')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onNavigate('tutors')}
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-shadow text-left"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="mb-1">Find Tutors</h3>
            <p className="text-sm text-gray-600">Browse experts</p>
          </button>

          <button
            onClick={() => onNavigate('tutors')}
            className="bg-white rounded-2xl shadow p-5 hover:shadow-lg transition-shadow text-left"
          >
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="mb-1">My Courses</h3>
            <p className="text-sm text-gray-600">View lessons</p>
          </button>
        </div>

        {/* Continue Learning */}
        <div className="mb-6">
          <h2 className="mb-4">Continue Learning</h2>
          <div className="space-y-3">
            {[
              { subject: 'Physics', progress: 65, tutor: 'Dr. Fatima Ali' },
              { subject: 'Chemistry', progress: 40, tutor: 'Prof. Omar Said' },
            ].map((course, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate('courseDetail', course.subject)}
                className="w-full bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow text-left"
              >
                <div className="flex justify-between mb-2">
                  <h3>{course.subject}</h3>
                  <span className="text-sm text-gray-600">{course.progress}%</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">with {course.tutor}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
        <button className="flex flex-col items-center text-blue-600">
          <BookOpen className="w-6 h-6 mb-1" />
          <span className="text-xs">Home</span>
        </button>
        <button 
          onClick={() => onNavigate('tutors')}
          className="flex flex-col items-center text-gray-400"
        >
          <Search className="w-6 h-6 mb-1" />
          <span className="text-xs">Find</span>
        </button>
        <button 
          onClick={() => onNavigate('liveClass')}
          className="flex flex-col items-center text-gray-400"
        >
          <Video className="w-6 h-6 mb-1" />
          <span className="text-xs">Live</span>
        </button>
        <button 
          onClick={() => onNavigate('messages')}
          className="flex flex-col items-center text-gray-400"
        >
          <MessageCircle className="w-6 h-6 mb-1" />
          <span className="text-xs">Messages</span>
        </button>
        <button 
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center text-gray-400"
        >
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}