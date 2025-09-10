import React from 'react';
import motiveLogo from '../../assets/motive_logo_black_text_transparent.png';
import './MaintenanceScreen.scss';

const MaintenanceScreen = () => {
  return (
    <div className="maintenance-screen">
      <div className="maintenance-content">
        <div className="logo-container">
          <img src={motiveLogo} alt="Motive Home Care" className="maintenance-logo" />
        </div>
        <h1 className="maintenance-title">Making Things Better</h1>
        <p className="maintenance-message">
          We're working on improvements to help connect <strong>caring therapists</strong> with families who need <strong>home health services</strong> across Southern California. 
          We'll be back soon with a better experience for everyone.
        </p>
        <p className="maintenance-submessage">
          Thank you for your patience while we make these improvements.
        </p>
        <div className="loading-animation">
          <div className="clinical-loader">
            <div className="medical-symbol">
              <svg width="100" height="100" viewBox="0 0 100 100" className="medical-svg">
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E67E22"/>
                    <stop offset="50%" stopColor="#F39C12"/>
                    <stop offset="100%" stopColor="#D35400"/>
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A90A4"/>
                    <stop offset="100%" stopColor="#2C5F6F"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Medical Cross */}
                <g className="medical-cross">
                  <rect x="40" y="25" width="20" height="50" rx="3" fill="url(#orangeGradient)" filter="url(#glow)"/>
                  <rect x="25" y="40" width="50" height="20" rx="3" fill="url(#orangeGradient)" filter="url(#glow)"/>
                </g>
                
                {/* Healing Circle */}
                <circle className="healing-circle" cx="50" cy="50" r="35" fill="none" 
                        stroke="url(#blueGradient)" strokeWidth="2" strokeDasharray="8,4"/>
                
                {/* Care Dots */}
                <circle className="care-dot dot-1" cx="30" cy="30" r="3" fill="url(#orangeGradient)"/>
                <circle className="care-dot dot-2" cx="70" cy="30" r="3" fill="url(#blueGradient)"/>
                <circle className="care-dot dot-3" cx="30" cy="70" r="3" fill="url(#blueGradient)"/>
                <circle className="care-dot dot-4" cx="70" cy="70" r="3" fill="url(#orangeGradient)"/>
              </svg>
            </div>
            <div className="heartbeat-rhythm">
              <svg width="120" height="35" viewBox="0 0 120 35" className="rhythm-svg">
                <defs>
                  <linearGradient id="rhythmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#E67E22"/>
                    <stop offset="50%" stopColor="#F39C12"/>
                    <stop offset="100%" stopColor="#E67E22"/>
                  </linearGradient>
                </defs>
                <path className="rhythm-line" 
                      d="M0,17 L20,17 L25,7 L30,27 L35,12 L40,22 L45,17 L120,17" 
                      fill="none" stroke="url(#rhythmGradient)" strokeWidth="2.5"/>
              </svg>
            </div>
            <div className="care-circles">
              <div className="care-circle circle-1"></div>
              <div className="care-circle circle-2"></div>
              <div className="care-circle circle-3"></div>
              <div className="care-circle circle-4"></div>
            </div>
            <div className="healing-waves">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
            </div>
          </div>
        </div>
        <div className="maintenance-details">
          <div className="contact-info">
            <p>If you need help right away, please contact us:</p>
            <div className="contact-methods">
              <p>📧 <a href="mailto:info@motivehomecare.com">info@motivehomecare.com</a></p>
              <p>📞 <a href="tel:+12134950092">(213) 495-0092</a></p>
              <p>🕒 Mon - Fri, 9AM - 5:30PM PST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceScreen;