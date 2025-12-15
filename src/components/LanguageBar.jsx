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
        .replace(/^\/quranscopycreatedcontents/, '') // Remove basePath
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
      .replace(/^\/quranscopycreatedcontents\//, '') // Remove basePath with slash
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
        <div className="translation-warning">
          ⚠️ This page is not yet translated to your selected language. Showing English version.
        </div>
      )}
      <div className="language-bar">
        <span>Choose Language:</span>
        {LANGUAGES.map(lang => {
          const isAvailable = pageConfig.availableLanguages.includes(lang.code);
          const isActive = currentLang === lang.code;
          
          return (
            <button
              key={lang.code}
              className={`${isActive ? 'active' : ''} ${!isAvailable ? 'disabled' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
              disabled={!isAvailable}
              title={!isAvailable ? `Not available in ${lang.name}` : ''}
            >
              {lang.nativeName}
            </button>
          );
        })}
      </div>
    </>
  );
}
