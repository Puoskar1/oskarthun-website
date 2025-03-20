import React, { useState, useEffect } from 'react';
// Remove unused imports
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
  
  // Create refs for each section with lower threshold for better detection
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3, initialInView: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: cvRef, inView: cvInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  // Update active page based on which section is in view
  useEffect(() => {
    if (homeInView) setActivePage('home');
    else if (aboutInView) setActivePage('about');
    else if (cvInView) setActivePage('cv');
    else if (contactInView) setActivePage('contact');
  }, [homeInView, aboutInView, cvInView, contactInView]);

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
    setActivePage(page);
    // Scroll to the appropriate section
    document.getElementById(page).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`App ${isScrolling ? 'scrolling' : ''}`}>
      <Header activePage={activePage} onNavigate={navigateTo} />
      <main>
        <div id="home" ref={homeRef} className={`page-section ${activePage === 'home' ? 'active' : 'inactive'}`}>
          <Home />
        </div>
        
        <div id="about" ref={aboutRef} className={`page-section ${activePage === 'about' ? 'active' : 'inactive'}`}>
          <About />
        </div>
        
        <div id="cv" ref={cvRef} className={`page-section ${activePage === 'cv' ? 'active' : 'inactive'}`}>
          <CV />
        </div>
        
        <div id="contact" ref={contactRef} className={`page-section ${activePage === 'contact' ? 'active' : 'inactive'}`}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
