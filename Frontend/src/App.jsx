import "./App.css";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/cart/Cart";
import { AuthProvider } from "./context/AuthContext";
import { Login } from "./pages/accounts/signin/Login";
import { Register } from "./pages/accounts/signup/Register";
import { ProductViewCard } from "./models/productView/ProductViewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:_id" element={<ProductViewCard/>} />
          <Route path="/registrate" element={<Register/>}/>
          <Route path="/iniciar-sesion" element={<Login/>}/>
          <Route path="/carrito" element={<Cart/>}/>         
        </Routes>
      </BrowserRouter>      
    </AuthProvider>
  );
}

export default App;
