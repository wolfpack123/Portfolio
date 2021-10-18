import './App.css';
// import Navbar from "./components/Navbar";
// import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import React from 'react';
import Home from './components/pages';
import ContactPage from './components/Contact';
// import HeroSection from './components/HeroSection';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component = {Home} exact />
        <Route path="/contact" component = {ContactPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
