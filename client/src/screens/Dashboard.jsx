import React from "react";
import { Link } from "react-router-dom";
import LargeHero from "../components/LargeHero";

import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const { count } = useSelector((state) => state.counter);
  const { name,email,catogery,DOB } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
    <LargeHero name="Fazil" catogery = "Patient" />
    <section>
    <h1> The count is: {count}</h1>
    <h1> {name}</h1>
    <h1> {email}</h1>
    <h1> {catogery} </h1>
    <h1> {DOB} </h1>
    </section>
    </div>
  );
};

export default Dashboard;
