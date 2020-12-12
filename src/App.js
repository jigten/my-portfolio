import './App.css';
import { NavBar, About, Contact, Work, Header } from './components';
import { useEffect } from 'react';

function App() {

  useEffect(() => { document.body.style.backgroundColor = "#f5f5f5" }, [])

  return (
    <div className='App'>
      <NavBar></NavBar>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
