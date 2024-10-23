import React,{useState} from "react";
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { SlLock } from "react-icons/sl";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

import signupImage from "../../assets/signup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {

  const [passEye, setpassEye] = useState(false);
  const togglePassEye = () =>{
    setpassEye(!passEye)
  }
  const [passEyeConfirm, setpassEyeConfirm] = useState(false);
  const togglePassEyeConfirm = () =>{
    setpassEyeConfirm(!passEyeConfirm   )
  }

  const nav = useNavigate()
  
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex gap-24">
        <div className="">
          <img src={signupImage} alt="Sign Up" className="w-[630px] h-full object-cover" />
        </div>

        <div className="p-10 w-1/2">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <p className="mb-6">
            <p>If you already have an account register</p> You can <Link to="/" className="text-blue-500 font-bold">Login here!</Link>
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
            <label className="block text-sm font-medium mb-1">User name</label>
            <div className=" flex justify-center items-center border-b-2 border-black focus:border-blue-700">
            <CiUser/>
            <input
              type="text"
              placeholder="Enter your User name"
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

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className=" flex justify-between items-center border-b-2 border-black focus:border-blue-700">
            <div className="flex items-center ">
            <SlLock/>
            <input
              type={passEyeConfirm ? "text" : "password" } 

              placeholder="Enter your password"
              className="w-full px-4 py-2 outline-none "
            />
            </div>
            <div onClick={togglePassEyeConfirm}>
               {passEyeConfirm ? <FaRegEye/> : <FaRegEyeSlash/> } 
            </div>


            </div>
          </div>

          <button className="w-full bg-blue-600 mt-10 text-white py-2 rounded-3xl ">
            Login
          </button>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
