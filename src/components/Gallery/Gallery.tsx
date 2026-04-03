import { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Gallery.module.css';

const projects = [
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debbf4197a76ecab7cfb9c_541349420_1343777087756844_8414801115956248814_n.jpg', category: 'Pools' },
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debbee9e71254369fe3318_540925807_1343778411090045_9065809575784162561_n.jpg', category: 'Pools' },
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debbe3041679cf2c436566_534198367_1333688995432320_7382688681399216441_n.jpg', category: 'Landscaping' },
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debe31676d88b05c4fd26f_JLS%20Landscaping%20and%20Pools%20GBP%20Cover%20Photo.jpg', category: 'Outdoor Living' },
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debbe57f1ecf7dbf8855e7_535041968_1333689752098911_4836479719314589786_n.jpg', category: 'Pools' },
  { img: 'https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debb1ac10e7ff2bb80fd5c_541208568_1343778527756700_8907680504930733408_n.jpg', category: 'Landscaping' }
];

const categories = ['All', 'Pools', 'Landscaping', 'Outdoor Living'];

export default function Gallery() {
  const { ref: headerRef, isVisible: headerVisible } = useIsVisible();
  const { ref: gridRef, isVisible: gridVisible } = useIsVisible();
  
  const [filter, setFilter] = useState('All');
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <section className={`section-pad ${styles.gallery}`} id="gallery">
        <div className="container">
          <div ref={headerRef} className={`sec-header rv ${headerVisible ? 'vis' : ''}`}>
            <div className="sec-ey">Our Work</div>
            <h2 className="sec-t">Inspiration from <em>Our Projects</em></h2>
          </div>
          
          <div className={`rv rv-d1 ${headerVisible ? 'vis' : ''} ${styles.filterNav}`}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={gridRef} className={`rv rv-scale ${gridVisible ? 'vis' : ''} ${styles.galleryGrid}`}>
            {filtered.map((item, idx) => (
              <div key={item.img} className={styles.gItem} onClick={() => setLbIdx(idx)}>
                <img src={item.img} alt={`Project ${idx}`} loading="lazy" />
                <div className={styles.gLabel}>{item.category}</div>
                <div className={styles.gZoom}><Maximize2 size={20} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`${styles.lightbox} ${lbIdx !== null ? styles.active : ''}`} onClick={() => setLbIdx(null)}>
        {lbIdx !== null && (
          <>
            <button className={styles.lightboxClose} onClick={() => setLbIdx(null)}>
              <X size={20} />
            </button>
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxPrev}`} 
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx((lbIdx - 1 + filtered.length) % filtered.length);
              }}
            >
              <ChevronLeft size={20} />
            </button>
            
            <img src={filtered[lbIdx].img} alt="Lightbox view" onClick={(e) => e.stopPropagation()} />
            
            <button 
              className={`${styles.lightboxNav} ${styles.lightboxNext}`} 
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx((lbIdx + 1) % filtered.length);
              }}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    </>
  );
}
