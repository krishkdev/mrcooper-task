import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Appoint = () => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  if(userInfo.catogery === "Doctor") {
      navigate("/appointdoc")
  }
  if(userInfo.catogery === "Doctor") {
      navigate("/appointpat")
  }
  return (
    <div className="dark:bg-gray-900 dark:text-white">Navigating ... {userInfo.catogery}</div>
  )
};

export default Appoint;
