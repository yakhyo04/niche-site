import "./App.css";
import { NewPage } from "./component/NewPage";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import Wishlist from "./component/Wishlist";
import Main from "./component/Main";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/pages/links" element={<Homepage/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/pages/:id" element={<NewPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;