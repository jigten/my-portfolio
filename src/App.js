import './App.css';
import { useEffect } from "react";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

function About() {
  return (
    <section class="about container">
      <h2>Ugyen Jigten Dorji</h2>
      <p>
        Soufflé sesame snaps dragée. Cotton candy bear claw jelly sweet roll jelly beans.
        Liquorice danish candy canes lollipop candy biscuit gingerbread cake.
        Sugar plum topping marshmallow dessert pudding donut croissant.
        </p>
    </section>
  )
}

function Contact() {
  return (
    <div>Contact</div>
  )
}

function Work() {
  return (
    <div>Work</div>
  )
}

function App() {

  useEffect(() => { document.body.style.backgroundColor = "#f5f5f5" }, [])

  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
