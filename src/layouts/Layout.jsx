import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Layout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll reveal for elements marked with `.fade-in`
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-black-deep text-ivory">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-16 border-t border-white/5 px-[8vw] py-16">
        <div className="flex items-center justify-between text-xs tracking-[0.05em] text-ivory/60">
          <div className="font-serif text-base font-bold tracking-[0.2em] uppercase">
            ALEXANDER <span className="text-gold-metallic">ROSS</span>
          </div>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
