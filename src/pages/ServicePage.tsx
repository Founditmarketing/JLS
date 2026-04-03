import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CallToAction from '../components/CallToAction/CallToAction';

export default function ServicePage() {
  const { serviceId } = useParams();
  
  // Minimal placeholder formatter
  const formattedTitle = serviceId 
    ? serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Service';

  return (
    <>
      <Helmet>
        <title>{formattedTitle} | JLS Landscaping & Pools</title>
        <meta name="description" content={`Expert ${formattedTitle.toLowerCase()} services in Sherman, TX by JLS Landscaping & Pools of Texoma.`} />
        <meta property="og:title" content={`${formattedTitle} | JLS Landscaping`} />
      </Helmet>

      <div style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} className="container text-center">
        <div className="sec-ey rv vis">Specialized Service</div>
        <h1 className="rv rv-d1 vis" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--ff-d)', marginBottom: '1.5rem', fontWeight: 300 }}>
          {formattedTitle} <em>Excellence</em>
        </h1>
        <p className="rv rv-d2 vis" style={{ color: 'var(--text-sec)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
          We provide unparalleled {formattedTitle.toLowerCase()} solutions tailored to your unique outdoor space. Our dedicated team applies 25+ years of experience to ensure pristine results that last a lifetime.
        </p>
        
        {/* Placeholder for future detailed content (drone footage, sliders, etc) */}
        <div className="rv rv-d3 vis" style={{ width: '100%', height: '400px', borderRadius: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'var(--text-muted)' }}>Detailed Project Case Study Area</span>
        </div>
      </div>

      <CallToAction />
    </>
  );
}
