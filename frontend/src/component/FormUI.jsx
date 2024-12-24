import React, { useState } from 'react'

function FormUI(){

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  // console.log(name,email,password);

  //function to reg the student/user
  async function regesterStudent(e){
    e.preventDefault();
    try{
      const result = await fetch("/proxy/student-register",{    //hit in this link
        headers:{"Content-Type":"application/json"}, method:"POST",
        body:JSON.stringify({name,email,password})
      })
      const data = await result.json();
      if(data){
        alert(data.msg);
      }else{
        alert("log in failed")
      }

    }catch(error){
        console.log(error.message)
    }
  }
 
  return (
    <>
    <div className="bg-cover bg-center h-screen flex justify-center items-center bg-[url('https://img.freepik.com/free-photo/background-with-lights-snowflakes_1048-4130.jpg?t=st=1734933070~exp=1734936670~hmac=0676217d41f70d47036f3d9ea5480ee13a3fb7d50539c912cae49ff60e2ff145&w=1060')] ">
     <form onSubmit={regesterStudent} className='bg-gray-800/40 p-5 w-[600px] rounded-2xl backdrop-blur-sm  '>
      <p className="text-3xl font-semibold mb-4 animate-bounce  text-white text-center " >Form</p>
      <input className='border-black p-4 rounded-2xl mb-3 w-full' type="text" placeholder="enter you Name" onChange={(e)=>setName(e.target.value)}/><br></br>
      <input className='border-black p-4 rounded-2xl mb-3 w-full ' type="text" placeholder='enter you Email' onChange={(e)=>setEmail(e.target.value)}/><br></br>
      <input className='border-black p-4 rounded-2xl mb-3 w-full' type="text" placeholder='enter you Password' onChange={(e)=>setPassword(e.target.value)}/><br></br>
      <button className='bg-indigo-600 p-2 hover:bg-indigo-700 text-white font-bold rounded-full text-3xl w-full 'type='submit' > Sign Up</button>
      
     </form>
     </div>
    </>
  )
}

export default FormUI
