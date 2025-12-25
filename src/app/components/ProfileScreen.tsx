import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  BookOpen, 
  Award, 
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function ProfileScreen({ onNavigate, onLogout }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-b-3xl pb-20">
        <button onClick={() => onNavigate('home')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1>Profile</h1>
      </div>

      <div className="px-6 -mt-12">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl">
              👩‍🎓
            </div>
            <div className="flex-1">
              <h2>Sarah Ahmed</h2>
              <p className="text-gray-600">Student</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">sarah.ahmed@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">+966 50 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-gray-700">Member since Jan 2024</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl mb-1">12</p>
            <p className="text-xs text-gray-600">Courses</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Calendar className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-2xl mb-1">48</p>
            <p className="text-xs text-gray-600">Sessions</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 text-center">
            <Award className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl mb-1">8</p>
            <p className="text-xs text-gray-600">Certificates</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow divide-y divide-gray-100">
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <span className="flex-1 text-left">Edit Profile</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <span className="flex-1 text-left">My Courses</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-yellow-600" />
            </div>
            <span className="flex-1 text-left">Certificates</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button 
            onClick={() => onNavigate('settings')}
            className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left">Settings</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-green-600" />
            </div>
            <span className="flex-1 text-left">Help & Support</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full mt-6 bg-white border border-red-200 text-red-600 py-4 rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}