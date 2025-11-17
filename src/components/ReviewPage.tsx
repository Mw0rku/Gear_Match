import { ArrowLeft, Star, Send } from 'lucide-react';
import { PageType } from '../App';
import { useState } from 'react';

interface ReviewPageProps {
  onNavigate: (page: PageType) => void;
  darkMode: boolean;
  productName?: string;
  productCategory?: string;
  productPrice?: string;
}

export default function ReviewPage({ 
  onNavigate, 
  darkMode,
  productName = 'Product',
  productCategory = 'Category',
  productPrice = '$0.00'
}: ReviewPageProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating > 0 && reviewText) {
      setSubmitted(true);
      setTimeout(() => {
        onNavigate('recommendations');
      }, 2000);
    }
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
          <button onClick={() => onNavigate('recommendations')} className={`mr-4 transition-colors ${
            darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-700 hover:text-pink-600'
          }`}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className={darkMode ? 'text-white' : 'text-gray-800'}>Write a Review</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Share your experience
            </p>
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Product Info Card */}
            <div className={`mb-6 p-4 rounded-2xl border backdrop-blur-sm ${
              darkMode
                ? 'bg-slate-700/50 border-purple-600/30'
                : 'bg-white/70 border-pink-200'
            }`}>
              <h3 className={`mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{productName}</h3>
              <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{productCategory}</p>
              <p className={`${darkMode ? 'text-purple-400' : 'text-pink-600'}`}>{productPrice}</p>
            </div>

            {/* Rating Section */}
            <div className="mb-6">
              <label className={`mb-3 block ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Your Rating
              </label>
              <div className="flex gap-2 justify-center py-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoveredRating || rating)
                          ? darkMode
                            ? 'fill-purple-400 text-purple-400'
                            : 'fill-pink-500 text-pink-500'
                          : darkMode
                            ? 'text-gray-600'
                            : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {rating === 0 ? 'Tap to rate' : 
                 rating === 1 ? 'Poor' :
                 rating === 2 ? 'Fair' :
                 rating === 3 ? 'Good' :
                 rating === 4 ? 'Very Good' :
                 'Excellent'}
              </p>
            </div>

            {/* Review Text */}
            <div className="mb-6">
              <label className={`mb-2 block ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Your Review
              </label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Tell us about your experience with this product..."
                className={`w-full p-4 rounded-2xl min-h-[120px] resize-none border ${
                  darkMode
                    ? 'bg-slate-700/50 text-gray-200 placeholder:text-gray-500 border-purple-600/30'
                    : 'bg-white/90 text-gray-700 placeholder:text-gray-400 border-gray-200'
                }`}
              />
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={!rating || !reviewText}
              className={`w-full py-3 px-6 text-white rounded-full transition-all shadow-lg flex items-center justify-center gap-2 ${
                !rating || !reviewText
                  ? darkMode
                    ? 'bg-slate-600 cursor-not-allowed opacity-50'
                    : 'bg-gray-400 cursor-not-allowed opacity-50'
                  : darkMode
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
                    : 'bg-gradient-to-r from-pink-500 to-sky-500 hover:from-pink-600 hover:to-sky-600'
              }`}
            >
              <Send className="w-5 h-5" />
              Submit Review
            </button>
          </>
        ) : (
          /* Success Message */
          <div className="flex flex-col items-center justify-center h-full -mt-24">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
              darkMode
                ? 'bg-purple-900/60 text-purple-300'
                : 'bg-pink-100 text-pink-600'
            }`}>
              <Star className="w-12 h-12 fill-current" />
            </div>
            <h2 className={`mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Thank You!
            </h2>
            <p className={`text-center px-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Your review has been submitted successfully
            </p>
            <div className="mt-8">
              <div className={`animate-pulse flex gap-1 ${darkMode ? 'text-purple-400' : 'text-pink-500'}`}>
                <div className="w-2 h-2 rounded-full bg-current"></div>
                <div className="w-2 h-2 rounded-full bg-current animation-delay-200"></div>
                <div className="w-2 h-2 rounded-full bg-current animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
