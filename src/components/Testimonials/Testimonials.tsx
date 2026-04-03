import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "Jason and his crew are the absolute best. I had a sprinkler system installed in my front and back yard covering 2.5 acres plus seeding for lawn. Their charge was very competitive, thousands less than competitors. I highly recommend this company.",
    author: "Thomas Carroll",
    role: "Denison, Texas"
  },
  {
    text: "Hired JLS Landscaping to install my inground Pool. To say the experience was amazing would be an understatement. Workers picked up after themselves daily, craftsmanship & attention to detail were flawless. My family was swimming in weeks in crystal clear Caribbean-colored water.",
    author: "Tracy Goins",
    role: "Pool Installation Client"
  },
  {
    text: "Though it took a little extra time before they could start my project… it was well worth the wait. They did an amazing job! Plus they helped this old gal out by filling and spreading out dirt where there once was a rickety fence. Thanks JLS!",
    author: "Catherine Stokes",
    role: "Fencing & Landscaping Client"
  },
  {
    text: "JLS pool did a good job on my pool build. They are knowledgeable and their insight helped make our pool design easier and more practical. The final result exceeded our expectations.",
    author: "Kiran Karnik",
    role: "Pool Build Client"
  }
];

export default function Testimonials() {
  const { ref, isVisible } = useIsVisible();
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurSlide((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`section-pad ${styles.testi}`} id="reviews">
      <div className="container" style={{ maxWidth: '900px' }}>
        <div ref={ref} className={`sec-header rv ${isVisible ? 'vis' : ''}`}>
          <div className="sec-ey">Client Love</div>
          <h2 className="sec-t">What Our Clients <em>Are Saying</em></h2>
        </div>
        
        <div className={`rv rv-d1 ${isVisible ? 'vis' : ''} ${styles.testiCarousel}`}>
          <div className={styles.testiStack}>
            {reviews.map((r, i) => (
              <div 
                key={i} 
                className={`${styles.tCard} ${i === curSlide ? styles.active : ''}`}
              >
                <div className={styles.tQuote}>"</div>
                <div className={styles.tStars}>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                  <Star fill="currentColor" size={16}/>
                </div>
                <p className={styles.tText}>{r.text}</p>
                <div className={styles.tAuthor}>{r.author}</div>
                <div className={styles.tRole}>{r.role}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.testiDots}>
            {reviews.map((_, i) => (
              <button 
                key={i}
                aria-label={`Show slide ${i + 1}`} 
                className={`${styles.testiDot} ${curSlide === i ? styles.active : ''}`} 
                onClick={() => setCurSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
