import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the route changes
  }, [location]); // Runs when the location (route) changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
