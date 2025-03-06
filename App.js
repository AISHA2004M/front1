import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Products from "./pages/Products"; // Home Page with Cart included
import Basket from "./pages/basket";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const addToBasket = (product) => {
    setBasketItems((prevBasket) => [...prevBasket, product]);
  };

  const removeFromBasket = (productId) => {
    setBasketItems((prevBasket) => prevBasket.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <Products 
              cartItems={cartItems} 
              addToCart={addToCart} 
              removeFromCart={removeFromCart} 
              addToBasket={addToBasket} // تم تمرير addToBasket هنا
            />
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/basket" 
          element={
            <Basket 
              basketItems={basketItems} 
              removeFromBasket={removeFromBasket} 
            />
          } 
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;