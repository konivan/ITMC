import React, { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Auth from "./components/Forms/Auth/auth";
import Authorization from "./components/Forms/Authorization/authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./components/Forms/Order/order";
import { Footer } from "./components/Footer/Footer";
import AuthOrder from "./components/Forms/AuthOrder/authOrder";
import Product from "./components/Forms/Product/product";
import { Team } from "./pages/Team/Team";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { LkCreateOrder } from "./pages/Lk/LkCreateOrder/LkCreateOrder";
import {Origin} from "./pages/Lk/Origin/Origin"
import {Orders} from "./pages/Lk/Orders/Orders"
import {Dogovor} from "./pages/Lk/Dogovor/Dogovor"
import {Accounts} from "./pages/Lk/Accounts/Accounts"

function App() {
  let window = document.getElementById("html-1");
  const URL = `${process.env.REACT_APP_URL}`;
  const [isAuth, setIsAuth] = useState(true);
  
  const [showAuth, setShowAuth] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showAuthOrders, setShowAuthOrders] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const [productImg, setProductImg] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productIcon, setProductIcon] = useState([]);

  const [orderType, setOrderType] = useState("");
  const [order, setOrder] = useState("");

  if (
    showAuth ||
    showAuthorization ||
    showOrders ||
    showAuthOrders ||
    showProduct
  ) {
    window.style = "overflow-y: hidden";
  } else window.style = "scroll-behavior: smooth;";
   
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          setShowAuth={setShowAuth}
          setShowAuthorization={setShowAuthorization}
          setShowAuthOrders={setShowAuthOrders}
          isAuth={isAuth}
          setIsAuth={setIsAuth}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setShowOrders={setShowOrders}
                setShowProduct={setShowProduct}
                setOrderType={setOrderType}
                setProductImg={setProductImg}
                setProductTitle={setProductTitle}
                setProductIcon={setProductIcon}
                setOrder={setOrder}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio URL={URL} />} />
          <Route path="/team" element={<Team />} />
          <Route path="/LkCreateOrder" element={<LkCreateOrder />} />
          <Route path="/Origin" element={<Origin />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Dogovor" element={<Dogovor />} />
          <Route path="/Accounts" element={<Accounts />} />

        </Routes>
        <Product
          onClose={() => setShowProduct(false)}
          showProduct={showProduct}
          productImg={productImg}
          productTitle={productTitle}
          productIcon={productIcon}
        />
        <Auth
          onClose={() => setShowAuth(false)}
          URL={URL}
          setShowAuth={setShowAuth}
          setShowAuthorization={setShowAuthorization}
          showAuth={showAuth}
          setIsAuth={setIsAuth}
        />
        <Authorization
          onClose={() => setShowAuthorization(false)}
          URL={URL}
          showAuthorization={showAuthorization}
          setShowAuth={setShowAuth}
          setShowAuthorization={setShowAuthorization}
        />
        <Order
          onClose={() => setShowOrders(false)}
          URL={URL}
          setShowOrders={setShowOrders}
          showOrders={showOrders}
          order={order}
        />
        <AuthOrder
          onClose={() => setShowAuthOrders(false)}
          URL={URL}
          setShowAuthOrders={setShowAuthOrders}
          setOrderType={setOrderType}
          showAuthOrders={showAuthOrders}
          orderType={orderType}
        />
        <Footer
          setShowAuthOrders={setShowAuthOrders}
          setShowAuth={setShowAuth}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
