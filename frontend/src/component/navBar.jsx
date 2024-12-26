import React from "react";

function navBar() {
  return (
  <>
    <nav className="bg-gradient-to-r from-black via-blue-900 to-blue-950 py-4 px-20 w-full flex justify-between items-center text-white underline">
        <div>
            <p className="text-2xl font-extrabold text-white"> Logo</p>
        </div>
        <div className=" flex space-x-4 items-center justify-center font-bold list-none">
            <li className=" hover:text-gray-500 cursor-pointer">Home</li>
            <li className=" hover:text-gray-500 cursor-pointer">Features</li>
            <li className=" hover:text-gray-500 cursor-pointer">About</li>
        </div>
    </nav>
  </>
  )
}
export default navBar;
