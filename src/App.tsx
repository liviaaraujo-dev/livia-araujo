import { Header } from "./components/Header";
import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {

  const [darkToggle] = React.useState(true)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
