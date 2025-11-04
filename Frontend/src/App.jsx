import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <div className="mt-[20px]">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
