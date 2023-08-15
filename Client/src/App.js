import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Imagebar from './Components/Imagebar';
import Table from './Components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Components/Carousel';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Carousel />
        <Imagebar />
        <Table />
       
        <Routes>
        
          {/* <Route path="/" element={<Carousel />} /> */}
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
