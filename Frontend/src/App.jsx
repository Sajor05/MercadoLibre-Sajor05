import { Home } from "./pages/Home/Home";
import { Login } from "./pages/accounts/signin/Login";
import { Register } from "./pages/accounts/signup/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/iniciar-sesion" element={<Login/>}></Route>
          <Route path="/registrate" element={<Register/>}></Route>
        </Routes>

        <div className="mt-[20px]">
          <h1>Footer</h1>
        </div>
      </BrowserRouter>      
    </AuthProvider>
  );
}

export default App;
