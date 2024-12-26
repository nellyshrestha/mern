import React from "react";
import bgimage from "../assets/landing.jpg";
function landingPage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="pl-40">
          <h1 className=" text-7xl font-bold p-10 text-transparent bg-clip-text w-fit bg-gradient-to-r from-yellow-500 via-slate-600 to-gray-400">
            {" "}
            Library Management
          </h1>
          <p className="text-white pl-11 text-2xl">
            <br></br>
            Welcome to our library management system.
            <br />
            This system is designed to help you manage your library efficiently.
          </p>
          <div>
            <button className="bg-slate-700/60 rounded-3xl text-white text-4xl p-5 font-bold  hover:bg-gray-700">
              Log in{" "}
            </button>
            <button className="bg-slate-700/60 rounded-3xl text-white text-4xl p-5 m-8 font-bold  hover:bg-gray-700">
              Sign up{" "}
            </button>
          </div>
        </div>
      </div>
      <form action="/upload" method="POST" encType="mutipart/form-data">
        <input type="file" name="file" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default landingPage;
