import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CategoryNav from "../Components/CategoryNav";

import React from 'react'

const MainLayout = () => {
  return (
    <div className="bg-red-300 px-4 h-screen">
        <Navbar />
        <CategoryNav />
        <Outlet />
    </div>
  )
}

export default MainLayout