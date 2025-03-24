import { useLogin } from "../../api/userApi";

import "./Login.css";

import SubHeader from "../subheader/SubHeader";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {

  const navigate = useNavigate();
  const { loginHandler } = useContext(UserContext);

  const { login } = useLogin();
  const loginAction = async (formData) => {

    const { email, password } = Object.fromEntries(formData);

    const result = await login(email, password);

    loginHandler(result);

    navigate('/catalog');
  }

  return (
    <>
      <SubHeader subtitle="Home" title="Login" />

      <div className="login-container flex justify-center items-start p-10 gap-10 flex-wrap">
        <div className="login-card promo-card flex-1 min-w-[320px] max-w-[450px] p-8 rounded-xl shadow-lg">
          <div className="login-header text-center mb-5">
            {/* Your login header content here */}
          </div>

          <form action={loginAction} className="login-form flex flex-col">
            <label htmlFor="email" className="text-gray-800 text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="login-input h-12 text-lg rounded-lg p-4 mb-5 border border-gray-300 focus:border-green-600 focus:outline-none transition-all duration-300"
            />

            <label htmlFor="password" className="text-gray-800 text-sm font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="login-input h-12 text-lg rounded-lg p-4 mb-5 border border-gray-300 focus:border-green-600 focus:outline-none transition-all duration-300"
            />

            <button type="submit" className="login-button w-full h-12 bg-darkgreen text-white rounded-lg text-lg hover:bg-green-600 transition-colors duration-300">
              Log in
            </button>
          </form>
        </div>

        <div className="login-message flex justify-center items-center">
          <div className="promo-card p-8 rounded-xl shadow-lg w-full max-w-[450px]">
            <div className="promo-content">
              <h2 className="text-gray-800 text-xl mb-5">Grow Your Virtual Garden</h2>
              <p className="text-gray-600 text-base mb-5">
                Create, design, and cultivate your dream garden online. Track your plants, customize layouts, and share with friends.
              </p>
              <ul className="features-list list-none p-0">
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Customizable Garden Layouts</li>
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Real-time Plant Tracking</li>
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Community Sharing & Challenges</li>
              </ul>

              <h5><Link to="/register">You do not have an account? Register...</Link></h5>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

