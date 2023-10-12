import { Header } from "./components/Header";
import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

function App() {

  const [darkToggle, setDarkToggle] = React.useState(true)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App;
