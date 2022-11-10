import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { registerUser } from "../rtk/user/userActions";
import HealthCare from "../assets/healthcare.svg";

const RegisterScreen = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate("/user-profile");
    // redirect user to login page if registration was successful
    if (success) navigate("/login");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    dispatch(registerUser(data));
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
            {customError && <Error>{customError}</Error>}
            <div className="form-group">
              <label className="block" htmlFor="username">
                Full Name
              </label>
              <input
                type="text"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("name")}
                required
              />
            </div>
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
            <div className="form-group">
              <label className="block" htmlFor="email">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("confirmPassword")}
                required
              />
            </div>
            {/* <div className="form-group">
              <label className="block" htmlFor="DOB">
                Catogery
              </label>
              <input
                type="text"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("catogery")}
                required
              />
            </div> */}
            <div className="form-group">
              <div>
                <label class="block" for="grid-state">
                  Catogery
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    id="grid-state"
                    {...register("catogery")}
                  >
                    <option>Patient</option>
                    <option>Doctor</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="block" htmlFor="DOB">
                Date of birth
              </label>
              <input
                type="text"
                className="form-input w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("DOB")}
                required
              />
            </div>

            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="button px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 mb-15"
                disabled={loading}
              >
                Register
              </button>
              <NavLink
                to="/login"
                className="text-sm text-blue-600 hover:underline"
              >
                OR Login here
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
