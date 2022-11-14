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
      <h1 className="text-xl font-light text-gray-700 dark:text-white mb-5 pt-10">
        <span className="uppercase tracking-widest">Name</span> <br/>
        <span className="text-3xl font-light text-gray-400">{userInfo?.username.charAt(0).toUpperCase() +
          userInfo?.username.substr(1)}</span>
      </h1>
      <h1 className="text-xl font-medium text-gray-700 dark:text-white mb-5">
      <span className="uppercase tracking-widest"> Email </span> <br/>
        <span className="text-3xl font-light text-gray-400">{userInfo?.email}</span>
      </h1>
      <h1 className="text-xl font-medium text-gray-700 dark:text-white mb-5">
      <span className="uppercase tracking-widest">Age</span> <br/>
        <span className="text-3xl font-light text-gray-400">{getAge(userInfo?.DOB.substr(4))}</span>
      </h1>
      <h1 className="text-xl font-medium text-gray-700 dark:text-white mb-5">
      <span className="uppercase tracking-widest">DOB</span> <br/>
        <span className="text-3xl font-light text-gray-400 ">{userInfo?.DOB.substr(0,2)+"/"+userInfo?.DOB.substr(2,2)+"/"+userInfo?.DOB.substr(4,8)}</span>
      </h1>

    </div>
  );
};

export default ProfileScreen;
