import { useState, useEffect } from 'react';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { auth, signOut } from "../../firebase"; 

export default function SearchBar() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName || "User");
        setUserEmail(user.email);
        console.log("Signed-in user:", user);
      } else {
        setUserName("");
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth); 
      console.log("User signed out");
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-blue-600 p-4 flex items-center">
        <div className="relative flex w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-[399px] p-2 rounded-3xl pl-10 focus:outline-none"
          />
          <AiOutlineSearch className="absolute top-3 left-3 text-gray-500" size={20} />
        </div>

        <div className="flex items-center space-x-4 text-white">
          <FaBell size={24} />

          <div className="relative">
            <div
              className="border-2 border-gray-500 rounded-full flex items-center gap-2 p-1 cursor-pointer"
              onClick={toggleDropdown}
            >
              <FaUserCircle size={30} />
              {userName && <p className="text-white">{userName}</p>}
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                <p className="px-4 py-2 text-gray-700">{userEmail}</p>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
