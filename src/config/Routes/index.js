import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<MainApp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

        {/* <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        /> */}
      </Routes>
    </Router>
  );
}
