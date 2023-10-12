import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const categories = ["NODE", "REACT", "JS", "CSS", "HTML"];



  return (
    <div>
      <Header categories={categories}/>
      <Outlet/>
    </div>
  );
}

export default App;
