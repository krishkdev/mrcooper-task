import React from "react";
import { Link } from "react-router-dom";
import LargeHero from "../components/LargeHero";

import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./ProfileScreen";
import { getAge } from "../components/getAge";
import BookAppoint from "../components/BookAppoint";

const Dashboard = () => {
  // const { count } = useSelector((state) => state.counter);
  // const { name,email,catogery,DOB } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // function getAge(birthYear) {
  //   //birthYear = userInfo?.DOB.substr(4);
  //   const today = new Date();
  //   const yyyy = today.getFullYear();
  //   const b = parseInt(birthYear);
  //   const a = parseInt(yyyy);
  //   console.log(a-b);
  //   return a-b;
  // }

  return (
    <div>
      <LargeHero name={userInfo?.username} catogery={userInfo.catogery === "Patient" ? "Book" : "View"} />
      {/* <div className="container flex w-full p-5">
        <div class=" flex-1 w-50 block p-6 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-3xl font-medium text-gray-700 dark:text-white">
            {userInfo.catogery} Details
          </h5>
          <ProfileScreen />
        </div>
        <div class="flex-1 w-full block p-6 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="text-3xl font-medium text-gray-700 dark:text-white">
            {userInfo.catogery} Details
          </h5>
          <ProfileScreen />
        </div>
      </div> */}
      <BookAppoint />
    </div>
  );
};

export default Dashboard;
