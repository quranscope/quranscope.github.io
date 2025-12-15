import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPageConfig } from '../config/pages';

export const useLanguage = () => {
  const router = useRouter();
  
  // Initialize language from URL query parameter
  const getInitialLang = () => {
    return router.query.lang || 'en';
  };
  
  const [currentLang, setCurrentLang] = useState(getInitialLang());
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  
  // Update language when URL changes
  useEffect(() => {
    const urlLang = router.query.lang || 'en';
    if (urlLang !== currentLang) {
      setCurrentLang(urlLang);
    }
  }, [router.query.lang, currentLang]);

  useEffect(() => {
    const loadTranslations = async () => {
      setIsLoading(true);
      const pageConfig = getPageConfig(router.pathname);
      
      // Check if current language is available for this page
      const langAvailable = pageConfig.availableLanguages.includes(currentLang);
      
      if (!langAvailable && currentLang !== 'en') {
        setShowWarning(true);
        setCurrentLang('en'); // Fallback to English
        return;
      } else {
        setShowWarning(false);
      }

      if (pageConfig.translationFile) {
        try {
          const response = await fetch(`${import.meta.env.BASE_URL}lang/${pageConfig.translationFile}_${currentLang}.json`);
          if (response.ok) {
            const data = await response.json();
            setTranslations(data);
            setShowWarning(false);
          } else {
            // Fallback to English if translation not found
            if (currentLang !== 'en') {
              const enResponse = await fetch(`${import.meta.env.BASE_URL}lang/${pageConfig.translationFile}_en.json`);
              if (enResponse.ok) {
                const enData = await enResponse.json();
                setTranslations(enData);
                setShowWarning(true);
              }
            }
          }
        } catch (error) {
          console.error('Error loading translations:', error);
          setShowWarning(true);
        }
      }
      setIsLoading(false);
    };

    loadTranslations();
  }, [currentLang, router.pathname]);

  return {
    currentLang,
    setCurrentLang,
    translations,
    isLoading,
    showWarning
  };
};
