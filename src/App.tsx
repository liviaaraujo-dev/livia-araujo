import { Header } from "./components/Header";
import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";

function App() {

  const [darkToggle, setDarkToggle] = React.useState(true)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
      <Home />
      <About/>
    </div>
  )
}

export default App;
