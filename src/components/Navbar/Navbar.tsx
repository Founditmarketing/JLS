import { useState, useEffect } from 'react';
import { Star, Menu, X, Calendar } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.topbarLeft}>
            <span className={styles.topbarBadge}>
              <Star fill="currentColor" size={12} /> 5-Star Rated
            </span>
            <span>Mon – Fri: 8 AM – 5 PM</span>
          </div>
          <div className={styles.topbarRight}>
            <a href="tel:9038214792">(903) 821-4792</a>
            <a href="mailto:jlslandscape@gmail.com">jlslandscape@gmail.com</a>
          </div>
        </div>
      </div>

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className="container">
          <a href="/" className={styles.navLogo}>
            <img src="/logo.png" alt="JLS Logo" className={styles.logoIcon} />
            JLS <span>Landscapes</span>
          </a>
          
          <ul className={styles.navLinks}>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#gallery">Gallery</a></li>
            <li><a href="/#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <a href="#contact" className={styles.navCta}>
            <Calendar size={14} /> Schedule Now
          </a>
          
          <button className={styles.mobTog} onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobMenu} ${mobileOpen ? styles.open : ''}`}>
        <button className={styles.mobMenuX} onClick={() => setMobileOpen(false)}>
          <X size={28} />
        </button>
        <a href="/#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="/#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="/#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
        <a href="/#reviews" onClick={() => setMobileOpen(false)}>Reviews</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href="tel:9038214792" className="btn-p" style={{ marginTop: '1rem' }}>
          Call (903) 821-4792
        </a>
      </div>
    </>
  );
}
