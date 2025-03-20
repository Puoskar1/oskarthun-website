import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './i18n/i18n';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
