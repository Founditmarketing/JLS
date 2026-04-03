import CustomCursor from './components/common/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import About from './components/About/About';
import Services from './components/Services/Services';
import Trust from './components/Trust/Trust';
import Gallery from './components/Gallery/Gallery';
import Lighting from './components/Lighting/Lighting';
import Testimonials from './components/Testimonials/Testimonials';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* Hide Custom Cursor on mobile devices using CSS in index.css or common logic */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Trust />
      <Gallery />
      <Lighting />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
