import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import CategoryNav from "../Components/CategoryNav";
import SearchBar from "../Components/SearchBar";

import React from 'react'

const MainLayout = () => {
  return (
    <div className="bg-red-300 px-4 min-h pb-8">
        <Navbar />
        <CategoryNav />
        <SearchBar class="w-3" />
        <Outlet />
    </div>
  )
}

export default MainLayout