import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const UserPanel = () => {
  return (
    <div className="d-flex mobile-dashboard">
      <Sidebar />
      <div className="flex-grow-1 p-3" style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  )
}

export default UserPanel

