import { ArrowRight } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Lighting.module.css';

export default function Lighting() {
  const { ref: textRef, isVisible: textVisible } = useIsVisible();
  const { ref: imgRef, isVisible: imgVisible } = useIsVisible();

  return (
    <section className={`section-pad ${styles.lighting}`}>
      <div className={`container ${styles.container}`}>
        <div ref={textRef} className={`rv ${textVisible ? 'vis' : ''}`}>
          <div className="s-eyebrow sec-ey">Featured Partner</div>
          <h2 className="s-title sec-t">Sollos <em>Landscape Lighting</em></h2>
          <p className={styles.aboutText}>
            A perfect fusion of elegant design and ProLED performance to illuminate and enhance modern landscapes. Engineered for durability and style — creating stunning outdoor environments with exceptional clarity and brilliance.
          </p>
          <a href="#contact" className="btn-p" style={{ marginTop: '1.5rem' }}>
            Ask About Lighting <ArrowRight size={18} />
          </a>
        </div>
        
        <div ref={imgRef} className={`rv rv-d2 ${imgVisible ? 'vis' : ''} ${styles.lightingVis}`}>
          <div className={styles.lightingImg}>
            <img src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/681a56e8f8820479e12adaea_Sound-by-Vista.png" alt="Sollos Sound" loading="lazy" />
          </div>
          <div className={styles.lightingImg}>
            <img src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/681a56e8da514470412b1bd1_Step-Lights.png" alt="Step Lights" loading="lazy" />
          </div>
          <div className={styles.lightingImg}>
            <img src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/681a56e8d8dbad3b1c42faa0_Path-Lights.png" alt="Path Lights" loading="lazy" />
          </div>
          <div className={styles.lightingImg}>
            <img src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/681a56e7d9e35f192f309923_Infratech-Image-scaled.jpg" alt="Infratech" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
