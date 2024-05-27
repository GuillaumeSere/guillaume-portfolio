import React, { useState, useEffect  } from 'react';
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

    useEffect(() => {
        document.body.setAttribute('data-theme', localStorage.getItem('data-theme'));

        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            cursor.setAttribute('style', 'top:' + (e.pageY - 20) + 'px; left:' + (e.pageX - 20) + 'px;');
        };

        const handleClick = () => {
            cursor.classList.add('expand');
            setTimeout(() => {
                cursor.classList.remove('expand');
            }, 500);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);

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
            <div className="cursor"></div>
        </>
    )
}

export default App;
