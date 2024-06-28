// src/components/Login.jsx
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../auth-context/AuthContext";
import envConfig from "../../../../envConfig";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import CustomAlert from "../../../utils/custom-alert/CustomAlert";
import { FaUserSlash } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [failedMessage, setFaildMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation: replace this with actual authentication logic
    if (
      email === envConfig.authenticetedEmail &&
      password === envConfig.authenticetedPassword
    ) {
      login();
      navigate("/dashboard");
    } else {
      setFaildMessage("Invalid email or password");
      setIsAdmin(true);
    }
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter") {
      if (
        email === envConfig.authenticetedEmail &&
        password === envConfig.authenticetedPassword
      ) {
        login();
        navigate("/dashboard");
      } else {
        setFaildMessage("Invalid email or password");
        setIsAdmin(true);
      }
    }
  }, []);

  const openPasswordfield = useCallback(() => {
    const inputType = document.getElementById("passwordInput");
    if (inputType.type === "password") {
      inputType.type = "text";
    } else {
      inputType.type = "password";
    }
  }, []);

  const handleSuccessCloseEvent = useCallback(() => {
    setIsAdmin(false);
  }, []);

  return (
    <>
      <CustomAlert
        showOrHide={isAdmin === true ? "flex" : "hidden"}
        closeButton={handleSuccessCloseEvent}
        statusIcon={<FaUserSlash className="text-7xl text-red-500" />}
        alertHead={failedMessage}
        buttonColor={"bg-red-500 hover:bg-red-600"}
        buttonText={"Try again"}
      />

      <div className="flex justify-center items-center bg-gray-100 font-[sans-serif] h-full md:min-h-screen p-4">
        <div className="grid justify-center max-w-md mx-auto">
          <div>
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full object-cover rounded-2xl"
              alt="login-image"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 -mt-24 relative z-10 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-12">
              <h3 className="text-3xl text-center font-extrabold text-blue-600">
                Login As An Admin
              </h3>
            </div>

            <div className="relative flex items-center">
              <input
                name="email"
                type="email"
                required
                className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                placeholder="Enter Your Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MdEmail className="text-2xl text-blue-600 absolute right-2 cursor-pointer" />
            </div>

            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  id="passwordInput"
                  name="password"
                  type="password"
                  required
                  className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                  placeholder="Enter The Correct Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                <FaEye
                  className="text-2xl text-blue-600 absolute right-2 cursor-pointer"
                  onClick={openPasswordfield}
                />
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Admin Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
