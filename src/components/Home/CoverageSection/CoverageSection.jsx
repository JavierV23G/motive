import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/home/CoverageSection.scss';
import MapaBack from '../../../assets/MapaBack.png';

const CoverageSection = () => {
  const navigate = useNavigate();

  const handleFindCoverage = () => {
    navigate('/coverage-areas');
  };

  const handleSpecialtyClick = (specialtyId) => {
    // Navegar a coverage-areas con el servicio específico
    navigate(`/coverage-areas?service=${specialtyId}`);
  };


  const metrics = [
    {
      value: "8,000+",
      label: "Successful Placements",
      icon: "👥"
    },
    {
      value: "<2hrs",
      label: "Response Time",
      icon: "⚡"
    },
    {
      value: "98.5%",
      label: "Client Satisfaction",
      icon: "⭐"
    },
    {
      value: "550+",
      label: "Active Professionals",
      icon: "🏥"
    }
  ];

  // Especialidades según el diseño del PDF
  const specialties = [
    {
      id: 'pt',
      name: 'Physical Therapy',
      professionals: '150+',
      responseTime: '<2hrs Response'
    },
    {
      id: 'ot', 
      name: 'Occupational Therapy',
      professionals: '75+',
      responseTime: '<2hrs Response'
    },
    {
      id: 'slp',
      name: 'Speech Therapy', 
      professionals: '50+',
      responseTime: '<2hrs Response'
    }
  ];

  return (
    <section className="coverage-section">
      <div className="coverage-section__wrapper">
        
        {/* Título principal */}
        <div className="coverage-section__header">
          <h2 className="coverage-section__title">
            Connect with California's <span className="coverage-section__highlight">Top Therapy Professionals</span>
          </h2>
        </div>

        {/* Coverage Area con imagen como fondo */}
        <div 
          className="coverage-section__map-container"
          style={{
            backgroundImage: `url(${MapaBack})`
          }}
        >
          <div className="coverage-section__map-content">
            <h3 className="coverage-section__map-title">COVERAGE AREAS</h3>
            <p className="coverage-section__map-subtitle">Serving 60+ cities across Southern California</p>
            
            <button 
              className="coverage-section__map-btn"
              onClick={handleFindCoverage}
            >
              FIND COVERAGE
              <svg 
                className="coverage-section__map-btn-arrow" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Métricas - Trusted by Agencies - Alineado a la izquierda con tarjetas */}
        <div className="coverage-section__metrics">
          <h3 className="coverage-section__metrics-title">
            TRUSTED BY AGENCIES ACROSS CALIFORNIA
          </h3>
          
          <div className="coverage-section__metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="coverage-section__metric-card">
                <div className="coverage-section__metric-icon">{metric.icon}</div>
                <div className="coverage-section__metric-content">
                  <div className="coverage-section__metric-value">{metric.value}</div>
                  <div className="coverage-section__metric-label">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Specialties - Alineado a la izquierda */}
        <div className="coverage-section__specialties">
          <div className="coverage-section__specialties-header">
            <h3 className="coverage-section__specialties-title">Our Specialties</h3>
            <p className="coverage-section__specialties-subtitle">
              Expert professionals ready to help - click to learn more
            </p>
          </div>
          
          <div className="coverage-section__specialties-grid">
            {specialties.map((specialty) => (
              <div 
                key={specialty.id} 
                className="coverage-section__specialty-card"
                onClick={() => handleSpecialtyClick(specialty.id)}
                style={{ cursor: 'pointer' }}
              >
                {/* Icono circular como en el PDF */}
                <div className="coverage-section__specialty-icon">
                  {specialty.id === 'pt' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m4-2v4m0 0l3-3m-3 3l-3-3"/>
                    </svg>
                  )}
                  {specialty.id === 'ot' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"/>
                    </svg>
                  )}
                  {specialty.id === 'slp' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                    </svg>
                  )}
                </div>

                {/* Contenido principal */}
                <div className="coverage-section__specialty-content">
                  <h4 className="coverage-section__specialty-name">{specialty.name}</h4>
                  
                  {/* Stats como en el PDF */}
                  <div className="coverage-section__specialty-stats">
                    <div className="coverage-section__specialty-stat">
                      <span className="coverage-section__specialty-number">{specialty.professionals}</span>
                      <span className="coverage-section__specialty-label">Professionals</span>
                    </div>
                    <div className="coverage-section__specialty-stat">
                      <span className="coverage-section__specialty-number">{specialty.responseTime}</span>
                    </div>
                  </div>
                </div>

                {/* Flecha como en el PDF */}
                <div className="coverage-section__specialty-arrow">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoverageSection;