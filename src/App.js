import React, {useState} from "react";
import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import Auth from './components/Forms/Auth/auth'
import Authorization from "./components/Forms/Authorization/authorization";
import Order from "./components/Forms/Order/order";
<<<<<<< HEAD
import {Footer} from "./components/Footer/Footer"
=======
import AuthOrder from "./components/Forms/AuthOrder/authOrder";
>>>>>>> 299ccd85e32683823e783673ea0e436e6907d836
function App() {
  
  const [showAuth, setShowAuth] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showAuthOrders, setShowAuthOrders] = useState(false);
  const [orderTitle, setOrderTitle] = useState('')

  return (
    <div className="App">
      <Header
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
        setShowOrders={setShowOrders}
      />
      <Main
      setShowAuthOrders={setShowAuthOrders}
      setOrderTitle={setOrderTitle}
      />
      <Auth
        onClose={() => setShowAuth(false)}
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
        showAuth={showAuth}
      />
      <Authorization
        onClose={() => setShowAuthorization(false)}
        showAuthorization={showAuthorization}
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
      />
      <Order
      onClose={() => setShowOrders(false)}
      showOrders={showOrders}
      />
<<<<<<< HEAD
      <Footer/>
=======
      <AuthOrder
      onClose={() => setShowAuthOrders(false)}
      showAuthOrders={showAuthOrders}
      orderTitle={orderTitle}
      />
>>>>>>> 299ccd85e32683823e783673ea0e436e6907d836
    </div>
  );
}

export default App;
