import React from 'react'
import './App.scss';
import {Routes , Route} from 'react-router-dom'
import Galery from './components/galery/Galery';
import Home from './components/home/Home';
import Price from './components/price/Price';
import Contact from './components/contact/Contact';
import Notfound from './components/notfound/Notfound';
import About from './components/about/About';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/galery" element={<Galery/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/price" element={<Price/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Notfound/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
