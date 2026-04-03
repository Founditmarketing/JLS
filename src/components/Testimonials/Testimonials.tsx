import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const { ref, isVisible } = useIsVisible();
  const [curSlide, setCurSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`section-pad ${styles.testi}`} id="reviews">
      <div className="container">
        <div ref={ref} className={`sec-header rv ${isVisible ? 'vis' : ''}`}>
          <div className="sec-ey">Client Love</div>
          <h2 className="sec-t">What Our Clients <em>Are Saying</em></h2>
        </div>
        
        <div className={`rv rv-d1 ${isVisible ? 'vis' : ''} ${styles.testiCarousel}`}>
          <div 
            className={styles.testiTrack} 
            style={{ transform: `translateX(-${curSlide * 100}%)` }}
          >
            <div className={styles.testiSlide}>
              <div className={styles.tCard}>
                <div className={styles.tQuote}>"</div>
                <div className={styles.tStars}>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                </div>
                <p className={styles.tText}>Jason and his crew are the absolute best. I had a sprinkler system installed covering 2.5 acres plus seeding — their charge was very competitive, thousands less than competitors. Highly recommend!</p>
                <div className={styles.tAuthor}>Thomas Carroll</div>
                <div className={styles.tRole}>Denison, Texas</div>
              </div>
              <div className={styles.tCard}>
                <div className={styles.tQuote}>"</div>
                <div className={styles.tStars}>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                </div>
                <p className={styles.tText}>To say the experience was amazing would be an understatement. Workers picked up after themselves daily, craftsmanship and attention to detail were flawless. My family was swimming in crystal clear Caribbean-colored water in weeks.</p>
                <div className={styles.tAuthor}>Tracy Goins</div>
                <div className={styles.tRole}>Pool Installation Client</div>
              </div>
              <div className={styles.tCard}>
                <div className={styles.tQuote}>"</div>
                <div className={styles.tStars}>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                </div>
                <p className={styles.tText}>JLS pool did a great job on my pool build. They are knowledgeable and their insight helped make our pool design easier and more practical. Absolutely worth the investment.</p>
                <div className={styles.tAuthor}>Kiran Karnik</div>
                <div className={styles.tRole}>Pool Build Client</div>
              </div>
            </div>
            
            <div className={styles.testiSlide}>
              <div className={styles.tCard}>
                <div className={styles.tQuote}>"</div>
                <div className={styles.tStars}>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                  <Star fill="currentColor" size={15}/>
                </div>
                <p className={styles.tText}>It was well worth the wait. They did an amazing job! Plus they helped this old gal out by filling and spreading out dirt where there once was a rickety fence. Thanks JLS — you guys ROCK!</p>
                <div className={styles.tAuthor}>Catherine Stokes</div>
                <div className={styles.tRole}>Fencing Client</div>
              </div>
              <div className={`${styles.tCard} ${styles.tCardDummy}`}>
                <div className={styles.dummyText}>Your Story<br/><em>Here</em></div>
                <a href="#contact" className="btn-p" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}>Get Started</a>
              </div>
              <div className={`${styles.tCard} ${styles.tCardDummy}`}>
                <div className={styles.dummyText}>Join Our<br/><em style={{color: 'var(--gold)'}}>5-Star Family</em></div>
              </div>
            </div>
          </div>
          
          <div className={styles.testiDots}>
            <button className={`${styles.testiDot} ${curSlide === 0 ? styles.active : ''}`} onClick={() => setCurSlide(0)}></button>
            <button className={`${styles.testiDot} ${curSlide === 1 ? styles.active : ''}`} onClick={() => setCurSlide(1)}></button>
          </div>
        </div>
      </div>
    </section>
  );
}
