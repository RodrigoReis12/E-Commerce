import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./components/pages/Principal/Index";
import Clothing from "./components/pages/Clothing/Index";
import Equipment from "./components/pages/Equipment/Index";
import Footwear from "./components/pages/Footwear/Index";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
          <Routes>
            <Route path="/E-commerce" element={<Home />}/>
            <Route path="/clothing" element={<Clothing />}/>
            <Route path="/footwear" element={<Footwear />}/>
            <Route path="/equipment" element={<Equipment />}/>
          </Routes>
    </Router>
  </div>
);

