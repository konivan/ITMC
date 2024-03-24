import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import Product from "./components/Forms/Product/product";
import { Team } from "./pages/Team/Team";
import { Portfolio } from "./pages/portfolio/portfolio";
import Page404 from "./pages/Page404/Page404";

function App() {
  let window = document.getElementById("html-1");

  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("adress")
  );

  const [showOrders, setShowOrders] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const [productImg, setProductImg] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productIcon, setProductIcon] = useState([]);
  
  window.style = "scroll-behavior: smooth;"
  if (showProduct) {
    window.style = "overflow-y: hidden";
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          setUserAddress={setUserAddress}
          userAddress={userAddress}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                setShowProduct={setShowProduct}
                setProductImg={setProductImg}
                setProductTitle={setProductTitle}
                setProductIcon={setProductIcon}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/*" element={<Page404/>}/>
        </Routes>
        <Product
          onClose={() => setShowProduct(false)}
          showProduct={showProduct}
          productImg={productImg}
          productTitle={productTitle}
          productIcon={productIcon}
        />
        <Footer
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
