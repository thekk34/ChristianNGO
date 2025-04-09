import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";

const AdminPanel = () => {
  return (
    <div className="d-flex">
      <MainLayout/>
      <div className="flex-grow-1 p-3" style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPanel


