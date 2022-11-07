import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from './components/pages/Register';
import Home from './components/pages/Home';
import "./App.css";
import Market from './components/pages/Market';
import Contact from './components/pages/Contact';
import Land from './components/pages/Land';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/market" element={<Market/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/land" element={<Land/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App