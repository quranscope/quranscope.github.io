import { useRouter as useNextRouter } from 'next/router';
import { useState, useEffect } from 'react';

/**
 * Safe wrapper around useRouter that only works on client side
 * Returns null during SSR to avoid "Cannot destructure property 'auth'" error
 */
export const useSafeRouter = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only call useRouter on client side
  let router = null;
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    router = useNextRouter();
  }

  return isMounted ? router : null;
};
