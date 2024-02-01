import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// add start
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// add end

// modify start
const container = document.getElementById('root')
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  
);
// modify end

reportWebVitals();
