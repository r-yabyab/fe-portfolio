import { useEffect, useState, useRef } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';

function App() {

  const [detectScrollPosition, setDetectScrollPosition] = useState(0)


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
    document.title='Portfolio'
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
  }


  return (
    <>

      <TopNav
        scrollToTop={scrollToTop}
        scrollToProjects={scrollToProjects}
        detectScrollPosition={detectScrollPosition} 
        scrollToBottom={scrollToBottom}
        />
      {/* <div className='fixed top-[50%] z-50 text-lg text-green-400'>penis{detectScrollPosition}</div> */}
      <HomePage
        projectsRef={projectsRef}
        scrollToTop={scrollToTop}
      />

    </>
  );
}

export default App;
