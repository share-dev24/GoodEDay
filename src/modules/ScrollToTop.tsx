import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const location = useLocation();
    const isMain = location.pathname === '/';
    const isPostDetailPage = /^\/posts\/\w+$/.test(location.pathname);

    useEffect(() => {
        if (isMain || !isPostDetailPage) {
            window.scroll(0, 0);
        }
    }, [location]);

    return null;
}
