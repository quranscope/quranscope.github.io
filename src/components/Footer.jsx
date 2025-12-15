import Link from 'next/link';
import { useRouter } from 'next/router';
import { PAGES } from '../config/pages';
import { useState, useEffect } from 'react';

export default function Footer() {
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState('en');
  const [currentPath, setCurrentPath] = useState('/');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (router.pathname) {
        setCurrentPath(router.pathname);
      }
      if (router.query.lang) {
        setCurrentLang(router.query.lang);
      }
    }
  }, [router.pathname, router.query.lang, isMounted]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to calculate similarity between current page and other pages
  const getRelatedPages = () => {
    const currentPage = Object.values(PAGES).find(page => page.path === currentPath);
    
    if (!currentPage || currentPath === '/') return [];

    // Get keywords from current page
    const currentKeywords = (currentPage.title + ' ' + currentPage.subtitle).toLowerCase();
    
    // Score other pages based on keyword similarity
    const scoredPages = Object.entries(PAGES)
      .filter(([_, page]) => page.path !== currentPath && page.path !== '/')
      .map(([key, page]) => {
        const pageText = (page.title + ' ' + page.subtitle).toLowerCase();
        
        // Calculate similarity score based on common words
        const words = currentKeywords.split(/\s+/);
        let score = 0;
        
        words.forEach(word => {
          if (word.length > 3 && pageText.includes(word)) {
            score += 1;
          }
        });
        
        // Boost score for related topics
        const topicRelations = {
          'violence': ['expansion', 'harm', 'jihad'],
          'military': ['expansion', 'harm', 'jihad'],
          'women': ['muhammad', 'harm'],
          'harm': ['expansion', 'harm', 'migration', 'jihad'],
          'scientific': ['comparative', 'scientific'],
          'history': ['expansion', 'comparative'],
          'jews': ['antisemitism', 'comparative'],
          'christian': ['antisemitism', 'comparative'],
          'migration': ['migration', 'harm', 'expansion'],
          'muslim': ['exmuslim', 'muhammad', 'jihad'],
          'jihad': ['jihad', 'expansion', 'harm']
        };
        
        Object.entries(topicRelations).forEach(([keyword, relatedKeys]) => {
          if (currentKeywords.includes(keyword) && relatedKeys.includes(key)) {
            score += 2;
          }
        });
        
        return { key, page, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    return scoredPages.map(({ page }) => page);
  };

  const relatedPages = getRelatedPages();

  return (
    <footer className="page-footer">
      {relatedPages.length > 0 && (
        <div className="related-pages">
          <h3>Related Pages</h3>
          <div className="related-pages-grid">
            {relatedPages.map((page) => (
              <Link 
                key={page.path} 
                to={`${page.path}?lang=${currentLang}`} 
                className="related-page-card"
                style={{ background: page.backgroundColor }}
              >
                <h4>{page.title}</h4>
                <p>{page.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="footer-content">
        <p>&copy; 2025 Quran Scope. All rights reserved.</p>
        <p>Critical research for historical truth and human rights.</p>
      </div>
      
      <button className="go-to-top" onClick={scrollToTop} aria-label="Go to top">
        ↑ Top
      </button>
    </footer>
  );
}
