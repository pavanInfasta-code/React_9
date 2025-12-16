import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";   // Move layout into a separate file
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Account/Signup";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ALL PAGES GO INSIDE LAYOUT */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Pages without navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
