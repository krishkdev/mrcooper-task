import { useSelector } from "react-redux";
import { getAge } from "../components/getAge";
import "../styles/profile.css";
const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div>
      <figure>{userInfo?.username.charAt(0).toUpperCase()}</figure>
      {/* <span>
        <strong>Name: </strong>{" "}
        {userInfo?.username.charAt(0).toUpperCase() +
          userInfo?.username.substr(1)}
      </span> */}
      <h1 class="text-xl font-medium text-gray-700 dark:text-white">
        Name -  {" "}
        <span class="font-light text-gray-500">{userInfo?.username.charAt(0).toUpperCase() +
          userInfo?.username.substr(1)}</span>
      </h1>
      <h1 class="text-xl font-medium text-gray-700 dark:text-white">
        Email -  {" "}
        <span class="font-light text-gray-500">{userInfo?.email}</span>
      </h1>
      <h1 class="text-xl font-medium text-gray-700 dark:text-white">
        Age -  {" "}
        <span class="font-light text-gray-500">{getAge(userInfo?.DOB.substr(4))}</span>
      </h1>
      <h1 class="text-xl font-medium text-gray-700 dark:text-white">
        DOB -  {" "}
        <span class="font-light text-gray-500 ">{userInfo?.DOB.substr(0,2)+"/"+userInfo?.DOB.substr(2,2)+"/"+userInfo?.DOB.substr(4,8)}</span>
      </h1>

    </div>
  );
};

export default ProfileScreen;
