import { ArrowLeft } from 'lucide-react';
import { PageType } from '../App';
import { Label } from './ui/label';

interface PersonalInfoPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function PersonalInfoPage({ onNavigate, darkMode }: PersonalInfoPageProps) {
  const userInfo = {
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567',
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-sky-200 via-amber-100 to-pink-200'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={() => onNavigate('menu')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-sky-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Personal Info</h2>
        </div>

        {/* Display Only Fields */}
        <div className="space-y-5">
          <div>
            <Label className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email</Label>
            <div className={`p-4 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/50 border border-purple-600/30 text-gray-200'
                : 'bg-white/60 border border-sky-200 text-gray-700'
            }`}>
              {userInfo.email}
            </div>
          </div>

          <div>
            <Label className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>First Name</Label>
            <div className={`p-4 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/50 border border-purple-600/30 text-gray-200'
                : 'bg-white/60 border border-amber-200 text-gray-700'
            }`}>
              {userInfo.firstName}
            </div>
          </div>

          <div>
            <Label className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Last Name</Label>
            <div className={`p-4 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/50 border border-purple-600/30 text-gray-200'
                : 'bg-white/60 border border-pink-200 text-gray-700'
            }`}>
              {userInfo.lastName}
            </div>
          </div>

          <div>
            <Label className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Phone Number</Label>
            <div className={`p-4 rounded-2xl backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/50 border border-purple-600/30 text-gray-200'
                : 'bg-white/60 border border-sky-200 text-gray-700'
            }`}>
              {userInfo.phone}
            </div>
          </div>

          <button className={`w-full py-3 px-6 text-white rounded-full transition-colors shadow-lg mt-4 ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-sky-500 to-pink-500 hover:from-sky-600 hover:to-pink-600'
          }`}>
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
