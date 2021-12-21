import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CreateBlog, DetailBlog, Home } from '..';
import { Footer, Header } from '../../componentes';
import './MainApp.scss';

export default function MainApp() {
  return (
    <div className='main-app-wrapper'>
      <Header />
      <div className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path='/detail-blog' element={<DetailBlog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
