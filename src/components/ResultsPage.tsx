import { Sparkles, RotateCcw } from 'lucide-react';
import { PageType } from '../App';
import BottomNav from './BottomNav';

interface ResultsPageProps {
  onNavigate: (page: PageType) => void;
}

export default function ResultsPage({ onNavigate }: ResultsPageProps) {
  return (
    <div className="w-full max-w-sm bg-gradient-to-br from-sky-200 via-pink-200 to-amber-100 rounded-3xl shadow-2xl overflow-hidden relative h-[650px]">
      <div className="p-6 pb-24 overflow-y-auto h-full scrollbar-hide">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-800">
            <Sparkles className="w-5 h-5 text-sky-600" />
            <h2 className="text-gray-800">Recommendations</h2>
          </div>
          <button className="text-gray-700 hover:text-pink-600 transition-colors">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        <div className="text-gray-600 text-sm mb-1">AI-powered results</div>

        {/* Description */}
        <div className="mb-6 p-4 bg-white/70 rounded-2xl border border-sky-200 backdrop-blur-sm">
          <p className="text-gray-700 text-sm">
            Based on your needs as a beginner athlete, I recommend focusing on quality foundational equipment that provides proper support and durability. Here are my top suggestions:
          </p>
        </div>

        {/* Recommended Products Section */}
        <h3 className="text-gray-800 mb-4">Recommended Products</h3>

        {/* Product 1 */}
        <div className="mb-4 p-4 bg-white/95 rounded-2xl border border-pink-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-pink-700 flex-1">Nike Air Zoom Pegasus 40</h4>
            <span className="text-pink-600">$139.99</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            Versatile running shoe with responsive cushioning, perfect for training and daily runs.
          </p>
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-sky-100 text-pink-700 rounded-full text-sm border border-pink-200">
            Running Shoes
          </span>
        </div>

        {/* Product 2 */}
        <div className="mb-4 p-4 bg-white/95 rounded-2xl border border-sky-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sky-700 flex-1">Adidas Tiro League Training Ball</h4>
            <span className="text-sky-600">$24.99</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            FIFA-quality soccer ball designed for consistent performance and durability.
          </p>
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-sky-100 to-amber-100 text-sky-700 rounded-full text-sm border border-sky-200">
            Soccer Equipment
          </span>
        </div>
      </div>

      <BottomNav currentPage="results" onNavigate={onNavigate} variant="results" />
    </div>
  );
}
