import { useEffect } from 'react';

import Aos from 'aos';

import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contact from './components/UI/Contact';
import Hero from './components/UI/Hero';
import Portofolio from './components/UI/Portofolio';
import Services from './components/UI/Services';

function App() {
  useEffect(()=>{
    Aos.init();
  }, []);
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
      </>
  );
};

export default App;
