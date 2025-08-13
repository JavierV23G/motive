import React, { useState } from 'react';
import Header from '../Home/Header/Header.jsx';
import Footer from '../Home/Footer/Footer.jsx';
import '../styles/coverage/CoverageAreas.scss';
import MapaPT from '../../assets/MapaPT.png';
import MapaOT from '../../assets/MapaOT.png';
import MapaST from '../../assets/MapaST.png';

const CoverageAreas = () => {
  const [activeService, setActiveService] = useState('PT');
  const [showDetails, setShowDetails] = useState(false);

  // REAL coverage data organized by service - Updated with actual Motive Home Care areas
const coverageByService = {
  PT: {
    title: "Physical Therapy",
    subtitle: "Licensed PTs & PTAs",
    stats: { therapists: "120+", counties: "4 counties", response: "<2hrs" },
    color: "#3B82F6", // Blue
    mapImage: MapaPT,
    counties: {
      "Los Angeles County": [
        { name: "Central LA", cities: ["Los Angeles", "Mid-City", "Koreatown", "Westlake", "Echo Park", "Silver Lake", "Hollywood", "Los Feliz", "Silverlake", "Atwater Village", "West Hollywood", "Central LA", "Downtown"] },
        { name: "West LA & Westside", cities: ["West Hollywood", "Beverly Hills", "Culver City", "Santa Monica", "Westwood", "Brentwood", "Century City", "Sherman Oaks", "Marina del Rey", "Venice", "Playa Vista", "Miracle Mile", "Mid Wilshire"] },
        { name: "South Bay", cities: ["Inglewood", "Torrance", "Redondo Beach", "Manhattan Beach", "Hermosa Beach", "Gardena", "Hawthorne", "El Segundo", "Carson", "Lomita", "Harbor City", "Wilmington", "San Pedro", "Palos Verdes", "Rolling Hills", "Lawndale", "Lennox"] },
        { name: "South & Southeast LA", cities: ["Compton", "Long Beach", "Lynwood", "South Gate", "Cudahy", "Huntington Park", "Watts", "South LA", "Westmont", "Paramount"] },
        { name: "East LA & San Gabriel Valley", cities: ["Pasadena", "Alhambra", "Monterey Park", "Arcadia", "San Marino", "Temple City", "Monrovia", "Montebello", "Pico Rivera", "Downey", "Highland Park", "Eagle Rock", "La Crescenta", "Sunland", "Tujunga", "Altadena", "San Gabriel", "Rosemead"] },
        { name: "San Fernando Valley", cities: ["Burbank", "North Hollywood", "Studio City", "Sherman Oaks", "Van Nuys", "Northridge", "North Hills", "Reseda", "Lake Balboa", "Panorama City", "Chatsworth", "Granada Hills", "Porter Ranch", "Mission Hills", "Sylmar", "Pacoima", "San Fernando", "Sun Valley", "Valley Village", "Valley Glen", "Woodland Hills", "West Hills", "Canoga Park", "Winnetka", "Tarzana", "Encino"] },
        { name: "Glendale Area", cities: ["Glendale", "Burbank", "Eagle Rock", "Highland Park", "La Cañada Flintridge"] }
      ],
      "Orange County": [
        { name: "North Orange County", cities: ["Anaheim", "Fullerton", "Garden Grove", "Buena Park", "La Habra", "Placentia", "Yorba Linda", "La Mirada", "Cypress", "Stanton", "Westminster", "Huntington Beach", "Los Alamitos", "Artesia", "Cerritos", "Bellflower", "Lakewood", "Norwalk"] },
        { name: "Central Orange County", cities: ["Santa Ana", "Tustin", "Orange", "Irvine", "Costa Mesa", "Newport Beach"] },
        { name: "South Orange County", cities: ["Mission Viejo", "Aliso Viejo", "Lake Forest", "Laguna Hills", "Ladera Ranch", "San Juan Capistrano", "Dana Point", "Laguna Niguel", "Trabuco Canyon"] }
      ],
      "San Bernardino County": [
        { name: "West San Bernardino", cities: ["Rancho Cucamonga", "Ontario", "Fontana", "Upland", "Chino", "Montclair", "Claremont", "Pomona", "Covina", "West Covina", "La Verne", "San Dimas", "Glendora", "Diamond Bar", "Rowland Heights", "La Puente", "Avocado Heights"] },
        { name: "Central San Bernardino", cities: ["San Bernardino", "Highland", "Loma Linda", "Redlands", "Colton", "Rialto", "Bloomington", "Grand Terrace"] }
      ],
      "Riverside County": [
        { name: "West Riverside", cities: ["Riverside", "Corona", "Jurupa Valley", "Eastvale", "Norco", "Moreno Valley", "Perris", "Temescal Valley"] },
        { name: "Southwest Riverside", cities: ["Menifee", "Murrieta", "Temecula", "Hemet", "San Jacinto", "Lake Elsinore", "Wildomar", "Sun City", "Winchester"] },
        { name: "Desert Areas", cities: ["Beaumont", "Banning", "Calimesa"] }
      ],
      "Ventura County": [
        { name: "Ventura County", cities: ["Thousand Oaks", "Westlake", "Newbury Park", "Simi Valley", "Moorpark", "Ventura", "Oxnard", "Port Hueneme", "Camarillo", "Santa Paula", "Agoura Hills", "Calabasas", "Bell Canyon", "Oak Park"] }
      ]
    }
  },
  OT: {
    title: "Occupational Therapy",
    subtitle: "Licensed OTs & COTAs",
    stats: { therapists: "85+", counties: "4 counties", response: "<2hrs" },
    color: "#F97316", // Orange
    mapImage: MapaOT,
    counties: {
      "Los Angeles County": [
        { name: "Central & West LA", cities: ["Hollywood", "Koreatown", "Central LA", "Mid-City", "Mid-Wilshire", "Baldwin Hills", "Culver City", "Palms", "West LA", "West Hollywood", "Leimert Park", "Inglewood", "Cheviot Hills", "Santa Monica", "Beverly Hills", "Brentwood", "Westwood", "Beverlywood", "Studio City", "Marina del Rey", "Venice", "Century City", "Westchester", "Playa del Rey", "Playa Vista", "Ladera Heights", "Windsor Hills"] },
        { name: "South Bay & Harbor Area", cities: ["Long Beach", "Carson", "San Pedro", "Harbor City", "Lomita", "Torrance", "Gardena", "Redondo Beach", "Rolling Hills", "Manhattan Beach", "West Torrance", "Hawthorne", "Lawndale", "Hermosa Beach", "Compton", "Lynwood", "Wilmington", "Palos Verdes"] },
        { name: "San Gabriel Valley", cities: ["Pasadena", "Glendale", "La Cañada", "Alhambra", "Arcadia", "El Monte", "Rosemead", "Temple City", "San Marino", "Baldwin Park", "Monterey Park", "Montebello", "Monrovia", "Duarte", "La Puente", "Whittier", "Pico Rivera"] },
        { name: "San Fernando Valley", cities: ["Burbank", "North Hollywood", "Sherman Oaks", "Los Feliz", "Silver Lake", "Atwater Village", "Echo Park", "Eagle Rock", "Silverlake", "Glassell Park", "Woodland Hills", "West Hills", "Canoga Park", "Reseda", "Tarzana", "Winnetka", "Northridge", "Granada Hills", "Porter Ranch", "Chatsworth", "Encino", "Sylmar", "San Fernando"] },
        { name: "East LA", cities: ["East Lakewood", "Highland Park", "Greater Los Angeles", "East LA", "South LA", "Huntington Park", "Chinatown LA"] }
      ],
      "Orange County": [
        { name: "North Orange County", cities: ["Anaheim", "Fullerton", "Brea", "La Habra", "Yorba Linda", "Placentia", "Garden Grove", "Westminster", "Huntington Beach", "Fountain Valley", "Long Beach", "Lakewood", "Cerritos", "Bellflower", "Artesia", "Cypress", "Los Alamitos", "Seal Beach", "Stanton"] },
        { name: "Central Orange County", cities: ["Santa Ana", "Irvine", "Tustin", "Orange", "Costa Mesa", "Newport Beach"] },
        { name: "South Orange County", cities: ["Mission Viejo", "Aliso Viejo", "Irvine", "Laguna Hills", "Lake Forest", "Foothill Ranch", "Rancho Mission Viejo", "Trabuco Canyon", "San Juan Capistrano", "Coto de Caza", "Laguna Niguel", "Laguna Woods", "Rancho Santa Margarita", "Ladera Ranch"] }
      ],
      "San Bernardino County": [
        { name: "West San Bernardino", cities: ["Rancho Cucamonga", "Ontario", "Fontana", "Upland", "Claremont", "Montclair", "La Verne", "West Covina", "Santa Fe Springs", "San Dimas", "Covina", "Azusa", "Rowland Heights", "Diamond Bar", "La Puente", "El Monte", "Whittier", "Norwalk", "Downey", "Montebello", "Pico Rivera", "Rosemead", "Arcadia", "San Marino"] }
      ],
      "Riverside County": [
        { name: "West Riverside", cities: ["Riverside", "Corona", "Eastvale", "Colton", "Redlands", "Moreno Valley", "Menifee", "Norco"] }
      ]
    }
  },
  ST: {
    title: "Speech Therapy",
    subtitle: "Licensed SLPs",
    stats: { therapists: "12+", counties: "2 counties", response: "<3hrs" },
    color: "#10B981", // Green
    mapImage: MapaST,
    counties: {
      "Los Angeles County": [
        { name: "West LA Premium Areas", cities: ["Brentwood", "Bel Air", "Beverly Hills", "Westwood", "Pico-Robertson"] },
        { name: "South Bay Coastal", cities: ["Torrance", "Redondo Beach", "Manhattan Beach", "Hermosa Beach", "El Segundo", "Lomita", "Palos Verdes"] }
      ]
    }
  }
};

  const serviceOrder = ['PT', 'OT', 'ST'];
  const currentService = coverageByService[activeService];

  const handleServiceChange = (service) => {
    setActiveService(service);
    setShowDetails(false); // Reset details when changing service
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="elegant-coverage-page">
      <Header />
      
      {/* Hero Section */}
      <section className="coverage-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-icon">🏥</div>
              <span>Serving California with Care</span>
            </div>
            <h1 className="hero-title">
              Where We
              <span className="title-gradient"> Serve</span>
            </h1>
            <p className="hero-description">
              We're here to connect skilled therapists with agencies across Southern California. 
              Every connection we make helps bring quality care directly to patients' homes.
            </p>
          </div>
          
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">300+</div>
              <div className="stat-label">Licensed Therapists</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Cities We Serve</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Languages Spoken</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Coverage Section */}
      <section className="coverage-section">
        <div className="coverage-container">
          <div className="section-header">
            <h2>Our Coverage Areas</h2>
            <p>Click on any therapy service below to explore where we can help</p>
          </div>

          {/* Service Tabs */}
          <div className="service-tabs">
            {serviceOrder.map((service) => {
              const serviceData = coverageByService[service];
              return (
                <button
                  key={service}
                  className={`service-tab ${activeService === service ? 'active' : ''}`}
                  onClick={() => handleServiceChange(service)}
                  style={{ '--service-color': serviceData.color }}
                >
                  <div className="tab-header">
                    <h3>{serviceData.title}</h3>
                    <p>{serviceData.subtitle}</p>
                  </div>
                  <div className="tab-stats">
                    <span className="stat">{serviceData.stats.therapists}</span>
                    <span className="stat">{serviceData.stats.counties}</span>
                    <span className="stat">{serviceData.stats.response}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Large Map Display */}
          <div className="map-display">
            <div className="map-container">
              <div className="map-header">
                <div className="map-title">
                  <h3>{currentService.title} Coverage Map</h3>
                  <p>Areas where we have {currentService.subtitle.toLowerCase()} available</p>
                </div>
                <button 
                  className="details-toggle"
                  onClick={toggleDetails}
                  style={{ '--service-color': currentService.color }}
                >
                  <span>
                    {showDetails ? 'Hide' : 'View'} Coverage Details
                  </span>
                  <svg 
                    className={`toggle-icon ${showDetails ? 'rotated' : ''}`}
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
              </div>
              
              <div className="large-map">
                <img 
                  src={currentService.mapImage} 
                  alt={`${currentService.title} Coverage Areas across Southern California`}
                  className="map-image"
                />
                <div 
                  className="map-overlay"
                  style={{ backgroundColor: `${currentService.color}08` }}
                ></div>
                
                {/* Map Stats Overlay */}
                <div className="map-stats">
                  <div className="stat-pill">
                    <span className="value">{currentService.stats.therapists}</span>
                    <span className="label">Available</span>
                  </div>
                  <div className="stat-pill">
                    <span className="value">{currentService.stats.response}</span>
                    <span className="label">Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expandable Coverage Details */}
          <div className={`coverage-details ${showDetails ? 'expanded' : ''}`}>
            <div className="details-content">
              <div className="details-header">
                <h4>Detailed Coverage for {currentService.title}</h4>
                <p>
                  We serve {Object.keys(currentService.counties).length} counties with {
                    Object.values(currentService.counties).reduce((acc, areas) => acc + areas.length, 0)
                  } coverage areas
                </p>
              </div>

              <div className="counties-grid">
                {Object.entries(currentService.counties).map(([county, areas]) => (
                  <div key={county} className="county-section">
                    <div className="county-header">
                      <div 
                        className="county-indicator"
                        style={{ backgroundColor: currentService.color }}
                      ></div>
                      <h5>{county}</h5>
                      <span className="area-count">{areas.length} areas</span>
                    </div>
                    
                    <div className="areas-list">
                      {areas.map((area, index) => (
                        <div key={index} className="area-item">
                          <div className="area-name">{area.name}</div>
                          <div className="cities-list">
                            {area.cities.slice(0, 8).map((city, cityIndex) => (
                              <span key={cityIndex} className="city-chip">
                                {city}
                              </span>
                            ))}
                            {area.cities.length > 8 && (
                              <span className="city-chip more">
                                +{area.cities.length - 8} more
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages-section">
        <div className="languages-container">
          <h3>We Speak Your Language</h3>
          <p>Our diverse team helps us connect with patients and families from all backgrounds</p>
          <div className="languages-grid">
            {[
              "English", "Spanish", "Tagalog", "Korean", "Chinese (Cantonese)", 
              "French", "Armenian", "Russian", "Vietnamese", "Japanese", 
              "Arabic", "Farsi", "Hindi", "Punjabi", "Bengali"
            ].map((language, index) => (
              <div key={index} className="language-tag">
                {language}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Don't See Your Area?</h2>
              <p>
                We're always growing and would love to help. If you need coverage in your area 
                or have questions about our services, just give us a call. We believe every 
                patient deserves quality care, and we'll work with you to find a solution.
              </p>
              
              <div className="contact-features">
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>Quick Response</h4>
                    <p>We typically respond within 2 hours during business hours</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                      <path d="M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>Personal Touch</h4>
                    <p>You'll speak with real people who care about your needs</p>
                  </div>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="feature-content">
                    <h4>Reliable Service</h4>
                    <p>We're committed to finding solutions that work for everyone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="card-header">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <h4>Let's Talk</h4>
              </div>
              
              <p>Call us and we'll help you find the right therapy coverage for your area</p>
              
              <a href="tel:+12134950092" className="phone-button">
                (213) 495-0092
              </a>
              
              <div className="availability">
                <div className="availability-dot"></div>
                <span>Available Monday-Friday, 9AM-5:30PM PST</span>
              </div>
              
              <div className="alternative-contact">
                <span>Prefer email?</span>
                <a href="mailto:info@motivehomecare.com" className="email-link">
                  info@motivehomecare.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bottom-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>
              We're here to support healthcare agencies with reliable, compassionate therapy staffing. 
              Let's talk about how we can help serve your community.
            </p>
            <div className="cta-actions">
              <a href="tel:+12134950092" className="cta-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call (213) 495-0092
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoverageAreas;