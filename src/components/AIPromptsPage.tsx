import { ArrowLeft, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';

interface AIPromptsPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function AIPromptsPage({ onNavigate, darkMode }: AIPromptsPageProps) {
  // Simulating saved items analysis - in a real app, this would come from shared state
  const savedItems = [
    { category: 'Running Shoes', sport: 'Running' },
    { category: 'Soccer Equipment', sport: 'Soccer' },
    { category: 'Gym Equipment', sport: 'Gym' },
    { category: 'Basketball', sport: 'Basketball' },
    { category: 'Fitness', sport: 'Fitness' },
  ];

  // AI-generated prompts based on saved items
  const promptCategories = [
    {
      title: 'Complete Your Running Setup',
      icon: '🏃',
      prompts: [
        'I need moisture-wicking running apparel for marathon training',
        'Looking for a GPS running watch to track my distance and pace',
        'Need compression socks for post-run recovery',
        'Find me a running hydration pack for long distance runs',
      ]
    },
    {
      title: 'Enhance Your Soccer Game',
      icon: '⚽',
      prompts: [
        'I want goalkeeper gloves with excellent grip for wet conditions',
        'Looking for soccer cleats for artificial turf fields',
        'Need shin guards that offer maximum protection',
        'Find me a soccer training agility ladder',
      ]
    },
    {
      title: 'Build Your Home Gym',
      icon: '💪',
      prompts: [
        'I need adjustable dumbbells to save space in my home gym',
        'Looking for a quality resistance band set for strength training',
        'Need a workout bench that supports multiple exercises',
        'Find me a pull-up bar that mounts on doorways',
      ]
    },
    {
      title: 'Level Up Your Basketball Skills',
      icon: '🏀',
      prompts: [
        'I want basketball shoes with excellent ankle support',
        'Looking for a portable basketball hoop for driveway practice',
        'Need a ball pump and pressure gauge for proper inflation',
        'Find me basketball training cones for dribbling drills',
      ]
    },
    {
      title: 'Expand Your Fitness Routine',
      icon: '🧘',
      prompts: [
        'I need a premium yoga mat with extra cushioning',
        'Looking for foam rollers for muscle recovery',
        'Need resistance loops for lower body workouts',
        'Find me a fitness tracker to monitor my daily activity',
      ]
    },
  ];

  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const handlePromptClick = (prompt: string) => {
    setSelectedPrompt(prompt);
    // In a real app, this would navigate to results with the prompt pre-filled
    setTimeout(() => {
      onNavigate('input');
    }, 500);
  };

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-pink-200 via-sky-200 to-amber-100'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center mb-6">
          <button onClick={() => onNavigate('welcome')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-pink-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>AI Prompts</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Smart search suggestions
            </p>
          </div>
        </div>

        {/* AI Analysis Banner */}
        <div className={`mb-6 p-4 rounded-2xl border backdrop-blur-sm ${
          darkMode
            ? 'bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border-purple-600/30'
            : 'bg-gradient-to-r from-sky-50/90 to-pink-50/90 border-sky-200'
        }`}>
          <div className={`flex items-center gap-2 mb-2 ${darkMode ? 'text-purple-300' : 'text-sky-600'}`}>
            <Zap className="w-5 h-5" />
            <span>AI Analysis Complete</span>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Based on your {savedItems.length} saved items, we've generated {promptCategories.reduce((acc, cat) => acc + cat.prompts.length, 0)} personalized search prompts across {promptCategories.length} categories
          </p>
        </div>

        {/* Prompt Categories */}
        <div className="space-y-4">
          {promptCategories.map((category, categoryIndex) => {
            const categoryBgColors = darkMode ? [
              'bg-slate-700/40 border-purple-600/20',
              'bg-slate-700/40 border-indigo-600/20',
              'bg-slate-700/40 border-pink-600/20',
              'bg-slate-700/40 border-purple-600/20',
              'bg-slate-700/40 border-indigo-600/20',
            ] : [
              'bg-pink-50/60 border-pink-100',
              'bg-sky-50/60 border-sky-100',
              'bg-amber-50/60 border-amber-100',
              'bg-pink-50/60 border-pink-100',
              'bg-sky-50/60 border-sky-100',
            ];

            const headerColors = darkMode ? [
              'text-purple-300',
              'text-indigo-300',
              'text-pink-300',
              'text-purple-300',
              'text-indigo-300',
            ] : [
              'text-pink-700',
              'text-sky-700',
              'text-amber-700',
              'text-pink-700',
              'text-sky-700',
            ];

            return (
              <div key={categoryIndex} className={`p-4 rounded-2xl border backdrop-blur-sm ${categoryBgColors[categoryIndex]}`}>
                <div className={`flex items-center gap-2 mb-3 ${headerColors[categoryIndex]}`}>
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-sm">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.prompts.map((prompt, promptIndex) => {
                    const promptBgColors = darkMode ? [
                      'bg-slate-700/60 hover:bg-slate-600/70 border-purple-600/30',
                      'bg-slate-700/60 hover:bg-slate-600/70 border-indigo-600/30',
                      'bg-slate-700/60 hover:bg-slate-600/70 border-pink-600/30',
                      'bg-slate-700/60 hover:bg-slate-600/70 border-purple-600/30',
                      'bg-slate-700/60 hover:bg-slate-600/70 border-indigo-600/30',
                    ] : [
                      'bg-white/70 hover:bg-white/90 border-pink-100',
                      'bg-white/70 hover:bg-white/90 border-sky-100',
                      'bg-white/70 hover:bg-white/90 border-amber-100',
                      'bg-white/70 hover:bg-white/90 border-pink-100',
                      'bg-white/70 hover:bg-white/90 border-sky-100',
                    ];

                    const iconColors = darkMode ? [
                      'text-purple-400',
                      'text-indigo-400',
                      'text-pink-400',
                      'text-purple-400',
                      'text-indigo-400',
                    ] : [
                      'text-pink-500',
                      'text-sky-500',
                      'text-amber-500',
                      'text-pink-500',
                      'text-sky-500',
                    ];

                    const isSelected = selectedPrompt === prompt;

                    return (
                      <button
                        key={promptIndex}
                        onClick={() => handlePromptClick(prompt)}
                        className={`w-full p-3 rounded-xl border backdrop-blur-sm flex items-center justify-between transition-all ${
                          promptBgColors[categoryIndex]
                        } ${isSelected ? 'ring-2 ring-offset-2 ' + (darkMode ? 'ring-purple-500 ring-offset-slate-800' : 'ring-pink-500 ring-offset-white') : ''}`}
                      >
                        <div className="flex items-start gap-3 flex-1 text-left">
                          <Sparkles className={`w-4 h-4 flex-shrink-0 mt-0.5 ${iconColors[categoryIndex]}`} />
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {prompt}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 flex-shrink-0 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Search Button */}
        <button 
          onClick={() => onNavigate('input')}
          className={`w-full mt-6 py-3 px-6 text-white rounded-full transition-colors shadow-lg ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
          }`}
        >
          Create Custom Search
        </button>
      </div>
    </div>
  );
}
