import React, { useState } from 'react';
import './App.css';
import Topbar from "./Components/Topbar/Topbar"
import Intro from "./Components/Intro/Intro"
import Portfolio from "./Components/Portfolio/Portfolio"
import Work from "./Components/Work/Work"
import Contact from "./Components/Contact/Contact"
import Menu from './Components/Menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Contact />
      </div>

    </div>
  );
}

export default App;