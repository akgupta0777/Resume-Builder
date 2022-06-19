import React from 'react'
import { Typography, Button } from '@mui/material'
import illustration2 from '../assets/illustration2.svg'
import { useNavigate } from 'react-router-dom'
import { useResumeContext } from '../context/ResumeDataProvider'

function Hero() {
    const {clearContext} = useResumeContext()
    const navigate = useNavigate()

    const handleClick = () => {
        clearContext()
        navigate("/resume/personal-infos")
      }
      
  return (
    <>
        <div className="hero-section container two-col-grid">
            <div>
                <Typography variant="h3" mt={10}>EASY ONLINE</Typography>
                <Typography variant="h2">RESUME BUILDER</Typography>
                <Typography 
                    variant="h5"
                    sx={{
                        color: "#a49191",
                        fontSize: 20
                    }}
                    mb={5}
                >Create your professional resume in minutes.</Typography>
                <Button 
                    variant="contained" 
                    sx={{boxShadow: "none", padding: "10px 20px", width: "50%"}}
                    size="large"
                    onClick={handleClick}
                >BUILD MY RESUME</Button>
            </div>
            <div className="two-col-grid-item" style={{display: "grid", placeItems: "center"}}>
                <img 
                    src={illustration2} 
                    alt="illustration" 
                    style={{width: "100%", height: "auto"}}

                />
            </div>
        </div>
    </>
  )
}

export default Hero