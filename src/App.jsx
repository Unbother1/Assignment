import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/user";
import Product from "./pages/Product";



function App() {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element= {<Signup />}/>
      <Route path="/user" element={<User/>} />
      <Route path="/product" element={<Product/>} />
    </Routes>
)}

export default App;
