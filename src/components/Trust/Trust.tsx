import { Star, MessageSquare, Clock, FileCheck2, ShieldCheck } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Trust.module.css';

export default function Trust() {
  const { ref, isVisible } = useIsVisible();

  return (
    <section className={`section-pad ${styles.trust}`}>
      <div className="container">
        <div ref={ref} className={`sec-header rv ${isVisible ? 'vis' : ''}`}>
          <div className="sec-ey">The JLS Difference</div>
          <h2 className="sec-t">Why Homeowners <em>Trust Us</em></h2>
        </div>
        
        <div className={styles.trustGrid}>
          <div className={`rv ${isVisible ? 'vis' : ''} ${styles.trustCard}`}>
            <div className={styles.trustIcon}><Star size={20} /></div>
            <div className={styles.trustTextWrap}>
              <h4>Exceptional Craftsmanship</h4>
              <p>High-quality materials and precise workmanship that stands the test of time.</p>
            </div>
          </div>
          <div className={`rv rv-d1 ${isVisible ? 'vis' : ''} ${styles.trustCard}`}>
            <div className={styles.trustIcon}><MessageSquare size={20} /></div>
            <div className={styles.trustTextWrap}>
              <h4>Transparent Communication</h4>
              <p>Open, honest updates from start to finish — no surprises, no stress.</p>
            </div>
          </div>
          <div className={`rv rv-d2 ${isVisible ? 'vis' : ''} ${styles.trustCard}`}>
            <div className={styles.trustIcon}><Clock size={20} /></div>
            <div className={styles.trustTextWrap}>
              <h4>Efficient Process</h4>
              <p>Well-defined plans that save time and minimize disruptions to your life.</p>
            </div>
          </div>
          <div className={`rv rv-d3 ${isVisible ? 'vis' : ''} ${styles.trustCard}`}>
            <div className={styles.trustIcon}><FileCheck2 size={20} /></div>
            <div className={styles.trustTextWrap}>
              <h4>Permits Handled</h4>
              <p>We obtain all building permits so you focus on watching your dream come to life.</p>
            </div>
          </div>
          <div className={`rv rv-d4 ${isVisible ? 'vis' : ''} ${styles.trustCard}`}>
            <div className={styles.trustIcon}><ShieldCheck size={20} /></div>
            <div className={styles.trustTextWrap}>
              <h4>Warranty Protection</h4>
              <p>Comprehensive warranties give you confidence and peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
