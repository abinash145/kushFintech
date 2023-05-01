import React from 'react'
import Btn from '../components/button/Btn'

import { logout } from '../features/slice/appSlice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function Header() {
  const dispatch = useDispatch()
  return (
    <nav className="flex justify-between p-4 container">
      <Link to="/dashboard" className="underline text-brand_primary">
        Dashboard
      </Link>
      <Link to="/product" className="underline text-brand_primary">
        Visit Website
      </Link>
      <div>
        <Btn title="Log Out" className="" onClick={() => dispatch(logout())} />
      </div>
    </nav>
  )
}

export default Header
