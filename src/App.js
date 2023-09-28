import "./App.css";
import { NewPage } from "./component/NewPage";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import Wishlist from "./component/Wishlist";
import Main from "./component/Main";
import CommingSoon from "./component/CommingSoon";
import Login from "./page/Login";
import Signup from "./page/Signup";
import ProtectedRoute from "./page/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Announcement from "./component/Announcement";

function App() {
  return (
    <div>
      <Announcement/>
      <Header/>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>} />
        <Route path="/pages/:id" element={<NewPage />} />
        <Route path="/pages/comming-soon" element={<CommingSoon/>} />
        <Route 
          path="/pages/links" 
          element={
            <ProtectedRoute>
              <Homepage/>
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </UserAuthContextProvider>
      <Footer/>
    </div>
  );
}

export default App;