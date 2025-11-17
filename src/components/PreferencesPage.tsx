import { ArrowLeft } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Input } from './ui/input';

interface PreferencesPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function PreferencesPage({ onNavigate, darkMode }: PreferencesPageProps) {
  const [preferences, setPreferences] = useState({
    running: false,
    soccer: false,
    basketball: false,
    gym: false,
  });

  const [userDetails, setUserDetails] = useState({
    weight: '',
    height: '',
    age: '',
    gender: '',
  });

  const handleToggle = (key: string) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleDetailChange = (field: string, value: string) => {
    setUserDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onNavigate('menu');
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-amber-100 via-sky-200 to-pink-200'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button onClick={() => onNavigate('menu')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-pink-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Preferences</h2>
        </div>

        {/* Personal Details */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="weight" className={`mb-2 block text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Weight (lbs)</Label>
              <Input
                id="weight"
                type="number"
                value={userDetails.weight}
                onChange={(e) => handleDetailChange('weight', e.target.value)}
                className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/90 border-pink-200'}
                placeholder="150"
              />
            </div>
            <div>
              <Label htmlFor="height" className={`mb-2 block text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Height (in)</Label>
              <Input
                id="height"
                type="number"
                value={userDetails.height}
                onChange={(e) => handleDetailChange('height', e.target.value)}
                className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/90 border-sky-200'}
                placeholder="68"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="age" className={`mb-2 block text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Age</Label>
              <Input
                id="age"
                type="number"
                value={userDetails.age}
                onChange={(e) => handleDetailChange('age', e.target.value)}
                className={darkMode ? 'bg-slate-700/50 border-purple-600/30 text-white' : 'bg-white/90 border-amber-200'}
                placeholder="25"
              />
            </div>
            <div>
              <Label htmlFor="gender" className={`mb-2 block text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Gender</Label>
              <select
                id="gender"
                value={userDetails.gender}
                onChange={(e) => handleDetailChange('gender', e.target.value)}
                className={`w-full p-2 border rounded-lg ${
                  darkMode
                    ? 'bg-slate-700/50 border-purple-600/30 text-white'
                    : 'bg-white/90 border-pink-200 text-gray-700'
                }`}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Select your sports interests:</p>

        {/* Preferences Checkboxes */}
        <div className="space-y-3 mb-6">
          <div className={`flex items-center space-x-3 p-3 rounded-xl border backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/50 border-purple-600/30'
              : 'bg-pink-50/80 border-pink-200'
          }`}>
            <Checkbox
              id="running"
              checked={preferences.running}
              onCheckedChange={() => handleToggle('running')}
              className={darkMode ? 'bg-slate-600 border-purple-500' : 'bg-white border-pink-300'}
            />
            <Label
              htmlFor="running"
              className={`cursor-pointer flex-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Running & Track
            </Label>
          </div>

          <div className={`flex items-center space-x-3 p-3 rounded-xl border backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/50 border-indigo-600/30'
              : 'bg-sky-50/80 border-sky-200'
          }`}>
            <Checkbox
              id="soccer"
              checked={preferences.soccer}
              onCheckedChange={() => handleToggle('soccer')}
              className={darkMode ? 'bg-slate-600 border-indigo-500' : 'bg-white border-sky-300'}
            />
            <Label
              htmlFor="soccer"
              className={`cursor-pointer flex-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Soccer
            </Label>
          </div>

          <div className={`flex items-center space-x-3 p-3 rounded-xl border backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/50 border-purple-600/30'
              : 'bg-amber-50/80 border-amber-200'
          }`}>
            <Checkbox
              id="basketball"
              checked={preferences.basketball}
              onCheckedChange={() => handleToggle('basketball')}
              className={darkMode ? 'bg-slate-600 border-purple-500' : 'bg-white border-amber-300'}
            />
            <Label
              htmlFor="basketball"
              className={`cursor-pointer flex-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Basketball
            </Label>
          </div>

          <div className={`flex items-center space-x-3 p-3 rounded-xl border backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/50 border-indigo-600/30'
              : 'bg-pink-50/80 border-pink-200'
          }`}>
            <Checkbox
              id="gym"
              checked={preferences.gym}
              onCheckedChange={() => handleToggle('gym')}
              className={darkMode ? 'bg-slate-600 border-indigo-500' : 'bg-white border-pink-300'}
            />
            <Label
              htmlFor="gym"
              className={`cursor-pointer flex-1 text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}
            >
              Gym & Fitness
            </Label>
          </div>
        </div>

        <button
          onClick={handleNext}
          className={`w-full py-3 px-6 text-white rounded-full transition-colors shadow-lg ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-amber-400 to-pink-500 hover:from-amber-500 hover:to-pink-600'
          }`}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
