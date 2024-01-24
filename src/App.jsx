import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Snowfall from 'react-snowfall';
import DayNightToggle from 'react-day-and-night-toggle';

const App = () => {

    const storedTheme = localStorage.getItem('data-theme');
    const defaultDarkMode = storedTheme === 'dark';
  
    const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);
  
    useEffect(() => {
      window.matchMedia('(prefers-color-scheme : dark)').addEventListener('change', (e) => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        setIsDarkMode(newColorScheme === 'dark');
        localStorage.setItem('data-theme', newColorScheme);
        document.body.setAttribute('data-theme', localStorage.getItem('data-theme'));
      });
  
      // Cleanup event listener on component unmount
      return () => {
        window.matchMedia('(prefers-color-scheme : dark)').removeEventListener('change', () => {});
      };
    }, []);
  
    const handleChangeTheme = () => {
      const newTheme = isDarkMode ? 'light' : 'dark';
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('data-theme', newTheme);
      document.body.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            <DayNightToggle className='dark' size={20} onChange={handleChangeTheme} checked={isDarkMode} />
         {/* {   <Snowfall style={{ position: 'fixed',width: '100vw', height: '100vh'}} />} */}
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App;
