import React from "react";
import { Link } from "react-router-dom";

const Preferences = () => {
  return (
    <header>
    <div class="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 class="text-5xl font-bold mt-0 mb-6">Preferences</h1>
      <h3 class="text-3xl font-bold mb-8">Personalize your console</h3>
      <Link
              to="/"
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              View Dashboard 🪟
            </Link>
    </div>
  </header>
  );
};

export default Preferences;
