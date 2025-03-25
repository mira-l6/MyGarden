import { useRegister } from "../../api/userApi";
import { useContext } from "react";

import { Link, useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";

import SubHeader from "../subheader/SubHeader";
import "../login/Login.css"; // Reusing same styles


export default function Register() {

  const { register } = useRegister();
  const { userLoginHandler } = useContext(UserContext);

  const navigate = useNavigate();

  const registerAction = async (formData) => {

    const { email, password, confirmPassword } = Object.fromEntries(formData);

    if (password !== confirmPassword) {
      console.log('Passwords missmatch')
      //TODO: error handling
      return;
    }

    const result = await register(email, password);

    userLoginHandler(result);
    navigate('/plants');

  }

  return (
    <>
      <SubHeader subtitle="Home" title="Register" />

      <div className="register-container flex justify-center items-start p-10 gap-10 flex-wrap">
        <div className="register-card promo-card flex-1 min-w-[320px] max-w-[450px] p-8 rounded-xl shadow-lg">
          <div className="register-header text-center mb-5">
            {/* Your register header content here */}
          </div>

          <form action={registerAction} className="register-form flex flex-col">
            <label htmlFor="email" className="text-gray-800 text-sm font-medium mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="register-input h-12 text-lg rounded-lg p-4 mb-5 border border-gray-300 focus:border-green-600 focus:outline-none transition-all duration-300"
            />

            <label htmlFor="password" className="text-gray-800 text-sm font-medium mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="register-input h-12 text-lg rounded-lg p-4 mb-5 border border-gray-300 focus:border-green-600 focus:outline-none transition-all duration-300"
            />

            <label htmlFor="confirm-password" className="text-gray-800 text-sm font-medium mb-2">Confirm Password</label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              className="register-input h-12 text-lg rounded-lg p-4 mb-5 border border-gray-300 focus:border-green-600 focus:outline-none transition-all duration-300"
            />

            <button type="submit" className="login-button w-full h-12 bg-darkgreen text-white rounded-lg text-lg hover:bg-green-600 transition-colors duration-300">
              Register
            </button>
          </form>
        </div>

        <div className="register-message flex justify-center items-center">
          <div className="promo-card p-8 rounded-xl shadow-lg w-full max-w-[450px]">
            <div className="promo-content">
              <h2 className="text-gray-800 text-xl mb-5">Join Us and Start Your Virtual Garden</h2>
              <p className="text-gray-600 text-base mb-5">
                Create your account to start building, designing, and sharing your dream garden with others.
              </p>
              <ul className="features-list list-none p-0">
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Customizable Garden Layouts</li>
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Real-time Plant Tracking</li>
                <li className="mb-3 text-lg text-gray-800 underline underline-offset-4 decoration-green-700">Community Sharing & Challenges</li>
              </ul>

              <h5 className="login-redirect"><Link to="/login">Already have an account? Login...</Link></h5>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
