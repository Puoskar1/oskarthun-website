import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n/i18n';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Create refs for each section with lower threshold for better detection
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3, initialInView: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: cvRef, inView: cvInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  // Update active page based on which section is in view, but only if not transitioning
  useEffect(() => {
    if (isTransitioning) return;
    
    if (homeInView) setActivePage('home');
    else if (aboutInView) setActivePage('about');
    else if (cvInView) setActivePage('cv');
    else if (contactInView) setActivePage('contact');
  }, [homeInView, aboutInView, cvInView, contactInView, isTransitioning]);

  // Handle scroll events for fade effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the timeout if it exists
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }
      
      // Set a timeout to remove the fade effect after scrolling stops
      window.scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle manual navigation
  const navigateTo = (page) => {
    // Prevent navigation during transitions
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActivePage(page);
    
    // Wait for the state to update before scrolling
    setTimeout(() => {
      const element = document.getElementById(page);
      if (element) {
        // Disable the intersection observer temporarily
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
        
        // Re-enable the intersection observer after scrolling completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 800);
      }
    }, 50);
  };

  return (
    <div className={`App ${isScrolling ? 'scrolling' : ''}`}>
      <Header activePage={activePage} onNavigate={navigateTo} />
      <div className="content-wrapper">
        <main>
          <section id="home" ref={homeRef} className={`page-section ${activePage === 'home' ? 'active' : 'inactive'}`}>
            <Home />
          </section>
          
          <section id="about" ref={aboutRef} className={`page-section ${activePage === 'about' ? 'active' : 'inactive'}`}>
            <About />
          </section>
          
          <section id="cv" ref={cvRef} className={`page-section ${activePage === 'cv' ? 'active' : 'inactive'}`}>
            <CV />
          </section>
          
          <section id="contact" ref={contactRef} className={`page-section ${activePage === 'contact' ? 'active' : 'inactive'}`}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
