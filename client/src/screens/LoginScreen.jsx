import React, { useState } from "react";
import HealthCare from "../assets/healthcare.svg";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginScreen = ({ setToken }) => {
  const [tryAgain, setTryAgain] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token.isauth) {
      //alert("Welcome!");
      setToken(token);
    } else {
      //alert("Not Welcome");
      setTryAgain(() => true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-16 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img src={HealthCare} alt="health-care" className="w-12 h-15 mb-5" />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" for="email">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setUserName(e.target.value)}
              />
              {/* <span className="text-xs tracking-wide text-red-600">
                Email field is required{" "}
              </span> */}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className="text-xs tracking-wide text-red-600">
              {tryAgain ? "Username or password incorrect" : " "}
            </span>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginScreen.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginScreen;
