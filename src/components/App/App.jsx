import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import Header from '../Header/Header'

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
      </div>
    </Router>
  )
}

export default App;
