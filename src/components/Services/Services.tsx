import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { Leaf, Droplets, SprayCan, Sprout, Sun, Fence, ArrowRight } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './Services.module.css';

const ServiceCard = ({ icon: Icon, title, desc, delayClass }: any) => {
  const { ref, isVisible } = useIsVisible();
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -8;
    cardRef.current.style.transform = `translateY(-6px) rotateY(${x}deg) rotateX(${y}deg)`;
    cardRef.current.style.setProperty('--mouse-x', `${((e.clientX - r.left) / r.width) * 100}%`);
    cardRef.current.style.setProperty('--mouse-y', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={cardRef} 
        className={`rv ${delayClass} ${isVisible ? 'vis' : ''} ${styles.srvCard}`}
      >
        <div className={styles.srvIcon}><Icon size={24} /></div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <a href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`} className={styles.srvLink}>
          Learn More <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default function Services() {
  const { ref, isVisible } = useIsVisible();

  return (
    <section className={`section-pad ${styles.services}`} id="services">
      <div className="container">
        <div ref={ref} className={`sec-header rv ${isVisible ? 'vis' : ''}`}>
          <div className="sec-ey">What We Do</div>
          <h2 className="sec-t">Complete Outdoor <em>Transformations</em></h2>
          <p className="sec-sub">
            From the ground up — we handle every aspect of your outdoor space with precision craftsmanship and decades of expertise.
          </p>
        </div>
        
        <div className={styles.srvGrid}>
          <ServiceCard 
            icon={Leaf} 
            title="Landscaping" 
            desc="Expert landscape design and installation that transforms your property. From lush gardens to stunning hardscapes — outdoor environments that elevate your curb appeal." 
            delayClass=""
          />
          <ServiceCard 
            icon={Droplets} 
            title="Pool Construction" 
            desc="Custom-designed inground pools built to your exact vision. From excavation to that first crystal-clear fill — pools your family will enjoy for generations." 
            delayClass="rv-d1"
          />
          <ServiceCard 
            icon={SprayCan} 
            title="Irrigation" 
            desc="Professional sprinkler system design and installation. Smart systems that save water, protect your investment, and keep your landscape thriving year-round." 
            delayClass="rv-d2"
          />
          <ServiceCard 
            icon={Sprout} 
            title="Pool Maintenance" 
            desc="Keep your pool pristine with expert maintenance. Regular cleaning, chemical balancing, equipment checks — crystal clear water, guaranteed." 
            delayClass="rv-d1"
          />
          <ServiceCard 
            icon={Sun} 
            title="Outdoor Living" 
            desc="Outdoor kitchens, pergolas, fire pits, patios — complete outdoor living spaces that bring your family together under the Texas sky." 
            delayClass="rv-d2"
          />
          <ServiceCard 
            icon={Fence} 
            title="Fencing" 
            desc="Quality fencing that provides privacy, security, and beauty. From classic wood to modern designs — built to withstand the Texas elements." 
            delayClass="rv-d3"
          />
        </div>
      </div>
    </section>
  );
}
