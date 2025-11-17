import { ArrowLeft } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

interface SettingsPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function SettingsPage({ onNavigate, darkMode, setDarkMode }: SettingsPageProps) {
  const [settings, setSettings] = useState({
    notifications: true,
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };
  
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-sky-200 via-pink-200 to-amber-100'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={() => onNavigate('menu')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-sky-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Settings</h2>
        </div>

        {/* Settings Options */}
        <div className="space-y-4">
          {/* Dark Mode */}
          <div className={`flex items-center justify-between p-4 rounded-2xl border backdrop-blur-sm ${
            darkMode 
              ? 'bg-slate-700/50 border-purple-600/30' 
              : 'bg-sky-50/80 border-sky-200'
          }`}>
            <div className="flex items-center gap-3 flex-1">
              <svg className={`w-5 h-5 ${darkMode ? 'text-purple-400' : 'text-sky-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <Label htmlFor="darkMode" className={`cursor-pointer ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Dark Mode
              </Label>
            </div>
            <Switch
              id="darkMode"
              checked={darkMode}
              onCheckedChange={handleDarkModeToggle}
            />
          </div>

          {/* Notifications */}
          <div className={`flex items-center justify-between p-4 rounded-2xl border backdrop-blur-sm ${
            darkMode 
              ? 'bg-slate-700/50 border-pink-600/30' 
              : 'bg-pink-50/80 border-pink-200'
          }`}>
            <div className="flex items-center gap-3 flex-1">
              <svg className={`w-5 h-5 ${darkMode ? 'text-pink-400' : 'text-pink-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <Label htmlFor="notifications" className={`cursor-pointer ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Notifications
              </Label>
            </div>
            <Switch
              id="notifications"
              checked={settings.notifications}
              onCheckedChange={() => handleToggle('notifications')}
            />
          </div>

          {/* Notification Options */}
          {settings.notifications && (
            <div className={`ml-4 space-y-3 pl-4 border-l-2 ${darkMode ? 'border-pink-600/30' : 'border-pink-200'}`}>
              <div className={`flex items-center justify-between p-3 rounded-xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-slate-700/40 border-amber-600/30' 
                  : 'bg-amber-50/70 border-amber-200'
              }`}>
                <Label htmlFor="emailNotifications" className={`cursor-pointer text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Email Notifications
                </Label>
                <Switch
                  id="emailNotifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleToggle('emailNotifications')}
                />
              </div>

              <div className={`flex items-center justify-between p-3 rounded-xl border backdrop-blur-sm ${
                darkMode 
                  ? 'bg-slate-700/40 border-sky-600/30' 
                  : 'bg-sky-50/70 border-sky-200'
              }`}>
                <Label htmlFor="pushNotifications" className={`cursor-pointer text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Push Notifications
                </Label>
                <Switch
                  id="pushNotifications"
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleToggle('pushNotifications')}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
