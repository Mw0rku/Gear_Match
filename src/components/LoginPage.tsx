import { useState } from 'react';
import { PageType } from '../App';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Settings } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function LoginPage({ onNavigate, darkMode }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    onNavigate('welcome');
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-pink-400 via-sky-300 to-amber-100'
    }`}>
      <div className="p-8 flex flex-col justify-center h-full">
        {/* GearMatch Logo */}
        <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 backdrop-blur-sm mx-auto ${
          darkMode
            ? 'bg-slate-700/40 border-purple-600/60'
            : 'bg-white/40 border-white/60'
        }`}>
          <Settings className={`w-12 h-12 ${darkMode ? 'text-purple-400' : 'text-pink-600'}`} />
        </div>

        {/* Title */}
        <h2 className={`text-center mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Welcome to GearMatch</h2>
        <p className={`text-center mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Log in to continue</p>

        {/* Form */}
        <div className="space-y-5 mb-6">
          <div>
            <Label htmlFor="email" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/90 border-pink-200'}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/90 border-sky-200'}
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          className={`w-full py-3 px-6 text-white rounded-full transition-colors shadow-lg mb-4 ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
          }`}
        >
          Log In
        </button>

        <button
          onClick={() => onNavigate('account')}
          className={`w-full py-3 px-6 rounded-full border transition-colors backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/60 text-gray-200 border-purple-600/30 hover:bg-slate-700/80'
              : 'bg-white/60 text-gray-700 border-pink-200 hover:bg-white/80'
          }`}
        >
          Create Account
        </button>

        <button className={`text-center mt-4 w-full transition-colors text-sm ${
          darkMode ? 'text-gray-400 hover:text-purple-400' : 'text-gray-600 hover:text-pink-600'
        }`}>
          Forgot Password?
        </button>
      </div>
    </div>
  );
}
