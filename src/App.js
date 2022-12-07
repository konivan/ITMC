import React, { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import Auth from "./components/Forms/Auth/auth";
import Authorization from "./components/Forms/Authorization/authorization";
import Order from "./components/Forms/Order/order";
import {Footer} from "./components/Footer/Footer"
import AuthOrder from "./components/Forms/AuthOrder/authOrder";
import Product from "./components/Forms/Product/product";

function App() {

  let window = document.getElementById('html-1');
  const URL = "http://185.26.96.45:8000/account/";

  const [showAuth, setShowAuth] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showAuthOrders, setShowAuthOrders] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const [productImg, setProductImg] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productIcon, setProductIcon] = useState([]);

  const [orderType, setOrderType] = useState('');

  if (showAuth || showAuthorization || showOrders || showAuthOrders || showProduct) {
    window.style = 'overflow-y: hidden';
  } else window.style = 'scroll-behavior: smooth;';

  return (
    <div className="App">
      <Header
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
        setShowOrders={setShowOrders}
      />
      <Main
        setShowAuthOrders={setShowAuthOrders}
        setShowProduct={setShowProduct}
        setOrderType={setOrderType}
        setProductImg={setProductImg}
        setProductTitle={setProductTitle}
        setProductIcon={setProductIcon}
      />

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
      />
      <Authorization
        onClose={() => setShowAuthorization(false)}
        URL={URL}
        showAuthorization={showAuthorization}
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
      />
      <Order onClose={() => setShowOrders(false)} URL={URL} setShowOrders={setShowOrders} showOrders={showOrders} />
      <AuthOrder
        onClose={() => setShowAuthOrders(false)}
        URL={URL}
        setShowAuthOrders={setShowAuthOrders}
        setOrderType={setOrderType}
        showAuthOrders={showAuthOrders}
        orderType={orderType}
      />
       <Footer setShowOrders={setShowOrders} setShowAuth={setShowAuth} />
    </div>
  );
}

export default App;
