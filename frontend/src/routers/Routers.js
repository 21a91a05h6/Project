import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Form from "../pages/form";
import Auth from "../pages/login";
import Register from "../pages/register";
import Logout from "../pages/logout";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Navigate to="/home" />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/form" element={<Form/>}/>
      <Route path="/" element={<Auth/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/logout" element={<Logout/>}/>
    </Routes>
  );
};

export default Routers;
