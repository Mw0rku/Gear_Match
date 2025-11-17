import { ArrowLeft, Sparkles, Heart, TrendingUp, MessageSquare } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';

interface RecommendationsPageProps {
  onNavigate: (page: PageType) => void;
  onNavigateToReview: (product: { name: string; category: string; price: string }) => void;
  darkMode: boolean;
}

export default function RecommendationsPage({ onNavigate, onNavigateToReview, darkMode }: RecommendationsPageProps) {
  // Simulating saved items - in a real app, this would come from shared state
  const savedItems = [
    { category: 'Running Shoes', sport: 'Running' },
    { category: 'Soccer Equipment', sport: 'Soccer' },
    { category: 'Gym Equipment', sport: 'Gym' },
    { category: 'Basketball', sport: 'Basketball' },
    { category: 'Fitness', sport: 'Fitness' },
  ];

  // Generate recommendations based on saved items
  const recommendations = [
    { 
      id: 1, 
      name: 'Nike Dri-FIT Running Shirt', 
      category: 'Running Apparel', 
      price: '$34.99',
      reason: 'Based on your Running Shoes',
      match: '95%'
    },
    { 
      id: 2, 
      name: 'Garmin Forerunner 55', 
      category: 'Running Watch', 
      price: '$199.99',
      reason: 'Perfect for tracking your runs',
      match: '92%'
    },
    { 
      id: 3, 
      name: 'Adidas Predator Pro Gloves', 
      category: 'Soccer Accessories', 
      price: '$89.99',
      reason: 'Matches your Soccer Equipment',
      match: '88%'
    },
    { 
      id: 4, 
      name: 'PowerBlock Adjustable Dumbbells', 
      category: 'Gym Equipment', 
      price: '$299.99',
      reason: 'Great addition to your gym setup',
      match: '90%'
    },
    { 
      id: 5, 
      name: 'Spalding Infusion Basketball', 
      category: 'Basketball', 
      price: '$39.99',
      reason: 'Complements your current gear',
      match: '87%'
    },
    { 
      id: 6, 
      name: 'Yoga Mat Premium', 
      category: 'Fitness', 
      price: '$49.99',
      reason: 'Expand your fitness routine',
      match: '85%'
    },
  ];

  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
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
            <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>For You</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Based on your saved items
            </p>
          </div>
        </div>

        {/* AI Insights Banner */}
        <div className={`mb-6 p-4 rounded-2xl border backdrop-blur-sm ${
          darkMode
            ? 'bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border-purple-600/30'
            : 'bg-gradient-to-r from-pink-50/90 to-sky-50/90 border-pink-200'
        }`}>
          <div className={`flex items-center gap-2 mb-2 ${darkMode ? 'text-purple-300' : 'text-pink-600'}`}>
            <Sparkles className="w-5 h-5" />
            <span>AI Insights</span>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We've analyzed your 5 saved items and found {recommendations.length} perfect matches across Running, Soccer, Gym, Basketball, and Fitness
          </p>
        </div>

        {/* Recommendations List */}
        <div className="space-y-3">
          {recommendations.map((item, index) => {
            const bgColors = darkMode ? [
              'bg-slate-700/50 border-purple-600/30',
              'bg-slate-700/50 border-indigo-600/30',
              'bg-slate-700/50 border-pink-600/30',
              'bg-slate-700/50 border-purple-600/30',
              'bg-slate-700/50 border-indigo-600/30',
              'bg-slate-700/50 border-pink-600/30',
            ] : [
              'bg-pink-50/90 border-pink-100',
              'bg-sky-50/90 border-sky-100',
              'bg-amber-50/90 border-amber-100',
              'bg-pink-50/90 border-pink-100',
              'bg-sky-50/90 border-sky-100',
              'bg-amber-50/90 border-amber-100',
            ];
            const matchColors = darkMode ? [
              'bg-purple-900/60 text-purple-300',
              'bg-indigo-900/60 text-indigo-300',
              'bg-pink-900/60 text-pink-300',
              'bg-purple-900/60 text-purple-300',
              'bg-indigo-900/60 text-indigo-300',
              'bg-pink-900/60 text-pink-300',
            ] : [
              'bg-pink-100 text-pink-700',
              'bg-sky-100 text-sky-700',
              'bg-amber-100 text-amber-700',
              'bg-pink-100 text-pink-700',
              'bg-sky-100 text-sky-700',
              'bg-amber-100 text-amber-700',
            ];
            const priceColors = darkMode ? [
              'text-purple-400',
              'text-indigo-400',
              'text-pink-400',
              'text-purple-400',
              'text-indigo-400',
              'text-pink-400',
            ] : [
              'text-pink-600',
              'text-sky-600',
              'text-amber-600',
              'text-pink-600',
              'text-sky-600',
              'text-amber-600',
            ];
            const hoverColors = darkMode ? 'hover:bg-slate-600/60' : 'hover:bg-white/90';
            const isLiked = likedItems.includes(item.id);
            
            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl transition-colors border backdrop-blur-sm ${bgColors[index]} ${hoverColors}`}
              >
                {/* Match Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs ${matchColors[index]}`}>
                    <TrendingUp className="w-3 h-3" />
                    {item.match} Match
                  </div>
                  <button 
                    onClick={() => toggleLike(item.id)}
                    className={`transition-colors ${
                      isLiked
                        ? darkMode ? 'text-purple-400' : 'text-pink-500'
                        : darkMode ? 'text-gray-500 hover:text-purple-400' : 'text-gray-400 hover:text-pink-500'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Item Details */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className={`mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.name}</h4>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.category}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      {item.reason}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <span className={priceColors[index]}>{item.price}</span>
                  </div>
                </div>

                {/* Review Button */}
                <button
                  onClick={() => onNavigateToReview({
                    name: item.name,
                    category: item.category,
                    price: item.price
                  })}
                  className={`w-full py-2 px-4 rounded-xl border transition-colors flex items-center justify-center gap-2 text-sm ${
                    darkMode
                      ? 'bg-slate-600/50 border-purple-600/30 text-purple-300 hover:bg-slate-600/70'
                      : 'bg-white/70 border-pink-200 text-pink-600 hover:bg-white/90'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Write Review
                </button>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <button 
          onClick={() => onNavigate('results')}
          className={`w-full mt-6 py-3 px-6 text-white rounded-full transition-colors shadow-lg ${
            darkMode
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
              : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
          }`}
        >
          Explore All Equipment
        </button>
      </div>
    </div>
  );
}
