import React, {useState, useRef} from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { 
    Typography,
    TextField,
    Button,
    MenuItem,
    FormControlLabel,
    Checkbox
} from '@mui/material'
import {months, years} from '../util'
import { useResumeContext } from '../context/ResumeDataProvider'

function InputEducation() {
    const {setEducations} = useResumeContext()
    const navigate = useNavigate()
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const instituteRef = useRef('')
    const degreeRef = useRef('')
    const cityRef = useRef('')
    const stateRef = useRef('')
    const fieldOfStudyRef = useRef('')
    const [checked, setChecked] = useState(false)

    const handleSaveAndNext = () => {
        setEducations(prevState => [
            ...prevState,
            {
                institute: instituteRef.current.value,
                degree: degreeRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                field: fieldOfStudyRef.current.value,
                graduation_date: {
                    month: !checked ? month : '',
                    year: !checked ? year : ''
                },
                currentStatus: checked
            }
        ])
        navigate('/resume/skills')
    }
    const handleBack = () => {
        navigate('/resume/experiences')
    }
  return (
    <>
        <Header />
        <div className="container">
        <Typography variant="h2">Education</Typography>
            <Typography variant="body1" gutterBottom>Add information about your educational background.</Typography>
            <div className='two-col-grid form-personal wt-70'>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="School/Institute" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={instituteRef}
                        onChange={e => instituteRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="City" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={cityRef}
                        onChange={e => cityRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth
                        label="State" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={stateRef}
                        onChange={e => stateRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth
                        label="Qualification" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={degreeRef}
                        onChange={e => degreeRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth
                        label="Field of Study" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={fieldOfStudyRef}
                        onChange={e => fieldOfStudyRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item two-col-grid" style={{gap: "0.5em"}}>
                    <TextField
                        id="outlined-graduation-month"
                        name="graduation-month"
                        select
                        label="Month"
                        size="small"
                        value={month}
                        onChange={e => setMonth(e.target.value)}
                        fullWidth
                        helperText="Graduation date"
                        >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-graduation-year"
                        name="graduation-year"
                        select
                        label="Year"
                        size="small"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        fullWidth
                        >
                        {years.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="two-col-grid-item">
                    <FormControlLabel
                        control={
                            <Checkbox
                               checked={checked}
                               onChange={e => setChecked(!checked)}
                            />
                        }
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                        label="Currently pursuing..."
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

export default InputEducation