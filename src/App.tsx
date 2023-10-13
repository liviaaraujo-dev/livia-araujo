import { Header } from "./components/Header";
import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  const [darkToggle] = React.useState(true)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
