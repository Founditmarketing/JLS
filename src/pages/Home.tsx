import CustomCursor from '../components/common/CustomCursor';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Trust from '../components/Trust/Trust';
import Gallery from '../components/Gallery/Gallery';
import Lighting from '../components/Lighting/Lighting';
import Testimonials from '../components/Testimonials/Testimonials';
import CallToAction from '../components/CallToAction/CallToAction';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>JLS Landscaping & Pools of Texoma | Sherman TX</title>
        <meta name="description" content="Serving North Texas since 1999. Expert pool construction, landscaping, irrigation, outdoor living, and fencing. Sherman's highest rated hardscape builders." />
        <meta property="og:title" content="JLS Landscaping & Pools of Texoma" />
        <meta property="og:description" content="Custom pool builders and premium landscape design in Sherman, Texas. 25+ years of excellence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jlslandscapes.com/" />
        <meta property="og:image" content="https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debe31676d88b05c4fd26f_JLS%20Landscaping%20and%20Pools%20GBP%20Cover%20Photo.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "JLS Landscaping & Pools of Texoma",
            "image": "https://cdn.prod.website-files.com/6818f555f81a612db6b0a680/68debe31676d88b05c4fd26f_JLS%20Landscaping%20and%20Pools%20GBP%20Cover%20Photo.jpg",
            "@id": "https://www.jlslandscapes.com/",
            "url": "https://www.jlslandscapes.com/",
            "telephone": "(903) 821-4792",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3409 N Heritage Pkwy",
              "addressLocality": "Sherman",
              "addressRegion": "TX",
              "postalCode": "75092",
              "addressCountry": "US"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "17:00"
            },
            "sameAs": [
              "https://www.facebook.com/JLSlandscape/"
            ]
          })}
        </script>
      </Helmet>

      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Trust />
      <Gallery />
      <Lighting />
      <Testimonials />
      <CallToAction />
    </>
  );
}
