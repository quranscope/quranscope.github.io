import { useRouter } from 'next/router';
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
      className="page-header"
      style={{ background: pageConfig.backgroundColor }}
    >
      <h1>{pageConfig.title}</h1>
      <p>{pageConfig.subtitle}</p>
    </header>
  );
}
