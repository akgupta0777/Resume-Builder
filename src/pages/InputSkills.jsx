import React from 'react'
import Header from '../components/Header'
import SkillSet from '../components/SkillSet';
import { 
    Typography,
    Button,
} from '@mui/material'

function InputSkills() {

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