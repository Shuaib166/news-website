import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API_KEY; 
  apiKey = "8adf2fb6924b4ad49c5138f5faea9898";
  render() {
    return (
      <Router>
        
        <NavBar /> 
        <Routes> 
                        <Route path="/" element={<News key="general" pageSize={10} apiKey={this.apiKey} category="general" />} />
                        <Route path="/business" element={<News key="business" pageSize={10} apiKey={this.apiKey} category="business" />} />
                        <Route path="/entertainment" element={<News key="entertainment" pageSize={10} apiKey={this.apiKey} category="entertainment" />} />
                        <Route path="/general" element={<News key="general" pageSize={10} apiKey={this.apiKey} category="general" />} />
                        <Route path="/health" element={<News key="health" pageSize={10} apiKey={this.apiKey} category="health" />} />
                        <Route path="/science" element={<News key="science" pageSize={10} apiKey={this.apiKey} category="science" />} />
                        <Route path="/sports" element={<News key="sports" pageSize={10} apiKey={this.apiKey} category="sports" />} />
                        <Route path="/technology" element={<News key="technology" pageSize={10} apiKey={this.apiKey} category="technology" />} />
        </Routes>
      </Router>
    );
  }
}

