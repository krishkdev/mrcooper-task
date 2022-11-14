import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";

const baseURL = "http://localhost:8080";

const BookAppoint = () => {
  const { register, handleSubmit } = useForm();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  axios.defaults.headers.common["Authorization"] = `Bearer ${userInfo.token}`;
  const submitForm = (data) => {
    console.log(data);
    axios
      .post(`${baseURL}/appointments`, {
        username: userInfo.username,
        userid: userInfo._id,
        title: data.title,
        description: data.desciption,
      })
      .then((response) => {
        console.log(response);
        navigate("/appoint");
      });
    console.log(userInfo);
  };
  return (
    <div className="container p-3">
      <div className="block p-4 bg-white rounded-lg border border-gray-200 shadow-md">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mb-6">
            <label
              for="default-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              {...register("title")}
            />
          </div>
          <div className="mb-4">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Desciption
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              {...register("desciption")}
            ></textarea>
          </div>
          <div className="mb-2">
            <button
              type="submit"
              className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
            >
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppoint;
