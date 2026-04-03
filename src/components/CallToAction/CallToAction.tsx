import { useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';
import { useIsVisible } from '../../hooks/useIsVisible';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { ref, isVisible } = useIsVisible();

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    let w: number, h: number;
    const resize = () => {
      if(c.parentElement) {
        w = c.width = c.parentElement.offsetWidth;
        h = c.height = c.parentElement.offsetHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let reqId: number;
    const draw = (t: number) => {
      t *= 0.001;
      ctx.fillStyle = '#090f0c';
      ctx.fillRect(0, 0, w, h);
      
      const pts = [
        { x: w * 0.3 + Math.sin(t * 0.4) * w * 0.15, y: h * 0.5 + Math.cos(t * 0.3) * h * 0.3, col: 'rgba(171, 31, 46,.12)' },
        { x: w * 0.7 + Math.cos(t * 0.35) * w * 0.15, y: h * 0.4 + Math.sin(t * 0.45) * h * 0.25, col: 'rgba(200,149,58,.08)' },
        { x: w * 0.5 + Math.sin(t * 0.5) * w * 0.2, y: h * 0.6 + Math.cos(t * 0.25) * h * 0.2, col: 'rgba(0,150,160,.07)' }
      ];

      pts.forEach(p => {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 350);
        g.addColorStop(0, p.col);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 350, 0, Math.PI * 2);
        ctx.fill();
      });

      reqId = requestAnimationFrame(draw);
    };

    reqId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <section className={styles.cta} id="contact" ref={ref}>
      <canvas ref={canvasRef} className={styles.ctaGradient}></canvas>
      <div className={`container ${styles.ctaContainer}`}>
        <div className={`sec-ey rv ${isVisible ? 'vis' : ''}`} style={{ marginBottom: '1rem' }}>
          Ready to Transform Your Outdoor Space?
        </div>
        <h2 className={`rv rv-d1 ${isVisible ? 'vis' : ''}`}>
          Let's Build Your <em>Dream Backyard</em>
        </h2>
        <p className={`rv rv-d2 ${isVisible ? 'vis' : ''} ${styles.ctaDesc}`}>
          Contact JLS Landscaping & Pools of Texoma for a free consultation. Whether it's a custom pool, complete landscape redesign, or outdoor living space — we'll bring your vision to life.
        </p>
        <div className={`rv rv-d3 ${isVisible ? 'vis' : ''} ${styles.ctaActions}`}>
          <a href="tel:9038214792" className="btn-p" style={{ fontSize: '0.95rem', padding: '1rem 2.8rem' }}>
            <Phone size={18} /> Call (903) 821-4792
          </a>
          <a href="mailto:jlslandscape@gmail.com" className="btn-s" style={{ padding: '1rem 2.5rem' }}>
            <Mail size={16} /> Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
