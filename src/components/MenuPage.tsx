import { User, Heart, LogOut, SlidersHorizontal, Settings } from 'lucide-react';
import { PageType } from '../App';
import BottomNav from './BottomNav';

interface MenuPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function MenuPage({ onNavigate, darkMode }: MenuPageProps) {
  const menuItems = [
    { icon: User, label: 'Personal Info', page: 'personal' as PageType },
    { icon: Heart, label: 'Saved', page: 'saved' as PageType },
    { icon: SlidersHorizontal, label: 'Preferences', page: 'preferences' as PageType },
    { icon: Settings, label: 'Settings', page: 'settings' as PageType },
  ];

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-pink-300 via-amber-100 to-sky-200'
    }`}>
      <div className="p-6 pb-24 flex flex-col h-full">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center mb-8 mt-8">
          <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4 backdrop-blur-sm ${
            darkMode
              ? 'bg-slate-700/60 border-purple-600/80'
              : 'bg-white/60 border-white/80'
          }`}>
            <User className={`w-12 h-12 ${darkMode ? 'text-purple-400' : 'text-pink-600'}`} />
          </div>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Profile Menu</h2>
        </div>

        {/* Menu Items */}
        <div className="space-y-3 flex-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const lightColors = [
              'bg-pink-50/80 border-pink-200 hover:bg-pink-100/80 text-pink-700',
              'bg-sky-50/80 border-sky-200 hover:bg-sky-100/80 text-sky-700',
              'bg-amber-50/80 border-amber-200 hover:bg-amber-100/80 text-amber-700',
              'bg-pink-50/80 border-pink-200 hover:bg-pink-100/80 text-pink-700',
            ];
            const darkColors = [
              'bg-slate-700/50 border-pink-600/30 hover:bg-slate-700/70 text-pink-300',
              'bg-slate-700/50 border-purple-600/30 hover:bg-slate-700/70 text-purple-300',
              'bg-slate-700/50 border-amber-600/30 hover:bg-slate-700/70 text-amber-300',
              'bg-slate-700/50 border-indigo-600/30 hover:bg-slate-700/70 text-indigo-300',
            ];
            const colors = darkMode ? darkColors[index] : lightColors[index];
            return (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`w-full p-4 rounded-2xl border flex items-center gap-4 transition-colors backdrop-blur-sm ${colors}`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <button 
            onClick={() => onNavigate('login')}
            className={`w-full p-4 rounded-2xl border flex items-center gap-4 transition-colors backdrop-blur-sm ${
              darkMode
                ? 'bg-red-900/50 border-red-600/30 hover:bg-red-900/70 text-red-300'
                : 'bg-red-50/80 border-red-200 hover:bg-red-100/80 text-red-700'
            }`}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <BottomNav currentPage="menu" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}
