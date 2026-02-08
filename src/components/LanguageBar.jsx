import { useRouter } from 'next/router';
import { LANGUAGES, getPageConfig } from '../config/pages';
import { useState, useEffect } from 'react';

export default function LanguageBar() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState('en');
  const [showWarning, setShowWarning] = useState(false);
  const [pageConfig, setPageConfig] = useState({ availableLanguages: ['en'] });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router.pathname) {
      // Extract language from slug (e.g., /page-ml -> ml, /page -> en)
      const slug = router.asPath
        .split('?')[0]
        .replace(/^\//, '') // Remove leading slash
        .replace(/\/+$/, ''); // Remove trailing slashes
      const langMatch = slug.match(/-(en|hi|de|fr|ta|pl|ml|ar)$/);
      const urlLang = langMatch ? langMatch[1] : 'en';
      
      setPageConfig(getPageConfig(router.pathname));
      setCurrentLang(urlLang);
    }
  }, [router.pathname, router.asPath, isMounted]);

  if (!isMounted) {
    return null; // Don't render on server side
  }

  const handleLanguageChange = (langCode) => {
    // Check if language is available for current page
    if (!pageConfig.availableLanguages.includes(langCode)) {
      return; // Don't switch if not available
    }
    
    // Extract page slug from current path
    let cleanPath = router.asPath
      .split('?')[0] // Remove query params
      .replace(/^\//, '') // Remove any leading slash
      .replace(/\/+$/, '') // Remove all trailing slashes
      .trim(); // Remove any whitespace
    
    // Remove existing language suffix if present (e.g., "page-ml" -> "page")
    cleanPath = cleanPath.replace(/-(en|hi|de|fr|ta|pl|ml|ar)$/, '');
    
    // Build the new path
    let newPath;
    if (cleanPath === '' || cleanPath === 'home') {
      // Home page
      newPath = langCode === 'en' ? '/' : `/home-${langCode}`;
    } else {
      // Other pages
      newPath = langCode === 'en' ? `/${cleanPath}` : `/${cleanPath}-${langCode}`;
    }
    
    // Navigate to the new slug
    router.push(newPath);
    
    // Update local state
    setCurrentLang(langCode);
  };

  return (
    <>
      {showWarning && (
        <div className="bg-yellow-50 border-b-2 border-yellow-400 px-4 py-3">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-medium text-yellow-800">
              ⚠️ This page is not yet translated to your selected language. Showing English version.
            </p>
          </div>
        </div>
      )}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Choose Language:</span>
            {LANGUAGES.map(lang => {
              const isAvailable = pageConfig.availableLanguages.includes(lang.code);
              const isActive = currentLang === lang.code;
              
              return (
                <button
                  key={lang.code}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-md hover:bg-blue-700' 
                      : isAvailable
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed opacity-50'
                    }
                    ${isAvailable && !isActive ? 'hover:shadow-sm' : ''}
                  `}
                  onClick={() => handleLanguageChange(lang.code)}
                  disabled={!isAvailable}
                  title={!isAvailable ? `Not available in ${lang.name}` : ''}
                >
                  {lang.nativeName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
