import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

import React from 'react'

const MainLayout = () => {
  return (
    <div className="bg-red-300 px-4 h-screen">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayout