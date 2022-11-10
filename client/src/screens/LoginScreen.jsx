import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../rtk/user/userActions";
import { useEffect } from "react";
import Error from "../components/Error";
import HealthCare from "../assets/healthcare.svg";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-16 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <img src={HealthCare} alt="health-care" className="w-12 h-15 mb-5" />
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="mt-4">
            {error && <Error>{error}</Error>}
            <div className="form-group">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("email")}
                required
              />
            </div>
            <div className="form-group">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("password")}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="button px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 mb-15"
                disabled={loading}
              >
                Login
              </button>
              <NavLink
                to="/register"
                className="text-sm text-blue-600 hover:underline"
              >
                OR Register here
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
