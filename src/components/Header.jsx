import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { Button } from '@mui/material'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <header className='header'>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="LOGO" />
        </NavLink>
      </div>
      <div className="navigate">
        <div>
          <Button variant='outlined' >Sign in</Button>
        </div>
        {
          location.pathname === "/" &&
        <div className="buildResume">
          <Button
            variant='contained'
            style={{boxShadow: 'none'}}
            // onClick={() => navigate("/resume/choose-templates")}
            onClick={() => navigate("/resume/personal-infos")}
          >Build Resume</Button>
        </div>
        }
      </div>
    </header>
  )
}

export default Header