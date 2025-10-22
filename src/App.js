import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <Router>
        
        <NavBar />  
        <Routes> 
                        <Route path="/" element={<News key="general" pageSize={10} category="general" />} />
                        <Route path="/business" element={<News key="business" pageSize={10} category="business" />} />
                        <Route path="/entertainment" element={<News key="entertainment" pageSize={10} category="entertainment" />} />
                        <Route path="/general" element={<News key="general" pageSize={10} category="general" />} />
                        <Route path="/health" element={<News key="health" pageSize={10} category="health" />} />
                        <Route path="/science" element={<News key="science" pageSize={10} category="science" />} />
                        <Route path="/sports" element={<News key="sports" pageSize={10} category="sports" />} />
                        <Route path="/technology" element={<News key="technology" pageSize={10} category="technology" />} />
        </Routes>
      </Router>
    );
  }
}

