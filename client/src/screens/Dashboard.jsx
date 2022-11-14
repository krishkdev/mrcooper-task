import React from "react";
import { Link } from "react-router-dom";
import LargeHero from "../components/LargeHero";

import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./ProfileScreen";
import { getAge } from "../components/getAge";
import BookAppoint from "../components/BookAppoint";
import Feedback from "../components/Feedback";

const Dashboard = () => {
  const { userInfo } = useSelector((state) => state.user);
  if(userInfo?.catogery == "Patient") {
    return (
      <div className="bg-gray-50 dark:bg-gray-900">
        <LargeHero name={userInfo?.username} catogery={userInfo.catogery === "Patient" ? "Book" : "View"} />
        <div className="container flex w-full p-5">
          <div class=" flex-1 w-50 block p-6 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-900 dark:hover:bg-gray-700">
            <h5 class="text-3xl font-medium text-gray-700 dark:text-white">
              {userInfo.catogery} Details
            </h5>
            <ProfileScreen />
          </div>
          <div class="flex-1 w-full">
            <BookAppoint />
          </div>
        </div>

      </div>
    );
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <LargeHero name={userInfo?.username} catogery={userInfo.catogery} />
      <div className="container flex w-full p-5">
          <div class=" flex-1 w-50 block p-6 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-900 dark:hover:bg-gray-700">
            <h5 class="text-3xl font-medium text-gray-700 dark:text-white">
              {userInfo.catogery} Details
            </h5>
            <ProfileScreen />
          </div>
          <div class="flex-1 w-full">
            <Feedback />
          </div>
        </div>
    </div>
  )
};

export default Dashboard;
