import { useEffect, useRef } from 'react';
import { Users, Clock, Star, FileCheck2 } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './About.module.css';

export default function About() {
  const { ref: imgRef, isVisible: imgVisible } = useIsVisible();
  const { ref: textRef, isVisible: textVisible } = useIsVisible();
  
  const parallaxRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * 0.08;
      parallaxRef.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`section-pad ${styles.about}`} id="about">
      <div className={`container ${styles.container}`}>
        <div 
          ref={imgRef} 
          className={`rv rv-left ${imgVisible ? 'vis' : ''} ${styles.aboutImgWrap}`}
        >
          <img 
            ref={parallaxRef}
            src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/681a77f732a0eede3a1cf087_jls-landscaping-and-pools-of-texoma-content-home-gallery-03-1920w.jpg" 
            alt="JLS Landscaping" 
            className={styles.aboutImg} 
          />
          <div className={styles.aboutBadge}>
            <span className={styles.since}>Est.</span>
            <span className={styles.yr}>1999</span>
          </div>
          <div className={styles.aboutDecor}></div>
        </div>

        <div ref={textRef} className={`rv rv-d2 ${textVisible ? 'vis' : ''}`}>
          <div className="sec-ey">Our Story</div>
          <h2 className="sec-t">Building Today for <em>Your Tomorrow</em></h2>
          <p className={styles.aboutText}>
            Since 1999, JLS Landscaping & Pools of Texoma has been committed to crafting superior outdoor living spaces. What started as founder Jason Bassermann working with a push mower, a weed-eater, and a Chevy pickup has grown into a thriving full-service operation with multiple specialized divisions.
          </p>
          <p className={styles.aboutText}>
            Supported by a team that includes Jason's wife, father, son, and long-term employees who have become family — we serve our community with honesty, professionalism, and outstanding craftsmanship.
          </p>
          <div className={styles.aboutPts}>
            <div className={`rv rv-d1 ${textVisible ? 'vis' : ''} ${styles.aboutPt}`}>
              <div className={styles.aboutPtIcon}><Users size={16} /></div>
              <span>Family Owned & Operated</span>
            </div>
            <div className={`rv rv-d2 ${textVisible ? 'vis' : ''} ${styles.aboutPt}`}>
              <div className={styles.aboutPtIcon}><Clock size={16} /></div>
              <span>25+ Years of Excellence</span>
            </div>
            <div className={`rv rv-d3 ${textVisible ? 'vis' : ''} ${styles.aboutPt}`}>
              <div className={styles.aboutPtIcon}><Star size={16} /></div>
              <span>5-Star Google Rated</span>
            </div>
            <div className={`rv rv-d4 ${textVisible ? 'vis' : ''} ${styles.aboutPt}`}>
              <div className={styles.aboutPtIcon}><FileCheck2 size={16} /></div>
              <span>Building Permits Handled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
