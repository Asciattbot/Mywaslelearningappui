import React from 'react';
import { Check, Calendar, Clock, User, MessageCircle, Home } from 'lucide-react';

interface BookingConfirmationScreenProps {
  onNavigate: (screen: string) => void;
  sessionDetails: {
    tutor: string;
    subject: string;
    date: string;
    time: string;
    price: string;
  };
}

export function BookingConfirmationScreen({ onNavigate, sessionDetails }: BookingConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Success Icon */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-center mb-2">Booking Confirmed!</h1>
          <p className="text-center text-gray-600 mb-8">
            Your session has been successfully booked
          </p>

          {/* Session Details */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                👨‍🏫
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-600">Tutor</p>
                <h3 className="truncate">{sessionDetails.tutor}</h3>
                <p className="text-sm text-gray-600">{sessionDetails.subject}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-gray-600">Date</p>
                </div>
                <p className="text-sm">{sessionDetails.date}</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <p className="text-xs text-gray-600">Time</p>
                </div>
                <p className="text-sm">{sessionDetails.time}</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total Paid</span>
                <span className="text-green-600">{sessionDetails.price}</span>
              </div>
            </div>
          </div>

          {/* Confirmation Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700 text-center">
              A confirmation email has been sent to your inbox with the session link
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('liveClass')}
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            View Session Details
          </button>

          <button
            onClick={() => onNavigate('messages')}
            className="w-full bg-white text-gray-700 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Message Tutor
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-white text-gray-700 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
