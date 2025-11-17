import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import MainInputPage from './components/MainInputPage';
import ResultsPage from './components/ResultsPage';
import MenuPage from './components/MenuPage';
import PersonalInfoPage from './components/PersonalInfoPage';
import AccountSetupPage from './components/AccountSetupPage';
import SavedPage from './components/SavedPage';
import PreferencesPage from './components/PreferencesPage';
import SettingsPage from './components/SettingsPage';
import LoginPage from './components/LoginPage';
import RecommendationsPage from './components/RecommendationsPage';
import AIPromptsPage from './components/AIPromptsPage';
import ReviewPage from './components/ReviewPage';

export type PageType = 'welcome' | 'input' | 'results' | 'menu' | 'personal' | 'account' | 'saved' | 'preferences' | 'settings' | 'login' | 'recommendations' | 'ai-prompts' | 'review';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('login');
  const [darkMode, setDarkMode] = useState(false);
  const [reviewProduct, setReviewProduct] = useState<{
    name: string;
    category: string;
    price: string;
  } | null>(null);

  const handleNavigateToReview = (product: { name: string; category: string; price: string }) => {
    setReviewProduct(product);
    setCurrentPage('review');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'input':
        return <MainInputPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'results':
        return <ResultsPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'menu':
        return <MenuPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'personal':
        return <PersonalInfoPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'account':
        return <AccountSetupPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'saved':
        return <SavedPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'preferences':
        return <PreferencesPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'settings':
        return <SettingsPage onNavigate={setCurrentPage} darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'recommendations':
        return <RecommendationsPage onNavigate={setCurrentPage} onNavigateToReview={handleNavigateToReview} darkMode={darkMode} />;
      case 'ai-prompts':
        return <AIPromptsPage onNavigate={setCurrentPage} darkMode={darkMode} />;
      case 'review':
        return <ReviewPage 
          onNavigate={setCurrentPage} 
          darkMode={darkMode}
          productName={reviewProduct?.name}
          productCategory={reviewProduct?.category}
          productPrice={reviewProduct?.price}
        />;
      default:
        return <LoginPage onNavigate={setCurrentPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-sky-300 via-pink-300 to-amber-200'
    }`}>
      {renderPage()}
    </div>
  );
}
