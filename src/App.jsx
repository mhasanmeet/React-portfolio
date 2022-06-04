import React from 'react';
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/ProductList"
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/Toggle"
import { ThemeContext } from './context';
import { useContext } from "react"


const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
  <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
  </div>
  );
};

export default App;