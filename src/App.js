import React, {useState} from "react";
import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import Auth from './components/Forms/Auth/auth'
import Authorization from "./components/Forms/Authorization/authorization";
import Order from "./components/Forms/Order/order";
import {Footer} from "./components/Footer/Footer"
function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  return (
    <div className="App">
      <Header
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
        setShowOrders={setShowOrders}
      />
      <Main/>
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
      setShowOrders={setShowOrders}
      showOrders={showOrders}
      />
      <Footer/>
    </div>
  );
}

export default App;
