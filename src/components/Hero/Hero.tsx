import { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

import { useCounters } from '../../hooks/useCounters';
import styles from './Hero.module.css';

interface StatProps { target: number; label: string; suffix?: string; decimal?: boolean; raw?: boolean; }
const StatCounter = ({ target, label, suffix = '', decimal = false, raw = false }: StatProps) => {
  const { ref, value } = useCounters(target, 1800, decimal);
  
  return (
    <div className={styles.stat} ref={ref}>
      <div className={styles.statN}>
        {raw ? target : value}{suffix}
      </div>
      <div className={styles.statL}>{label}</div>
    </div>
  );
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const cols = ['rgba(171, 31, 46,', 'rgba(200,149,58,', 'rgba(0,120,130,'];
    const ripples = Array.from({ length: 6 }).map((_, i) => ({
      x: Math.random() * w, 
      y: Math.random() * h,
      r: 100 + Math.random() * 200, 
      maxR: 300 + Math.random() * 300,
      speed: 0.15 + Math.random() * 0.25,
      col: cols[i % cols.length],
      phase: Math.random() * Math.PI * 2,
      drift: { x: (Math.random() - 0.5) * 0.3, y: (Math.random() - 0.5) * 0.2 }
    }));

    let reqId: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ripples.forEach(rp => {
        rp.phase += rp.speed * 0.01;
        rp.x += rp.drift.x; 
        rp.y += rp.drift.y;
        if (rp.x < -100) rp.x = w + 100;
        if (rp.x > w + 100) rp.x = -100;
        if (rp.y < -100) rp.y = h + 100;
        if (rp.y > h + 100) rp.y = -100;
        
        const pulse = Math.sin(rp.phase) * 0.3 + 0.7;
        const radius = rp.r + (rp.maxR - rp.r) * pulse;
        const grad = ctx.createRadialGradient(rp.x, rp.y, 0, rp.x, rp.y, radius);
        
        grad.addColorStop(0, rp.col + (0.04 * pulse) + ')');
        grad.addColorStop(0.5, rp.col + (0.02 * pulse) + ')');
        grad.addColorStop(1, rp.col + '0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath(); 
        ctx.arc(rp.x, rp.y, radius, 0, Math.PI * 2); 
        ctx.fill();
      });
      reqId = requestAnimationFrame(draw);
    }
    
    reqId = requestAnimationFrame(draw);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.rippleCanvas}></canvas>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroGridBg}></div>
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>Sherman, TX — Since 1999</div>
          <h1>Custom Pools, <strong>Landscapes</strong> & Outdoor Living</h1>
          <p className={styles.heroDesc}>
            Transforming North Texas properties into stunning outdoor sanctuaries. 
            From custom pools to manicured landscapes — 25+ years of craftsmanship your neighbors envy.
          </p>
          <div className={styles.heroActions}>
            <a href="tel:9038214792" className="btn-p">
              Get a Free Quote <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-s">Explore Services</a>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <img 
            src="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debb1ac10e7ff2bb80fd5c_541208568_1343778527756700_8907680504930733408_n.jpg" 
            alt="JLS Pool and Landscaping" 
            className={styles.heroImgMain} 
          />
          <div className={styles.heroFloat}>
            <div className={styles.heroFloatIcon}><Star size={22} fill="currentColor" /></div>
            <div>
              <div className={styles.lbl}>Google Rating</div>
              <div className={styles.val}>5.0 ★</div>
            </div>
          </div>
          <div className={styles.heroFloat2}>
            <div className={styles.num}>25+</div>
            <div className={styles.lbl}>Years</div>
          </div>
        </div>
      </div>
      
      <div className={styles.heroStats}>
        <div className={`container ${styles.statsContainer}`}>
          <StatCounter target={25} suffix="+" label="Years Experience" />
          <StatCounter target={1999} raw={true} label="Established" />
          <StatCounter target={5} decimal={true} suffix=".0" label="Google Rating" />
          <StatCounter target={6} label="Core Services" />
        </div>
      </div>
    </section>
  );
}
