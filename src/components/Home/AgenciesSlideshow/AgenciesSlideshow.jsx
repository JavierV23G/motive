import React from 'react';
import '../../styles/home/AgenciesSlideshow.scss';

const AgenciesSlideshow = () => {
  // Solo agencias de home health verificadas
  const agencies = [
    { 
      name: 'Supportive Home Health',
      logo: 'https://supportivehealthgroup.com/wp-content/uploads/2023/04/qt_q_55-removebg-preview.png'
    },
    { 
      name: 'Unison Health Services',
      logo: 'https://static.wixstatic.com/media/7438d9_91426f0fdd6945f7b74208a602d45cc2~mv2.png/v1/crop/x_0,y_1077,w_3125,h_971/fill/w_267,h_83,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Unison%20Logo%20deliver-01.png'
    },
    { 
      name: 'Intracare Home Health Providers Inc.',
      logo: 'https://intracareinc.com/images/ICHHPInc.-Logo1248.png'
    },
    { 
      name: 'Vast Home Health Agency',
      logo: 'https://vasthh.com/wp-content/uploads/2022/10/logo.png'
    },
    { 
      name: 'Hand in Heart Home Health Services',
      logo: 'https://www.handinhearthomehealth.com/wp-content/themes/handinheart/images/main_logo.png'
    }
  ];

  // Duplicar las agencias para crear el efecto loop infinito
  const duplicatedAgencies = [...agencies, ...agencies];

  return (
    <section className="agencies-slideshow">
      <div className="agencies-slideshow__wrapper">
        
        {/* Título */}
        <div className="agencies-slideshow__header">
          <h2 className="agencies-slideshow__title">
            Home Health Agencies <span className="agencies-slideshow__highlight">Who Trust Motive</span>
          </h2>
        </div>

        {/* Slideshow Container - Movimiento simple de derecha a izquierda */}
        <div className="agencies-slideshow__container">
          <div className="agencies-slideshow__track">
            {duplicatedAgencies.map((agency, index) => (
              <div key={index} className="agencies-slideshow__item">
                <div className="agencies-slideshow__card">
                  <img 
                    src={agency.logo} 
                    alt={`${agency.name} logo`}
                    className="agencies-slideshow__logo"
                    onLoad={(e) => {
                      e.target.parentElement.parentElement.style.display = 'block';
                    }}
                    onError={(e) => {
                      e.target.parentElement.parentElement.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgenciesSlideshow;