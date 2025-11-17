import { Home, Search, User, Heart } from 'lucide-react';
import { PageType } from '../App';

interface BottomNavProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  variant?: 'default' | 'results';
  darkMode?: boolean;
}

export default function BottomNav({ currentPage, onNavigate, variant = 'default', darkMode = false }: BottomNavProps) {
  const navItems = variant === 'results' 
    ? [
        { icon: Home, label: 'Home', page: 'welcome' as PageType },
        { icon: Heart, label: 'Results', page: 'results' as PageType },
        { icon: Heart, label: 'Saved', page: 'saved' as PageType },
        { icon: User, label: 'Profile', page: 'menu' as PageType },
      ]
    : [
        { icon: Home, label: 'Home', page: 'welcome' as PageType },
        { icon: Search, label: 'Search', page: 'input' as PageType },
        { icon: Heart, label: 'Saved', page: 'saved' as PageType },
        { icon: User, label: 'Profile', page: 'menu' as PageType },
      ];

  return (
    <div className={`absolute bottom-0 left-0 right-0 backdrop-blur-sm border-t px-6 py-3 ${
      darkMode 
        ? 'bg-slate-800/80 border-purple-600/30' 
        : 'bg-white/80 border-pink-200'
    }`}>
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <Icon className={`w-5 h-5 ${
                darkMode
                  ? isActive ? 'text-purple-400' : 'text-gray-400'
                  : isActive ? 'text-pink-600' : 'text-sky-600'
              }`} />
              <span className={`text-xs ${
                darkMode
                  ? isActive ? 'text-purple-400' : 'text-gray-400'
                  : isActive ? 'text-pink-600' : 'text-gray-600'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
