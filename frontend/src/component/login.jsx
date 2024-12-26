import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to reg the student/user
  async function regesterStudent(e) {
    e.preventDefault();
    try {
      const result = await fetch("/proxy/student-login", {
        //hit in this link
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      const data = await result.json();
      if (data.status == 200) {
        alert(data.msg);
        window.location.href = "/dashboard";
      } else {
        alert("log in failed");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="bg-cover bg-center h-screen flex justify-center items-end bg-[url('https://img.freepik.com/free-vector/christmas-theme-with-santa-snowman_1308-37932.jpg?t=st=1735008041~exp=1735011641~hmac=fc9436d06055bfc4a76e0bf9560ad3c758bf4c3ab78f6ca62a4136de26c7c6cb&w=1060')] ">
        <form
          onSubmit={regesterStudent}
          className="bg-gray-800/40 p-5 w-[600px] rounded-2xl backdrop-blur-sm mb-28 "
        >
          <p className="text-3xl font-semibold mb-4 animate-bounce  text-white text-center ">
            Log In{" "}
          </p>
          <input
            className="border-black p-4 rounded-2xl mb-3 w-full "
            type="text"
            placeholder="enter you Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            className="border-black p-4 rounded-2xl mb-3 w-full"
            type="text"
            placeholder="enter you Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button
            className="bg-red-500 p-2 hover:bg-red-400 text-white font-bold rounded-full text-3xl w-full "
            type="submit"
          >
            {" "}
            Log In
          </button>
          <p className="text-center">
            Dont have account?? <a className="text-red-600" href="/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
