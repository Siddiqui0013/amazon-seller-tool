import React,{useState} from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { SlLock } from "react-icons/sl";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import signinImage from "../../assets/signin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignIn() {

  const [passEye, setpassEye] = useState(false);
  const togglePassEye = () =>{
    setpassEye(!passEye)
  }

  const nav = useNavigate()
  
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex gap-24 ">
        <div className="">
          <img src={signinImage} alt="Sign In" className="w-[637px] h-full object-cover" />
        </div>

        <div className="p-10 w-1/2">
          <h2 className="text-3xl font-bold mb-6">Sign in</h2>
          <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0e75c4",}} />

          <p className="mb-6">
            <p>If you don’t have an account register</p> You can <Link to="/signup" className="text-blue-500 font-bold">Register here!</Link>
          </p>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className=" flex justify-center items-center border-b-2 border-black focus:border-blue-700">
            <TfiEmail/>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 outline-none "
            />

            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className=" flex justify-between items-center border-b-2 border-black focus:border-blue-700">
            <div className="flex items-center ">
            <SlLock/>
            <input
              type={passEye ? "text" : "password" } 

              placeholder="Enter your password"
              className="w-full px-4 py-2 outline-none "
            />
            </div>
            <div onClick={togglePassEye}>
               {passEye ? <FaRegEye/> : <FaRegEyeSlash/> } 
            </div>


            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 text-sm">Forgot Password?</a>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-3xl ">
            Login
          </button>

          {/* <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="px-2 text-gray-500">or continue with</span>
            <hr className="flex-grow border-t" />
          </div> */}

          <div className="flex items-center justify-center my-4">
            <span className="px-2 text-gray-500">or continue with</span>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="">
              <FaFacebook size={30} />
            </button>
            <button className="">
              <FaGoogle size={30} />
            </button>
            <button className="">
              <FaApple size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
