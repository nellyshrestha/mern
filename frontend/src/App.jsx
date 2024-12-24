import React from "react";
import FormUI from "./component/FormUI";
import Login from "./component/login";
import LandingPage from "./component/landingPage";
import Dashboard from "./component/dashboard";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<FormUI />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
