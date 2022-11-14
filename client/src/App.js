import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Preferences from "./screens/Preferences";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProtectedRoute from "./routing/ProtectedRoute";
import NavBar from "./components/NavBar";
import Appointments from "./screens/Appointments";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <LoginScreen setToken={setToken} />;
  // }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          {/* These routes requires login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/user-profile" element={<ProfileScreen />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="pref" element={<Preferences />} />
            <Route path="appoint" element={<Appointments />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
