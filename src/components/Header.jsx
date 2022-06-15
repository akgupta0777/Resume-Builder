import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mui/material'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <header className='header container'>
      <div className="logo">
        <img src={logo} alt="LOGO" />
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
            onClick={() => navigate("/resume/choose-templates")}
          >Build Resume</Button>
        </div>
        }
      </div>
    </header>
  )
}

export default Header