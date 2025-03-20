import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  
  // Create refs for each section
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.5 });
  const [cvRef, cvInView] = useInView({ threshold: 0.5 });
  const [contactRef, contactInView] = useInView({ threshold: 0.5 });

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

  return (
    <div className={`App ${isScrolling ? 'scrolling' : ''}`}>
      <Header activePage={activePage} />
      <main>
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div ref={homeRef}>
                <Home />
              </div>
            </motion.div>
          )}
          
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div ref={aboutRef}>
                <About />
              </div>
            </motion.div>
          )}
          
          {activePage === 'cv' && (
            <motion.div
              key="cv"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div ref={cvRef}>
                <CV />
              </div>
            </motion.div>
          )}
          
          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div ref={contactRef}>
                <Contact />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
