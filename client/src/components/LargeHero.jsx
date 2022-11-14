import React from "react";
import { Link } from "react-router-dom";
const LargeHero = ({ name, catogery }) => {
  const ViewOrBook = catogery === "Doctor" ? "View" : "Book";
  if (catogery === "Doctor") {
    return (
      <header>
        <div class="text-center bg-gray-50 text-gray-800 py-20 px-6 dark:bg-gray-800">
          <h1 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Hey there, Doc!
          </h1>
          <h1 class="text-2xl mb-1 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Review the appointments by clicking the button below
          </h1>
          <Link
            to="appoint"
            className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-gray-800"
          >
            Your Appointments
          </Link>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div class="text-center bg-gray-50 text-gray-800 py-20 px-6 dark:bg-gray-800">
        <h1 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Hello {name}!
        </h1>
        <h1 class="text-2xl mb-1 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {ViewOrBook} your appointments below
        </h1>
        <Link
          to="appoint"
          className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 dark:hover:bg-gray-800"
        >
          Your Appointments
        </Link>
      </div>
    </header>
  );
};

export default LargeHero;
