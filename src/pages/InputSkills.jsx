import React, { useEffect } from 'react'
import Header from '../components/Header'
import SkillSet from '../components/SkillSet';
import { 
    Typography,
} from '@mui/material'

function InputSkills() {
  useEffect(() => {
    document.title = "Skills | Online Resume Builder"
  }, [])
  
  return (
    <>
        <Header />
        <div className="container">
            <Typography variant="h2">Skills</Typography>
            <Typography variant="body1" gutterBottom>Highlight your 5-8 top skills.</Typography>
            <SkillSet />
        </div>
    </>
  )
}

export default InputSkills