import { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';

function App() {

  useEffect(() => {
    document.title='Portfolio'
  }, [])

  return (
<>

<TopNav />
<HomePage />

</>
);
}

export default App;
