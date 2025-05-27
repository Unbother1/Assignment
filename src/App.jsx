import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import User from "./pages/user";
import Product from "./pages/Product";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";



function App() {
  const [firstName, setFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("")
  return (
    
    <>
      <Provider store={store}>
        <UserProvider>
          <Navbar firstName={firstName} userEmail={userEmail} />
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/login" element={<Login setFirstName={setFirstName} setUserEmail={setUserEmail}/>}/>
            <Route path="/signup" element= {<Signup />}/>
            <Route path="/user" element={<User/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/postpage" element={<PostPage/>} />
            <Route path="/counter" element={<Counter/>} />
            <Route path="/todo" element={<Todo/>} />

          </Routes>
        </UserProvider>
      </Provider>
    </>
)}

export default App;
