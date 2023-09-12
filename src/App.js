import "./App.css";
import { NewPage } from "./component/NewPage";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/pages/:id" element={<NewPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;