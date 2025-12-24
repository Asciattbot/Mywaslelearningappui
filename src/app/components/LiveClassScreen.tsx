import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Phone, 
  MessageCircle,
  Users,
  MoreVertical 
} from 'lucide-react';

interface LiveClassScreenProps {
  onNavigate: (screen: string) => void;
}

export function LiveClassScreen({ onNavigate }: LiveClassScreenProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-6 z-10">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h3>Mathematics Tutoring</h3>
            <p className="text-sm text-gray-300">with Dr. Ahmed Hassan</p>
          </div>
          <button>
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Video Area */}
      <div className="h-screen flex flex-col">
        {/* Tutor Video (Main) */}
        <div className="flex-1 bg-gray-800 relative flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-6xl mb-4 mx-auto">
              👨‍🏫
            </div>
            <h2>Dr. Ahmed Hassan</h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm text-gray-300">Connected</p>
            </div>
          </div>

          {/* Student Video (Picture-in-Picture) */}
          <div className="absolute top-20 right-4 w-24 h-32 bg-gray-700 rounded-lg overflow-hidden border-2 border-white/20">
            <div className="h-full flex items-center justify-center text-3xl">
              👤
            </div>
          </div>

          {/* Duration */}
          <div className="absolute top-20 left-4 bg-black/50 px-3 py-2 rounded-lg">
            <p className="text-sm">23:45</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* Mute Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                isMuted ? 'bg-red-600' : 'bg-gray-700'
              }`}
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>

            {/* Video Button */}
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                isVideoOff ? 'bg-red-600' : 'bg-gray-700'
              }`}
            >
              {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </button>

            {/* End Call Button */}
            <button
              onClick={() => onNavigate('home')}
              className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center"
            >
              <Phone className="w-6 h-6 transform rotate-135" />
            </button>

            {/* Chat Button */}
            <button className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </button>

            {/* Participants Button */}
            <button className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center relative">
              <Users className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-600 w-5 h-5 rounded-full text-xs flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Session Info */}
          <div className="text-center text-sm text-gray-300">
            <p>Session ends at 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
