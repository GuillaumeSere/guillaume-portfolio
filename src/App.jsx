import React, { useState } from 'react';
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

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? 'dark' : 'light'
  
      setIsDarkMode(newColorScheme === 'dark' ? true : false)
      localStorage.setItem('data-theme', newColorScheme)
      document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
    })
  
    const handleChangeTheme = () => {
      setIsDarkMode(!isDarkMode)
      if(!isDarkMode) {
        localStorage.setItem('data-theme', 'dark')
        document.body.setAttribute('data-theme', 'dark')
      } else {
        localStorage.setItem('data-theme', 'light')
        document.body.setAttribute('data-theme', 'light')
      }
    }

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
