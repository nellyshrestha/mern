import React from "react";

function navBar() {
  return (<>
    <nav className="bg-gradient-to-r from-black via-gray-400 to-white py-4 px-10 w-full flex justify-between items-center">
        <div>
            <p className="text-2xl font-extrabold text-white"> Logo</p>
        </div>
        <div className=" flex space-x-4 items-center justify-center font-bold list-none">
            <li className=" hover:text-blue-500 cursor-pointer">Home</li>
            <li className=" hover:text-blue-500 cursor-pointer">Features</li>
            <li className=" hover:text-blue-500 cursor-pointer">About</li>
        </div>
    </nav>
  </>
  )
}
export default navBar;
