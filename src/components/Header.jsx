import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { useResumeContext } from '../context/ResumeDataProvider'

function Header() {
  const {clearContext} = useResumeContext()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    clearContext()
    navigate("/resume/personal-infos")
  }

  return (
    <header className='header'>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="LOGO" />
        </NavLink>
      </div>
      <div className="navigate">
        {/* <div>
          <Button variant='outlined' >Sign in</Button>
        </div> */}
        {
          location.pathname === "/" &&
        <div className="buildResume">
          <Button
            variant='contained'
            style={{boxShadow: 'none'}}
            // onClick={() => navigate("/resume/choose-templates")}
            onClick={handleClick}
          >Build Resume</Button>
        </div>
        }
      </div>
    </header>
  )
}

export default Header