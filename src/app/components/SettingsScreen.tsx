import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Globe, 
  Bell, 
  HelpCircle, 
  FileText, 
  Shield, 
  LogOut,
  ChevronRight,
  Check
} from 'lucide-react';

interface SettingsScreenProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function SettingsScreen({ onNavigate, onLogout }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState({
    sessions: true,
    messages: true,
    updates: false,
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4 rounded-b-3xl">
        <button onClick={() => onNavigate('profile')} className="mb-4">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1>Settings</h1>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {/* Language */}
        <div className="bg-white rounded-2xl shadow">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm">Preferences</h2>
          </div>
          
          <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p>Language</p>
              <p className="text-sm text-gray-600">English</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow">
          <div className="px-5 py-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-gray-600" />
              <h2 className="text-sm">Notifications</h2>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            <div className="px-5 py-4 flex items-center justify-between">
              <div>
                <p>Session Reminders</p>
                <p className="text-sm text-gray-600">Get notified before sessions</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, sessions: !notifications.sessions })}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  notifications.sessions ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.sessions ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="px-5 py-4 flex items-center justify-between">
              <div>
                <p>New Messages</p>
                <p className="text-sm text-gray-600">Alerts for new messages</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, messages: !notifications.messages })}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  notifications.messages ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.messages ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="px-5 py-4 flex items-center justify-between">
              <div>
                <p>Platform Updates</p>
                <p className="text-sm text-gray-600">News and feature updates</p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, updates: !notifications.updates })}
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  notifications.updates ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.updates ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Support & About */}
        <div className="bg-white rounded-2xl shadow">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm">Support & About</h2>
          </div>

          <div className="divide-y divide-gray-100">
            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <p>Help Center</p>
                <p className="text-sm text-gray-600">FAQs and support</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1 text-left">
                <p>Terms & Conditions</p>
                <p className="text-sm text-gray-600">Legal information</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <p>Privacy Policy</p>
                <p className="text-sm text-gray-600">How we protect your data</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-2xl shadow p-5">
          <h3 className="mb-3">About MyWasl</h3>
          <p className="text-sm text-gray-600 mb-3">
            Version 1.0.0
          </p>
          <p className="text-xs text-gray-500">
            © 2024 MyWasl - Trusted Learning Platform
          </p>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full bg-white border border-red-200 text-red-600 py-4 rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
