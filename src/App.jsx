import React from 'react';
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import ProductList from "./components/productList/ProductList"
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/Toggle"


const App = () => {
  return (
  <div>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  );
};

export default App;