import React, { useState } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Function to handle navigation
  const navigateTo = (page) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // First fade out
    document.body.classList.add('fade-transition');
    
    // After fade out, change the page
    setTimeout(() => {
      setActivePage(page);
      
      // After changing the page, fade back in
      setTimeout(() => {
        document.body.classList.remove('fade-transition');
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  // Render only the active page
  const renderActivePage = () => {
    switch(activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'cv':
        return <CV />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header activePage={activePage} onNavigate={navigateTo} />
      <div className="content-wrapper">
        <main className="page-container">
          {renderActivePage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
