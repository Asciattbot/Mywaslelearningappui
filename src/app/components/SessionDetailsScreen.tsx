import React from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, Video, MessageCircle, Share2, XCircle } from 'lucide-react';

interface SessionDetailsScreenProps {
  onNavigate: (screen: string) => void;
}

export function SessionDetailsScreen({ onNavigate }: SessionDetailsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-b-3xl pb-8">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="mb-2">Session Details</h1>
        <p className="text-blue-100 text-sm">Upcoming Session</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Session Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
              👨‍🏫
            </div>
            <div className="flex-1">
              <h2>Mathematics Tutoring</h2>
              <p className="text-gray-600">with Dr. Ahmed Hassan</p>
            </div>
          </div>

          {/* Date & Time */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p>Thursday, December 26, 2024</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p>4:00 PM - 5:00 PM (1 hour)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p>Online Video Call</p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-green-700 text-center">
              Session starts in 2 hours 15 minutes
            </p>
          </div>
        </div>

        {/* Session Info */}
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <h3 className="mb-3">What to Prepare</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Review Chapter 5: Limits and Continuity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Prepare questions about homework problems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Have your notebook and calculator ready</span>
            </li>
          </ul>
        </div>

        {/* Tutor Quick Info */}
        <div className="bg-white rounded-2xl shadow p-5 mb-6">
          <h3 className="mb-4">About Your Tutor</h3>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              👨‍🏫
            </div>
            <div className="flex-1">
              <h3>Dr. Ahmed Hassan</h3>
              <p className="text-sm text-gray-600">Mathematics Expert</p>
            </div>
            <button 
              onClick={() => onNavigate('tutorProfile')}
              className="text-blue-600 text-sm"
            >
              View Profile
            </button>
          </div>
          <p className="text-sm text-gray-700">
            10 years of experience • 4.9 ⭐ rating • 127 reviews
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-4">
          <button
            onClick={() => onNavigate('liveClass')}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Video className="w-5 h-5" />
            Join Class Now
          </button>

          <button
            onClick={() => onNavigate('messages')}
            className="w-full bg-white text-gray-700 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Message Tutor
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white text-gray-700 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
            <button className="bg-white text-red-600 py-3 rounded-xl border border-red-200 hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <XCircle className="w-4 h-4" />
              <span className="text-sm">Cancel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
