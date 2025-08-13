import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../styles/home/Header.scss';
import LogoMini from '../../../assets/motive_logo_black_text_transparent.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const navigationItems = [
    {
      label: 'Our Services',
      type: 'page',
      link: '/',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z'
    },
    {
      label: 'Agencies',
      type: 'page',
      link: '/agencies/join',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
    },
    {
      label: 'Therapists',
      type: 'page', 
      link: '/therapists/apply',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
      label: 'Coverage Areas',
      type: 'page',
      link: '/coverage-areas',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      label: 'About Us',
      type: 'page',
      link: '/about',
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      label: 'Access Portal',
      type: 'external',
      link: 'https://mhc-therapysync.com/',
      icon: 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3'
    }
  ];

  const handleNavClick = (item, event) => {
    event.preventDefault();
    navigate(item.link);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        event_category: 'header',
        event_label: 'get_started_main'
      });
    }
    navigate('/');
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const handleLoginClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'login_click', {
        event_category: 'header',
        event_label: 'therapysync_portal'
      });
    }
    window.open('https://mhc-therapysync.com/', '_blank', 'noopener,noreferrer');
  };

  const handleMobileNavClick = (item) => {
    setIsMobileMenuOpen(false);
    
    if (item.type === 'external') {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else {
      navigate(item.link);
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} ref={headerRef}>
        
        <div className="header__main">
          <div className="header__container">
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Logo Centrado */}
            <button 
              onClick={handleLogoClick}
              className="header__logo"
            >
              <img 
                src={LogoMini} 
                alt="Motive Home Care - Professional Healthcare Staffing" 
                className="header__logo-image"
                loading="eager"
              />
            </button>

            {/* Espacio vacío para mantener el logo centrado */}
            <div className="header__spacer-right"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile ${isMobileMenuOpen ? 'header__mobile--open' : ''}`}>
          <div className="header__mobile-content">
            
            {/* Mobile Header */}
            <div className="header__mobile-header">
              <div className="header__mobile-logo-container">
                <img src={LogoMini} alt="Motive Home Care" className="header__mobile-logo" />
                <div className="header__mobile-brand">
                  <span className="header__mobile-brand-tag">Connecting Care. Building Trust.</span>
                </div>
              </div>
              <button 
                className="header__mobile-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="header__mobile-nav">
              {navigationItems.map((item, index) => (
                <button 
                  key={index}
                  className={`header__mobile-link ${item.type === 'external' ? 'header__mobile-link--external' : ''}`}
                  onClick={() => handleMobileNavClick(item)}
                >
                  <div className="header__mobile-link-content">
                    <div className="header__mobile-link-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d={item.icon} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="header__mobile-link-text">{item.label}</span>
                  </div>
                  <div className="header__mobile-link-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                </button>
              ))}
            </nav>

            {/* Footer */}
            <div className="header__mobile-footer">
              {/* Footer limpio sin contenido duplicado */}
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="header__overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

      </header>
      
      <div className="header__spacer" />
    </>
  );
};

export default Header;