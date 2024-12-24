import React from "react";
import NavBar from "./navBar";
import bgimage from "../assets/bg.jpg"
function landingPage() {
  return (
    <>
    
      <div className="bg-cover bg-center h-screen flex justify-center items-baseline " style={{backgroundImage:`url(${bgimage})`}}>
        <h1 className="font-bold text-fuchsia-300 text-6xl">Hello Everyone</h1>
      </div>
    </>
  );
}
export default landingPage;
