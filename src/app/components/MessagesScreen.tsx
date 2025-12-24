import React, { useState } from 'react';
import { ArrowLeft, Send, MoreVertical, Phone, Video } from 'lucide-react';

interface MessagesScreenProps {
  onNavigate: (screen: string) => void;
}

const chatList = [
  {
    id: 1,
    name: 'Dr. Ahmed Hassan',
    avatar: '👨‍🏫',
    lastMessage: 'See you at 4 PM today!',
    time: '10:30 AM',
    unread: 2,
  },
  {
    id: 2,
    name: 'Dr. Fatima Ali',
    avatar: '👩‍🏫',
    lastMessage: 'Great progress in your last lesson',
    time: 'Yesterday',
    unread: 0,
  },
  {
    id: 3,
    name: 'Prof. Omar Said',
    avatar: '👨‍🔬',
    lastMessage: 'Here are the materials for next week',
    time: 'Monday',
    unread: 0,
  },
];

const messages = [
  { id: 1, text: 'Hi Dr. Ahmed! Looking forward to our session today.', sent: true, time: '10:25 AM' },
  { id: 2, text: 'Hello Sarah! Me too. We\'ll continue with calculus.', sent: false, time: '10:28 AM' },
  { id: 3, text: 'See you at 4 PM today!', sent: false, time: '10:30 AM' },
];

export function MessagesScreen({ onNavigate }: MessagesScreenProps) {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageText, setMessageText] = useState('');

  if (selectedChat) {
    const chat = chatList.find(c => c.id === selectedChat)!;
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              <button onClick={() => setSelectedChat(null)}>
                <ArrowLeft className="w-6 h-6" />
              </button>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                {chat.avatar}
              </div>
              <div>
                <h3>{chat.name}</h3>
                <p className="text-xs text-green-600">Online</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => onNavigate('liveClass')} className="text-blue-600">
                <Video className="w-6 h-6" />
              </button>
              <button className="text-blue-600">
                <Phone className="w-6 h-6" />
              </button>
              <button>
                <MoreVertical className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.sent
                    ? 'bg-blue-600 text-white rounded-br-sm'
                    : 'bg-white text-gray-900 rounded-bl-sm shadow'
                }`}
              >
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${message.sent ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex gap-3">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 sticky top-0 shadow-sm">
        <div className="flex items-center justify-between">
          <h1>Messages</h1>
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Chat List */}
      <div className="divide-y divide-gray-200">
        {chatList.map((chat) => (
          <button
            key={chat.id}
            onClick={() => setSelectedChat(chat.id)}
            className="w-full px-6 py-4 hover:bg-gray-100 transition-colors flex items-center gap-4 text-left"
          >
            <div className="relative">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                {chat.avatar}
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3>{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
            </div>

            {chat.unread > 0 && (
              <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {chat.unread}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
