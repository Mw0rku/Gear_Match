import { ArrowLeft, Heart } from 'lucide-react';
import { PageType } from '../App';

interface SavedPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
}

export default function SavedPage({ onNavigate, darkMode }: SavedPageProps) {
  const savedItems = [
    { id: 1, name: 'Nike Air Zoom Pegasus 40', category: 'Running Shoes', price: '$139.99' },
    { id: 2, name: 'Adidas Tiro League Training Ball', category: 'Soccer Equipment', price: '$24.99' },
    { id: 3, name: 'Under Armour Training Gloves', category: 'Gym Equipment', price: '$29.99' },
    { id: 4, name: 'Wilson Evolution Basketball', category: 'Basketball', price: '$64.99' },
    { id: 5, name: 'TRX Suspension Trainer Kit', category: 'Fitness', price: '$179.99' },
  ];

  return (
    <div className={`w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden relative h-[650px] ${
      darkMode
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900'
        : 'bg-gradient-to-br from-pink-200 via-sky-200 to-amber-100'
    }`}>
      <div className="p-6 pb-8 overflow-y-auto h-full">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button onClick={() => onNavigate('menu')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-pink-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Saved Items</h2>
        </div>

        {/* Saved Items List */}
        <div className="space-y-3">
          {savedItems.map((item, index) => {
            const bgColors = darkMode ? [
              'bg-slate-700/50 border-purple-600/30',
              'bg-slate-700/50 border-indigo-600/30',
              'bg-slate-700/50 border-purple-600/30',
              'bg-slate-700/50 border-indigo-600/30',
              'bg-slate-700/50 border-purple-600/30',
            ] : [
              'bg-pink-50/90 border-pink-100',
              'bg-sky-50/90 border-sky-100',
              'bg-amber-50/90 border-amber-100',
              'bg-pink-50/90 border-pink-100',
              'bg-sky-50/90 border-sky-100',
            ];
            const iconColors = darkMode ? [
              'bg-purple-900/60 text-purple-300',
              'bg-indigo-900/60 text-indigo-300',
              'bg-purple-900/60 text-purple-300',
              'bg-indigo-900/60 text-indigo-300',
              'bg-purple-900/60 text-purple-300',
            ] : [
              'bg-pink-100 text-pink-700',
              'bg-sky-100 text-sky-700',
              'bg-amber-100 text-amber-700',
              'bg-pink-100 text-pink-700',
              'bg-sky-100 text-sky-700',
            ];
            const priceColors = darkMode ? [
              'text-purple-400',
              'text-indigo-400',
              'text-purple-400',
              'text-indigo-400',
              'text-purple-400',
            ] : [
              'text-pink-600',
              'text-sky-600',
              'text-amber-600',
              'text-pink-600',
              'text-sky-600',
            ];
            const hoverColors = darkMode ? 'hover:bg-slate-600/60' : 'hover:bg-white/90';
            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl flex items-center justify-between transition-colors border backdrop-blur-sm ${bgColors[index]} ${hoverColors}`}
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${iconColors[index]}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className={`mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.name}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.category}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={priceColors[index]}>{item.price}</span>
                  <button className={`transition-colors ${
                    darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-pink-500 hover:text-pink-700'
                  }`}>
                    <Heart className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
