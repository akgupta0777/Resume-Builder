import React, {useRef} from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useResumeContext } from '../context/ResumeDataProvider'

function InputSummary() {
    const {setSummary} =useResumeContext()
    const navigate = useNavigate()
    const summaryRef = useRef('')

    const handleSaveAndNext = () => {
        setSummary(summaryRef.current.value)
        navigate('/resume/resume-preview')
    }
    const handleBack = () => {
        navigate('/resume/skills')
    }
  return (
    <>
        <Header />
        <div className="container">
            <Typography variant="h2">Professional Summary</Typography>
            <Typography variant="body1">Write a short summary telling more about yourself, your strengths and experience.
            </Typography>
            <div className='wt-70' style={{margin: "2em auto"}}>
                <div style={{gridColumn: " 0 / span 2"}}>
                    <TextField
                        id="outlined-multiline-flexible"
                        placeholder='Write a short summary...'
                        multiline
                        rows={10}
                        fullWidth
                        ref={summaryRef}
                        onChange={e => summaryRef.current.value = e.target.value.trim()}
                    />
                </div>
            </div>

            <div className="back-or-save wt-70">
            <Button 
                variant="contained"
                onClick={handleBack}
            >BACK</Button>
            <Button 
                variant="contained"
                onClick={handleSaveAndNext}
            >SAVE & NEXT</Button>
            </div>
        </div>
    </>
  )
}

export default InputSummary