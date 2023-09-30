import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import App from '../App'

function DefaultLayout() {
  return (
    <div>
      {/* <Navbar /> */}
        <App/>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
