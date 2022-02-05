import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Retro from '../Retro';
import Planning from '../Planning';
import Kudos from '../Kudos';
import Home from '../Home';

function App() {
  return (
    <div>
      <h1>Welcome to Scrum Toolkit!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/retro/:id" element={<Retro />} />
        <Route path="/planning/:id" element={<Planning />} />
        <Route path="/kudos/:id" element={<Kudos />} />
      </Routes>
    </div>
  );
}

export default App;
