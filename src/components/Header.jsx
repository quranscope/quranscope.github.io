import { useRouter } from 'next/router';
import Link from 'next/link';
import { getPageConfig } from '../config/pages';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const [pageConfig, setPageConfig] = useState({ 
    title: '', 
    subtitle: '', 
    backgroundColor: '#2c3e50' 
  });
  const [isMounted, setIsMounted] = useState(false);
  const isHomePage = router.pathname === '/';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && router.pathname) {
      setPageConfig(getPageConfig(router.pathname));
    }
  }, [router.pathname, isMounted]);

  return (
    <header 
      className="text-white py-8 sm:py-12 px-4 shadow-lg relative"
      style={{ background: pageConfig.backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Home Button - Only show if not on home page */}
        {!isHomePage && (
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              <span className="font-semibold text-sm">Home</span>
            </Link>
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
            {pageConfig.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 drop-shadow-md">
            {pageConfig.subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
