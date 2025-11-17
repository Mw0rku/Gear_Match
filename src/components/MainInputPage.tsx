import { Sparkles, User, ChevronDown } from 'lucide-react';
import { PageType } from '../App';
import BottomNav from './BottomNav';
import { useState } from 'react';

interface MainInputPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function MainInputPage({ onNavigate, darkMode }: MainInputPageProps) {
  const [description, setDescription] = useState('');

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-sky-200 via-pink-200 to-amber-100'
    }`}>
      <div className="p-6 pb-24 overflow-y-auto h-full scrollbar-hide">
        {/* AI Assistant Section */}
        <div className={`mb-4 p-4 rounded-2xl border backdrop-blur-sm ${
          darkMode
            ? 'bg-slate-700/70 border-purple-600/30'
            : 'bg-white/70 border-sky-200'
        }`}>
          <div className={`flex items-center gap-2 mb-1 ${darkMode ? 'text-purple-300' : 'text-sky-700'}`}>
            <Sparkles className="w-4 h-4" />
            <span>AI Assistant</span>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Tell us what you need</p>
        </div>

        {/* Your Profile Section */}
        <div className={`mb-4 p-4 rounded-2xl border backdrop-blur-sm flex items-center gap-3 ${
          darkMode
            ? 'bg-slate-700/60 border-amber-600/30'
            : 'bg-amber-50/80 border-amber-200'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
            darkMode
              ? 'bg-pink-900/50 border-pink-600/30'
              : 'bg-pink-100 border-pink-200'
          }`}>
            <User className={`w-5 h-5 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`} />
          </div>
          <div>
            <div className={darkMode ? 'text-gray-200' : 'text-gray-800'}>Your Profile</div>
            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Athlete - Beginner</div>
          </div>
        </div>

        {/* Describe Your Needs */}
        <div className="mb-4">
          <label className={`mb-2 flex items-center gap-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            <Search className="w-4 h-4" />
            Describe Your Needs
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., I'm a beginner looking for running shoes for daily training..."
            className={`w-full p-4 rounded-2xl min-h-[100px] resize-none border ${
              darkMode
                ? 'bg-slate-700/50 text-gray-200 placeholder:text-gray-500 border-purple-600/30'
                : 'bg-white/90 text-gray-700 placeholder:text-gray-400 border-gray-200'
            }`}
          />
        </div>

        <div className={`text-center text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>or</div>

        {/* Choose a Prompt */}
        <div className="mb-4">
          <label className={`mb-2 flex items-center gap-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            <ChevronDown className="w-4 h-4" />
            Choose a Prompt
          </label>
          <select className={`w-full p-4 rounded-2xl appearance-none border ${
            darkMode
              ? 'bg-slate-700/50 text-gray-200 border-purple-600/30'
              : 'bg-white/90 text-gray-700 border-gray-200'
          }`}>
            <option>Select a question...</option>
            <option>I'm training for a marathon</option>
            <option>I need soccer equipment</option>
            <option>Looking for beginner gym equipment</option>
            <option>Basketball gear for outdoor play</option>
          </select>
        </div>

        {/* Get Recommendations Button */}
        <button 
          onClick={() => onNavigate('results')}
          className={`w-full py-3 px-6 text-white rounded-full transition-colors shadow-lg ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
          }`}
        >
          Get Recommendations
        </button>
      </div>

      <BottomNav currentPage="input" onNavigate={onNavigate} darkMode={darkMode} />
    </div>
  );
}

function Search({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}
