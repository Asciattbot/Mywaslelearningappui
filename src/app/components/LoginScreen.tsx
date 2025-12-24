import React from 'react';
import logo from 'figma:asset/b1697e26fcecd4b41bb343f74484b2b69f93e55b.png';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <img src={logo} alt="MyWasl" className="h-16 mx-auto mb-4" />
          <p className="text-blue-600 mt-2">Trusted Learning</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-center mb-6">Welcome Back</h1>
          
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div>
              <label className="block text-sm mb-2 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="student@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-2 text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <a href="#" className="text-sm text-blue-600">Forgot password?</a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account? <a href="#" className="text-blue-600">Sign up</a>
        </p>
      </div>
    </div>
  );
}
