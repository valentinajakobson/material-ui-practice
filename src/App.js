import React from 'react';
import './App.css';
import 'typeface-roboto';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Catpage from './Components/Catpage';

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
        <Route exact path="/" component= {Home} />
        <Route exact path="/aboutus" component = {About} />
        <Route exact path="/contact" component = {Contact} />
        <Route path="/post/:id" component = {Catpage} />
    <Footer />
    </Router>
    </div>
  );
}

export default App;
