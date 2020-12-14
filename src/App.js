import './App.css';
import { NavBar, Skills, Contact, Work, Header } from './components';
import { useEffect } from 'react';

function App() {

  useEffect(() => { document.body.style.backgroundColor = "#f5f5f5" }, [])

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <Work></Work>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
