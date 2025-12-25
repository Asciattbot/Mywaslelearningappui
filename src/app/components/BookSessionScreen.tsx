import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';

interface BookSessionScreenProps {
  onNavigate: (screen: string) => void;
}

const dates = [
  { day: 'Mon', date: 23, available: true },
  { day: 'Tue', date: 24, available: true },
  { day: 'Wed', date: 25, available: true },
  { day: 'Thu', date: 26, available: false },
  { day: 'Fri', date: 27, available: true },
  { day: 'Sat', date: 28, available: true },
];

const timeSlots = [
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

export function BookSessionScreen({ onNavigate }: BookSessionScreenProps) {
  const [selectedDate, setSelectedDate] = useState(24);
  const [selectedTime, setSelectedTime] = useState('4:00 PM');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    onNavigate('bookingConfirmation');
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="mb-2">Processing...</h2>
          <p className="text-gray-600 mb-4">
            Confirming your session booking
          </p>
          <p className="text-sm text-blue-600">Please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 shadow-sm">
        <div className="flex items-center">
          <button onClick={() => onNavigate('tutorProfile')} className="mr-4">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1>Book a Session</h1>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {/* Tutor Info */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              👨‍🏫
            </div>
            <div>
              <h3>Dr. Ahmed Hassan</h3>
              <p className="text-sm text-gray-600">Mathematics</p>
            </div>
            <span className="ml-auto text-blue-600">$25/hr</span>
          </div>
        </div>

        {/* Select Date */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2>Select Date</h2>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {dates.map((date) => (
              <button
                key={date.date}
                onClick={() => date.available && setSelectedDate(date.date)}
                disabled={!date.available}
                className={`p-3 rounded-lg text-center ${
                  selectedDate === date.date
                    ? 'bg-blue-600 text-white'
                    : date.available
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-50 text-gray-300 cursor-not-allowed'
                }`}
              >
                <p className="text-xs mb-1">{date.day}</p>
                <p>{date.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2>Select Time</h2>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-lg text-sm ${
                  selectedTime === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Session Details */}
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <h3 className="mb-3">Session Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Date</span>
              <span>December {selectedDate}, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time</span>
              <span>{selectedTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span>1 hour</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-blue-200">
              <span>Total</span>
              <span className="text-blue-600">$25.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
        <button
          onClick={handleConfirm}
          className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}