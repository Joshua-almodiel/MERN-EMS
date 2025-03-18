import React from 'react'
import AdminSideBar from '../components/dashboard/AdminSideBar.jsx'
import NavBar from '../components/dashboard/NavBar.jsx'
import AdminSummary from '../components/dashboard/AdminSummary.jsx'
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {

  return (
    <div className="flex min-h-screen">
      <AdminSideBar />
      <div className="flex-1 ml-64 bg-gray-900 text-white h-screen">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminDashboard