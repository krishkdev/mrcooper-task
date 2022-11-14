import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import LargeHero from "../components/LargeHero";

const baseURL = "http://localhost:8080";

const AppointDoc = () => {
  const [appointments, setAppointments] = React.useState([]);
  const { userInfo } = useSelector((state) => state.user);

  React.useEffect(() => {
    axios
      .get(`${baseURL}/appointments`)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 max-h-full">
      <LargeHero name={userInfo?.username} catogery="View" />
      <div class="overflow-x-auto relative mt-10 p-10 pb-20">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Desciption
              </th>
              <th scope="col" class="py-3 px-6">
                Title
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appoint, idx) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {appoint.description}
                </th>
                <td class="py-4 px-6">{appoint.title}</td>
                <td class="py-4 px-6">{appoint.username}</td>
                <td
                  class="py-4 px-6 text-blue-700 cursor-pointer"
                >
                  APPROVE
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointDoc;
