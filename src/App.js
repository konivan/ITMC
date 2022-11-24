import React, {useState} from "react";
import './App.css';
import {Header} from './components/Header'
import {Main} from './components/Main'
import Auth from './components/Forms/Auth/auth'
import Authorization from "./components/Forms/Authorization/authorization";
function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [showAuthorization, setShowAuthorization] = useState(false);
  return (
    <div className="App">
      <Header
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
      />
      <Main />
      <Auth
        onClose={() => setShowAuth(false)}
        setShowAuth={setShowAuth}
        setShowAuthorization={setShowAuthorization}
        showAuth={showAuth}
      />
      <Authorization
        onClose={() => setShowAuthorization(false)}
        showAuthorization={showAuthorization}
      />
    </div>
  );
}

export default App;
