import { Settings } from 'lucide-react';
import { PageType } from '../App';
import BottomNav from './BottomNav';

interface WelcomePageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function WelcomePage({ onNavigate, darkMode }: WelcomePageProps) {
  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-pink-400 via-sky-300 to-amber-100'
    }`}>
      <div className="p-8 pb-24 flex flex-col items-center justify-center h-full">
        {/* GearMatch Logo */}
        <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center mb-8 backdrop-blur-sm ${
          darkMode
            ? 'bg-slate-700/40 border-purple-600/60'
            : 'bg-white/40 border-white/60'
        }`}>
          <Settings className={`w-16 h-16 ${darkMode ? 'text-purple-400' : 'text-pink-600'}`} />
        </div>

        {/* Title */}
        <h2 className={`text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>GearMatch</h2>

        {/* Description */}
        <p className={`text-center mb-8 px-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Get AI-powered recommendations for the perfect sports equipment based on your needs and preferences
        </p>

        {/* Action Buttons */}
        <div className="w-full space-y-3 px-4">
          <button 
            onClick={() => onNavigate('ai-prompts')}
            className={`w-full py-3 px-6 rounded-full border transition-colors backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/60 text-purple-300 border-purple-600/30 hover:bg-slate-700/80'
                : 'bg-white/60 text-sky-700 border-sky-200 hover:bg-white/80'
            }`}>
            AI-Generated Prompts
          </button>
          
          <button 
            onClick={() => onNavigate('recommendations')}
            className={`w-full py-3 px-6 rounded-full border transition-colors backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/60 text-pink-300 border-pink-600/30 hover:bg-slate-700/80'
                : 'bg-white/60 text-pink-700 border-pink-200 hover:bg-white/80'
            }`}>
            Personalized Recommendations
          </button>
          
          <button 
            onClick={() => onNavigate('input')}
            className={`w-full py-3 px-6 text-white rounded-full transition-colors shadow-lg ${
              darkMode
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-pink-500 hover:bg-pink-600'
            }`}
          >
            Get Started
          </button>
        </div>
      </div>

      <BottomNav currentPage="welcome" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}
