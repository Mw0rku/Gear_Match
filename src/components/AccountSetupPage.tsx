import { ArrowLeft } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface AccountSetupPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function AccountSetupPage({ onNavigate, darkMode }: AccountSetupPageProps) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle signup logic
    onNavigate('welcome');
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-amber-100 via-pink-200 to-sky-200'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={() => onNavigate('login')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-pink-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Account Setup</h2>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <Label htmlFor="username" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Username</Label>
            <Input
              id="username"
              type="text"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/95 border-pink-200'}
              placeholder="Enter username"
            />
          </div>

          <div>
            <Label htmlFor="email" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-indigo-600/30 text-white' : 'bg-white/95 border-sky-200'}
              placeholder="Enter email"
            />
          </div>

          <div>
            <Label htmlFor="password" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/95 border-amber-200'}
              placeholder="Enter password"
            />
          </div>

          <div>
            <Label htmlFor="phone" className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Phone #</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={darkMode ? 'bg-slate-700/50 border-indigo-600/30 text-white' : 'bg-white/95 border-pink-200'}
              placeholder="Enter phone number"
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full py-3 px-6 text-white rounded-full transition-colors mt-8 shadow-lg ${
              darkMode
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
