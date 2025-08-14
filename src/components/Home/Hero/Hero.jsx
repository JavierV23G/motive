import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/home/Hero.scss';

// Importar videos desde assets
import video1 from '../../../assets/videos/video8.mp4';
import video2 from '../../../assets/videos/video7.mp4';
import video3 from '../../../assets/videos/video6.mp4';
import video4 from '../../../assets/videos/video4.mp4';
import video5 from '../../../assets/videos/video5.mp4';

const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);

  const videos = [video1, video2, video3, video4, video5];

  // Función para verificar si estamos en horario de oficina (9AM - 5:30PM CA)
  const checkBusinessHours = useCallback(() => {
    const now = new Date();
    const caTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
    const currentHour = caTime.getHours();
    const currentMinutes = caTime.getMinutes();
    const currentDay = caTime.getDay(); // 0 = Sunday, 6 = Saturday
    
    // Verificar si es día laborable (lunes a viernes)
    const isWeekday = currentDay >= 1 && currentDay <= 5;
    
    // Verificar si está en horario (9:00 AM - 5:30 PM)
    const isBusinessHours = (currentHour > 9 || (currentHour === 9 && currentMinutes >= 0)) && 
                           (currentHour < 17 || (currentHour === 17 && currentMinutes <= 30));
    
    return isWeekday && isBusinessHours;
  }, []);

  // Actualizar estado online/offline
  useEffect(() => {
    const updateStatus = () => {
      setIsOnline(checkBusinessHours());
    };

    // Actualizar inmediatamente
    updateStatus();

    // Actualizar cada minuto
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, [checkBusinessHours]);

  const handleVideoEnd = useCallback(() => {
    // Guardar la posición actual del scroll antes de la transición
    const scrollPosition = window.scrollY;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => 
        (prevIndex + 1) % videos.length
      );
      setIsTransitioning(false);
      
      // Mantener la posición del scroll después del cambio
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });
    }, 1000);
  }, [videos.length]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Guardar la posición actual del scroll
      const currentScrollPosition = window.scrollY;
      
      video.addEventListener('ended', handleVideoEnd);
      
      // Prevenir cualquier comportamiento de foco automático
      video.blur();
      video.play().catch(console.error);
      
      // Asegurar que la posición del scroll se mantenga
      requestAnimationFrame(() => {
        window.scrollTo({
          top: currentScrollPosition,
          behavior: 'instant'
        });
      });
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideoIndex, handleVideoEnd]);

  const handleCallClick = () => {
    window.location.href = 'tel:+12134950092';
  };

  const handleGetStartedClick = () => {
    const motiveDifferenceSection = document.getElementById('motive-difference');
    if (motiveDifferenceSection) {
      motiveDifferenceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-wrapper">
      <section className="hero">
        {/* Video Background */}
        <div className="hero__video-background">
        <video
          ref={videoRef}
          className={`hero__video ${isTransitioning ? 'transitioning-out' : ''}`}
          src={videos[currentVideoIndex]}
          muted
          playsInline
          autoPlay
          preload="metadata"
          style={{ pointerEvents: 'none' }}
        />
        {isTransitioning && (
          <video
            ref={nextVideoRef}
            className="hero__video transitioning-in"
            src={videos[(currentVideoIndex + 1) % videos.length]}
            muted
            playsInline
            autoPlay
            preload="metadata"
            style={{ pointerEvents: 'none' }}
          />
        )}
        <div className="hero__overlay"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="hero__content">
        <div className="hero__container">
          <h1 className="hero__title">
            Connecting Care & Building Trust
          </h1>
          
          <p className="hero__subtitle">
            We help healthcare agencies find qualified therapists quickly and
            efficiently. <span className="hero__highlight">Same-day response</span>, verified professionals, and dedicated
            support for your agency's success.
          </p>

          <div className="hero__actions">
            <button 
              className="hero__btn hero__btn--primary"
              onClick={handleGetStartedClick}
            >
              <svg className="hero__btn-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Get Started Today
            </button>
            
            <span className="hero__or">or</span>
            
            <button 
              className={`hero__btn hero__btn--call ${isOnline ? 'hero__btn--online' : 'hero__btn--offline'}`}
              onClick={handleCallClick}
            >
              <div className="hero__btn-call-content">
                <div className="hero__btn-call-icon-wrapper">
                  <svg className="hero__btn-icon hero__btn-call-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div className={`hero__btn-status-dot ${isOnline ? 'online' : 'offline'}`}></div>
                </div>
                <div className="hero__btn-call-text">
                  <span className="hero__btn-call-number">Call (213)495-0092</span>
                  <span className="hero__btn-call-status">
                    {isOnline ? 'Online Now' : 'Offline'}
                  </span>
                  <span className="hero__btn-call-hours">
                    Available 9:00 AM - 5:30 PM PST
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;