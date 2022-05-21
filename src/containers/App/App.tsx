import React from 'react';
import './bootstrap.css';
import './app.css';
import 'remixicon/fonts/remixicon.css';

import { Route, Routes } from 'react-router-dom';
import Board from '../Board';
import Home from '../Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/retro/:id" element={<Board />} />
    </Routes>
  );
}

export default App;
