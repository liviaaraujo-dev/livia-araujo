import { Header } from "./components/Header";
import React from "react";
import { Home } from "./components/Home";

function App() {

  const [darkToggle, setDarkToggle] = React.useState(false)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
      <Home />
    </div>
  )
}

export default App;
