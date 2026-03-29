import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Temporarily remove smooth scrolling so the page jump is instant
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Jump to the top
    window.scrollTo(0, 0);
    
    // Restore smooth scrolling for any in-page anchor links
    document.documentElement.style.scrollBehavior = '';
  }, [pathname]);

  return null;
}
