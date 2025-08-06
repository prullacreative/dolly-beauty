import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Social from './components/Social';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="min-h-screen bg-dolly-white">
      <Navbar />
      <main>
        
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Social />
        <Contact /> 
      
      </main>
      <Footer />
    </div>
  );
}

export default App;