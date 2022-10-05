import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminInterface from './pages/admin/Admin';
import Home from './pages/home/Home';
import Legos from './pages/legos/Legos';
import Contact from './pages/contact/Contact';

const setBackgroundForWebsite = () => {
  const element = document.getElementById('root');
  element.style.boxSizing = 'border-box';
  element.style.backgroundAttachment = 'fixed';
  element.style.backgroundPosition = '50% 50%';
  element.style.backgroundImage = "url('/img/lego_banner.jpeg')";
  element.style.opacity = '80%';
};

setBackgroundForWebsite();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/legos' element={<Legos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin' element={<AdminInterface />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
