import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = () => {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home | Phudu Medical Services';
      case '/my_booking':
        return 'My Bookings | Phudu Medical Services';
      case '/blogs':
        return 'Blogs | Phudu Medical Services';
      case '/contact':
        return 'Contact Us | Phudu Medical Services';
      default:
        if (pathname.startsWith('/doctorDetails/')) {
          return 'Doctor Details | Phudu Medical Services';
        }
        return 'Phudu Medical Services';
    }
  };

  useEffect(() => {
    const title = getPageTitle(location.pathname);
    document.title = title;
  }, [location]);
};

export default useDocumentTitle;