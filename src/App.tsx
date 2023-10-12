import { Header } from "./components/Header";
import React from "react";

function App() {

  const [darkToggle, setDarkToggle] = React.useState(false)

  return (
    <div className={darkToggle ? 'dark' : 'light'} >
      <Header />
    </div>
  )
}

export default App;
