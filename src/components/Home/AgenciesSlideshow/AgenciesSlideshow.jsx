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
    },
    {
      name: 'Continuity Providers',
      logo: 'https://continuityproviders.com/wp-content/themes/continuityph/images/main_logo.png'
    },
    {
      name: 'DigniTonic Care',
      logo: 'https://dignitonic.com/wp-content/uploads/2021/03/DigniTonic-Care-e1616483890614.png'
    },
    {
      name: 'Alaphia Care',
      logo: 'https://www.alaphiacare.com/wp-content/themes/alaphiacare/images/main_logo.png'
    },
    {
      name: 'Prime Healthcare Services',
      logo: 'https://www.primehsinc.com/wp-content/themes/primecarebe588/images/main-logo.png'
    },
    {
      name: 'All Citizens Home Health',
      logo: 'https://www.allcitizenshh.com/wp-content/uploads/2024/09/allcitizenslogo.png'
    },
    {
      name: 'Bright Home Healthcare',
      logo: 'https://www.brighthhc.com/wp-content/themes/brighthomean290/images/main-logo.png'
    },
    {
      name: 'VIP Healthcare Services',
      logo: 'https://www.viphealthcareservices.com/images/LOGO.png'
    },
    {
      name: 'Equanimity Health',
      logo: 'https://www.equanhealth.com/wp-content/themes/equanimityan736/images/main-logo.png'
    },
    {
      name: 'Level Home Health',
      logo: 'https://www.levelhh.com/wp-content/themes/levelhome/images/logo.png'
    },
    {
      name: 'GAHHA',
      logo: 'https://images.squarespace-cdn.com/content/v1/64e2e2ac7bfb71781737c2d2/48991c0a-d74b-4aec-be93-014d054472f5/Gahha+logo.png?format=1500w'
    },
    {
      name: 'Home Health Agency',
      logo: 'https://images.squarespace-cdn.com/content/v1/67c3acc1d7b07669d3b919a2/cdaaf1ad-3f6c-46a3-aeec-5cb7031b7656/Website+Header.png?format=1500w'
    },
    {
      name: 'Healthcare Services',
      logo: 'https://s3-media0.fl.yelpcdn.com/bphoto/smdSYtSM3TpXGxurLA0Uhg/348s.jpg'
    },
    {
      name: 'Care Agency 1',
      logo: 'https://static.wixstatic.com/media/8c35f5_a00b5845ea6b46259fa6d68efa27670c~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20(11%20%C3%97%2011%20in)-4.png'
    },
    {
      name: 'Care Agency 2',
      logo: 'https://static.wixstatic.com/media/4f8630_74cbaa319f0b4c37aad9068b28a95539~mv2.png/v1/fill/w_182,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4f8630_74cbaa319f0b4c37aad9068b28a95539~mv2.png'
    },
    {
      name: 'Americare Home Health',
      logo: 'https://www.americarehhinc.com/wp-content/themes/americarehh/images/main-logo.png'
    },
    {
      name: 'Care Agency 3',
      logo: 'https://s3-us-west-2.amazonaws.com/care-papers-prod-images/hero-62a7c00815ad423e43302fce-Screen%20Shot%202022-06-13%20at%203.54.33%20PM.png'
    }
  ];

  // Dividir las agencias en dos grupos
  const midPoint = Math.ceil(agencies.length / 2);
  const firstRow = agencies.slice(0, midPoint);
  const secondRow = agencies.slice(midPoint);

  // Duplicar para crear el efecto loop infinito
  const duplicatedFirstRow = [...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow];

  return (
    <section className="agencies-slideshow">
      <div className="agencies-slideshow__wrapper">
        
        {/* Título */}
        <div className="agencies-slideshow__header">
          <h2 className="agencies-slideshow__title">
            Home Health Agencies <span className="agencies-slideshow__highlight">Who Trust Motive</span>
          </h2>
        </div>

        {/* Slideshow Container - Dos líneas con movimientos opuestos */}
        <div className="agencies-slideshow__container">
          {/* Primera línea - movimiento de derecha a izquierda */}
          <div className="agencies-slideshow__row">
            <div className="agencies-slideshow__track agencies-slideshow__track--left">
              {duplicatedFirstRow.map((agency, index) => (
                <div key={`first-${index}`} className="agencies-slideshow__item">
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

          {/* Segunda línea - movimiento de izquierda a derecha */}
          <div className="agencies-slideshow__row">
            <div className="agencies-slideshow__track agencies-slideshow__track--right">
              {duplicatedSecondRow.map((agency, index) => (
                <div key={`second-${index}`} className="agencies-slideshow__item">
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

      </div>
    </section>
  );
};

export default AgenciesSlideshow;