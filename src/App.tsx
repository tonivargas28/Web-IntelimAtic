import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingChatbot from './components/floatingChatbot';
function App() {
  useEffect(() => {
    // Update document title
    document.title = 'IntelimAtic';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <About />
        <Contact />
        <FloatingChatbot />
      </main>
      <Footer />

    </div>
  );
}

export default App;