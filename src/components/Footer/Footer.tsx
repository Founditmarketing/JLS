import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>JLS <span>Landscapes</span></div>
            <p>At JLS Landscaping & Pools of Texoma — We Do It All. Transforming outdoor spaces across North Texas and Southern Oklahoma since 1999.</p>
            <p className={styles.footerAreas}>Proudly serving Sherman, Denison, Lake Texoma, Ardmore, Durant, Bonham, Gainesville, Whitesboro, Tioga, Leonard, McKinney, Melissa, Celina, Gunter, Plano, Prosper, and Farmersville.</p>
          </div>
          
          <div>
            <h5>Navigation</h5>
            <ul className={styles.footerLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#services">Services</a></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><a href="/#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h5>Services</h5>
            <ul className={styles.footerLinks}>
              <li><Link to="/services/landscaping">Landscaping</Link></li>
              <li><Link to="/services/pool-construction">Pool Construction</Link></li>
              <li><Link to="/services/irrigation">Irrigation</Link></li>
              <li><Link to="/services/pool-maintenance">Pool Maintenance</Link></li>
              <li><Link to="/services/outdoor-living">Outdoor Living</Link></li>
              <li><Link to="/services/fencing">Fencing</Link></li>
            </ul>
          </div>
          
          <div>
            <h5>Get In Touch</h5>
            <div className={styles.footerCi}>
              <Phone size={15} />
              <a href="tel:9038214792">(903) 821-4792</a>
            </div>
            <div className={styles.footerCi}>
              <Mail size={15} />
              <a href="mailto:jlslandscape@gmail.com">jlslandscape@gmail.com</a>
            </div>
            <div className={styles.footerCi}>
              <Clock size={15} />
              Mon – Fri: 8:00 AM – 5:00 PM
            </div>
            <div className={styles.footerCi}>
              <MapPin size={15} />
              3409 N Heritage Pkwy, Sherman, TX 75092
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <span>&copy; {new Date().getFullYear()} JLS Landscaping & Pools of Texoma. All Rights Reserved.</span>
          <span>Crafted with care in Sherman, TX</span>
        </div>
      </div>
      
      {/* Mobile CTA */}
      <div className={styles.mobCta}>
        <a href="tel:9038214792">
          <Phone size={18} /> Schedule — (903) 821-4792
        </a>
      </div>
    </footer>
  );
}
