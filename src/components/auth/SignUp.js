import React, { useState,useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { SlLock } from "react-icons/sl";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate, Link, useLocation } from "react-router-dom";

import signupImage from "../../assets/signup.jpg";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";

function SignUp() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passEye, setpassEye] = useState(false);
  const [passEyeConfirm, setpassEyeConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const nav = useNavigate();
  const location = useLocation();

  const isFromExtension = new URLSearchParams(location.search).get('source') === 'extension';

    useEffect(() => {
    if (isFromExtension) {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            await signOut(auth);
            console.log("User signed out successfully");
          } catch (error) {
            console.error("Error signing out:", error);
          }
        }
        setIsLoading(false);
      });
      return () => unsubscribe();
    } else {
      setIsLoading(false);
    }
  }, [isFromExtension]);

  console.log("email", "password")

  const togglePassEye = () => {
    setpassEye(!passEye);
  };
  const togglePassEyeConfirm = () => {
    setpassEyeConfirm(!passEyeConfirm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);

      await updateProfile(auth.currentUser, {
        displayName: username
      });



      if (isFromExtension) {
        // Send message to extension
        window.opener?.postMessage(
          { 
            type: 'SIGNUP_SUCCESS',
            data: {
              email: email,
              displayName: username
            }
          }, 
          '*'
        );        
        setTimeout(() => {
          window.close();
        }, 1500);
      } else {
        nav("/");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert(`Error: ${error.message}`);
    }
  }

    if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }









  // const handleSubmit = async (e) => {

  //   console.log("email", email, "password", password);
    

  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log("User created:", userCredential.user);
  //     nav("/");
  //   } catch (error) {
  //     console.error("Error signing up:", error);
  //     alert("Error signing up. Please try again.");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center ">

      {isFromExtension && (
        <div className="hidden md:block absolute top-4 left-52 transform -translate-x-1/2 bg-blue-100 text-blue-800 px-4 py-2 rounded-md">
          You're signing up from the Amazon Seller Tool extension
        </div>
      )}
    
      <div className="flex gap-24 justify-around items-center">
        <div className="hidden md:block w-[45%] ">
          <img src={signupImage} alt="Sign Up" width={"800px"} className=" h-full object-cover" />
        </div>

        <div className="p-10 w-full md:w-[40%]">
          <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

          <p className="mb-6">
            <p>If you already have an account register</p> 

            {isFromExtension ? (
              <a href="#" onClick={() => window.close()} className="text-blue-500 font-semibold">
                Return to extension
              </a>
            ) : (
              <Link to="/" className="text-blue-500 font-semibold">
                Login here!
              </Link>
            )}
        
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="flex justify-center items-center border-b-2 border-black focus:border-blue-700">
                <TfiEmail  />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">User name</label>
              <div className="flex justify-center items-center border-b-2 border-black focus:border-blue-700">
                <CiUser size={20} />
                <input
                  type="text"
                  placeholder="Enter your User name"
                  className="w-full px-4 py-2 outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="flex justify-between items-center border-b-2 border-black focus:border-blue-700">
                <div className="flex items-center ">
                  <SlLock />
                  <input
                    type={passEye ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div onClick={togglePassEye}>
                  {passEye ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <div className="flex justify-between items-center border-b-2 border-black focus:border-blue-700">
                <div className="flex items-center ">
                  <SlLock />
                  <input
                    type={passEyeConfirm ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div onClick={togglePassEyeConfirm}>
                  {passEyeConfirm ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 mt-10 text-white py-2 rounded-3xl ">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;






// import React,{useState} from "react";
// import { CiUser } from "react-icons/ci";
// import { TfiEmail } from "react-icons/tfi";
// import { SlLock } from "react-icons/sl";
// import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";

// import signupImage from "../../assets/signup.jpg";

// import { auth } from "../../../firebase"

// function SignUp() {

//   const [passEye, setpassEye] = useState(false);
//   const togglePassEye = () =>{
//     setpassEye(!passEye)
//   }
//   const [passEyeConfirm, setpassEyeConfirm] = useState(false);
//   const togglePassEyeConfirm = () =>{
//     setpassEyeConfirm(!passEyeConfirm   )
//   }

//   const nav = useNavigate()
  
//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="flex gap-24">
//         <div className="">
//           <img src={signupImage} alt="Sign Up" className="w-[630px] h-full object-cover" />
//         </div>

//         <div className="p-10 w-1/2">
//           <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

//           <p className="mb-6">
//             <p>If you already have an account register</p> You can <Link to="/" className="text-blue-500 font-bold">Login here!</Link>
//           </p>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <div className=" flex justify-center items-center border-b-2 border-black focus:border-blue-700">
//             <TfiEmail/>
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="w-full px-4 py-2 outline-none "
//             />

//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">User name</label>
//             <div className=" flex justify-center items-center border-b-2 border-black focus:border-blue-700">
//             <CiUser/>
//             <input
//               type="text"
//               placeholder="Enter your User name"
//               className="w-full px-4 py-2 outline-none "
//             />

//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Password</label>
//             <div className=" flex justify-between items-center border-b-2 border-black focus:border-blue-700">
//             <div className="flex items-center ">
//             <SlLock/>
//             <input
//               type={passEye ? "text" : "password" } 

//               placeholder="Enter your password"
//               className="w-full px-4 py-2 outline-none "
//             />
//             </div>
//             <div onClick={togglePassEye}>
//                {passEye ? <FaRegEye/> : <FaRegEyeSlash/> } 
//             </div>


//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">Confirm Password</label>
//             <div className=" flex justify-between items-center border-b-2 border-black focus:border-blue-700">
//             <div className="flex items-center ">
//             <SlLock/>
//             <input
//               type={passEyeConfirm ? "text" : "password" } 

//               placeholder="Enter your password"
//               className="w-full px-4 py-2 outline-none "
//             />
//             </div>
//             <div onClick={togglePassEyeConfirm}>
//                {passEyeConfirm ? <FaRegEye/> : <FaRegEyeSlash/> } 
//             </div>


//             </div>
//           </div>

//           <button className="w-full bg-blue-600 mt-10 text-white py-2 rounded-3xl ">
//             Login
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
