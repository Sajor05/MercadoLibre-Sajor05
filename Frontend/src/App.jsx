import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Accounts/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/iniciar-sesion" element={<Login></Login>}></Route>
        </Routes>
        <div className="mt-[20px]">
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
