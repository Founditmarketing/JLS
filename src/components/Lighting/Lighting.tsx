import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Lighting.module.css';

export default function Lighting() {
  const { ref, isVisible } = useIsVisible();

  return (
    <section className={`section-pad ${styles.partners}`}>
      <div className="container">
        <div ref={ref} className={`sec-header rv ${isVisible ? 'vis' : ''}`}>
          <div className="sec-ey">We partner with the best</div>
          <h2 className="sec-t">Trusted by <em>Industry Leaders</em></h2>
        </div>
        
        {/* Simple static grid for partner names/logos */}
        <div className={`rv rv-d1 ${isVisible ? 'vis' : ''} ${styles.logoGrid}`}>
          <div className={styles.logoItem}>Sollos Lighting</div>
          <div className={styles.logoItem}>ProLED</div>
          <div className={styles.logoItem}>Hayward</div>
          <div className={styles.logoItem}>Pentair</div>
          <div className={styles.logoItem}>Hunter</div>
        </div>
      </div>
    </section>
  );
}
