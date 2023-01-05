import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from "./components/pages/Principal/Index";
import Clothing from "./components/pages/Clothing/Index";
import Equipment from "./components/pages/Equipment/Index";
import Footwear from "./components/pages/Footwear/Index";
import Cart from './components/pages/cart/Index';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CartProvider from './Context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/clothing" element={<Clothing />}/>
          <Route path="/footwear" element={<Footwear />}/>
          <Route path="/equipment" element={<Equipment />}/>
          <Route path="/shop" element={<Cart />}/>
        </Routes>
      </Router>
    </CartProvider>
)

