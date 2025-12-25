import React from 'react';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, BookOpen, Award } from 'lucide-react';

interface CourseDetailScreenProps {
  onNavigate: (screen: string) => void;
  courseTitle: string;
}

const lessons = [
  { id: 1, title: 'Introduction to Physics', duration: '12:30', completed: true, locked: false },
  { id: 2, title: 'Newton\'s Laws of Motion', duration: '18:45', completed: true, locked: false },
  { id: 3, title: 'Forces and Equilibrium', duration: '22:15', completed: true, locked: false },
  { id: 4, title: 'Work, Energy and Power', duration: '20:00', completed: false, locked: false },
  { id: 5, title: 'Momentum and Collisions', duration: '16:30', completed: false, locked: false },
  { id: 6, title: 'Circular Motion', duration: '19:45', completed: false, locked: false },
  { id: 7, title: 'Gravitation', duration: '25:10', completed: false, locked: true },
  { id: 8, title: 'Final Assessment', duration: '30:00', completed: false, locked: true },
];

export function CourseDetailScreen({ onNavigate, courseTitle }: CourseDetailScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-b-3xl pb-8">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="mb-2">{courseTitle}</h1>
        <p className="text-blue-100 text-sm">with Dr. Fatima Ali</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Course Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              👩‍🏫
            </div>
            <div className="flex-1">
              <h3>Dr. Fatima Ali</h3>
              <p className="text-sm text-gray-600">Physics Expert</p>
            </div>
            <button 
              onClick={() => onNavigate('tutorProfile')}
              className="text-blue-600 text-sm"
            >
              View
            </button>
          </div>

          <p className="text-gray-700 text-sm mb-4">
            Master the fundamentals of physics with comprehensive lessons covering mechanics, 
            energy, and motion. Perfect for high school and early college students.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-sm">8</span>
              </div>
              <p className="text-xs text-gray-600">Lessons</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm">2.5h</span>
              </div>
              <p className="text-xs text-gray-600">Duration</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Yes</span>
              </div>
              <p className="text-xs text-gray-600">Certificate</p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3>Your Progress</h3>
            <span className="text-blue-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: '65%' }}
            />
          </div>
          <p className="text-sm text-gray-600">3 of 8 lessons completed</p>
        </div>

        {/* Lessons List */}
        <div className="mb-4">
          <h2 className="mb-4">Course Content</h2>
          <div className="bg-white rounded-2xl shadow divide-y divide-gray-100">
            {lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                disabled={lesson.locked}
                className={`w-full px-5 py-4 flex items-center gap-4 text-left ${
                  lesson.locked
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-50 transition-colors'
                }`}
              >
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  lesson.completed
                    ? 'bg-green-100'
                    : lesson.locked
                    ? 'bg-gray-100'
                    : 'bg-blue-100'
                }`}>
                  {lesson.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : lesson.locked ? (
                    <Lock className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Play className="w-5 h-5 text-blue-600" />
                  )}
                </div>

                {/* Lesson Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500">Lesson {lesson.id}</span>
                    {lesson.completed && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Completed
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm mb-1">{lesson.title}</h3>
                  <p className="text-xs text-gray-500">{lesson.duration} min</p>
                </div>

                {/* Play Button */}
                {!lesson.locked && !lesson.completed && (
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" />
          Continue Learning
        </button>
      </div>
    </div>
  );
}
