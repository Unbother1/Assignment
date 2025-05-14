import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/user";
import Product from "./pages/Product";
import FacebookPost from "./pages/Posts";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element= {<Signup />}/>
      <Route path="/user" element={<User/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/facebookpost" element={<FacebookPost/>} />
    </Routes>
)}

export default App;
