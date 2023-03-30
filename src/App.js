import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Services from './components/services/Services';
import Career from './components/career/Career';
import Design from './components/design/Design';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App ()  {
  return (
    <>
    <Header/>
    <main className='man'>
    <Home/>
    <About/>
    <Skill/>
    <Services/>
    <Career/>
    <Design/>
    <Contact/>
    

    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App;
