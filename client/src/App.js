import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Preferences from "./screens/Preferences";
import LoginScreen from "./screens/LoginScreen";
import NavBar from "./components/NavBar";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginScreen setToken={setToken} />;
  // }
  return (
    <div className="wrapper">
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="pref" element={<Preferences />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
