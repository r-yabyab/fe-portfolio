import { useEffect, useState, useRef } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Projects from './components/subpages/Projects';
import OpenSource from './components/subpages/OpenSource';
import Skills from './components/subpages/Skills';
import Aboutme from './components/subpages/Aboutme';
import BottomHeader from './components/BottomHeader';
import Directories from './components/Directories';

function App() {

  const [detectScrollPosition, setDetectScrollPosition] = useState(0)
  const [contactClick, setContactClick] = useState(false)




  useEffect(() => {
    const handleScroll = () => {
      setDetectScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    document.title='Roderick Cayabyab'
  }, [])


  const projectsRef = useRef(null)

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'instant' });
    }
  };

  const scrollToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }

  const scrollToBottom = (e) => {
    window.scrollTo(0, document.body.scrollHeight);
    setContactClick(true)
    setTimeout(() => {
      setContactClick(false);
    }, 1000);
  }


  return (
    <>

      <TopNav
        scrollToTop={scrollToTop}
        scrollToProjects={scrollToProjects}
        detectScrollPosition={detectScrollPosition} 
        scrollToBottom={scrollToBottom}
        contactClick={contactClick}
        />
      {/* <div className='fixed top-[50%] z-50 text-lg text-green-400'>penis{detectScrollPosition}</div> */}
      {/* <HomePage
        projectsRef={projectsRef}
        scrollToTop={scrollToTop}
        contactClick={contactClick}
      /> */}

      <Routes>
      <Route path='/' element={<HomePage 
        projectsRef={projectsRef}
        scrollToTop={scrollToTop}
        contactClick={contactClick}/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/opensource' element={<OpenSource/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/aboutme' element={<Aboutme/>} />
      </Routes>

      <Directories scrollToTop={scrollToTop} />
      <BottomHeader />

    </>
  );
}

export default App;
