import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/topbar/topbar";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Testmonials from "./components/testmonials/testmonials";
import Intro from "./components/intro/intro";
import Work from "./components/works/work";

import './app.scss'
import { useState } from 'react'
import  Menu  from "./components/menu/menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (

    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Work/> */}
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
