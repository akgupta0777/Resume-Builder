import React, {useState, useRef} from 'react'
import { 
    Typography,
    TextField,
    Button,
    MenuItem,
    FormControlLabel,
    Checkbox
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import {months, years} from '../util'
import { useResumeContext } from '../context/ResumeDataProvider'

function InputPersonalInfo() {
    const {setExperiences} = useResumeContext()
    const navigate = useNavigate()
    const [startMonth, setStartMonth] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const companyRef = useRef('')
    const jobTitleRef = useRef('')
    const cityRef = useRef('')
    const stateRef = useRef('')
    const descriptionRef = useRef('')
    const [checked, setChecked] = useState(false)

    const handleSaveAndNext = () => {
        setExperiences(prevState => [
            ...prevState,
            {
                job_title: jobTitleRef.current.value,
                company: companyRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                job_description: descriptionRef.current.value,
                start_date: {
                    month: startMonth,
                    year: startYear
                },
                end_date: {
                    month: !checked ? endMonth : "",
                    year: !checked ? endYear : ""
                },
                currentStatus: checked
            }
        ])
        navigate('/resume/educations')
    }
    const handleBack = () => {
        navigate('/resume/personal-infos')
    }

  return (
    <>
        <Header />
        <div className="container">
            <Typography variant="h2">Experience</Typography>
            <Typography variant="body1" gutterBottom>List your work experience, from the most recent to the oldest.</Typography>
            <div className='two-col-grid form-personal wt-70'>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Company" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={companyRef}
                        onChange={e => companyRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Job title" 
                        id="outlined-size-normal"
                        size="small"
                        autoComplete='off'
                        ref={jobTitleRef}
                        onChange={e => jobTitleRef.current.value = e.target.value.trim()}
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
                        fullWidth label="State" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={stateRef}
                        onChange={e => stateRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item two-col-grid" style={{gap: "0.5em"}}>
                    <TextField
                        id="outlined-start-month"
                        name="start-month"
                        select
                        label="Month"
                        size="small"
                        value={startMonth}
                        onChange={e => setStartMonth(e.target.value)}
                        fullWidth
                        helperText="Start date"
                        >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-start-year"
                        name="start-year"
                        select
                        label="Year"
                        size="small"
                        value={startYear}
                        onChange={e => setStartYear(e.target.value)}
                        fullWidth
                        >
                        {years.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="two-col-grid-item two-col-grid" style={{gap: "0.5em"}}>
                     <TextField
                        id="outlined-end-month"
                        name="end-month"
                        select
                        label="Month"
                        size="small"
                        value={endMonth}
                        onChange={e => setEndMonth(e.target.value)}
                        fullWidth
                        helperText="End date"
                        disabled={checked}
                        >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-end-year"
                        name="end-year"
                        select
                        label="Year"
                        size="small"
                        value={endYear}
                        onChange={e => setEndYear(e.target.value)}
                        fullWidth
                        disabled={checked}
                        >
                        {years.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="two-col-grid-item" style={{gridColumn: "0 / -1"}}>
                    <FormControlLabel 
                        control={
                            <Checkbox
                               checked={checked}
                               onChange={e => setChecked(!checked)}
                            />
                        }
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                        label="Currently work here"
                    />
                </div>
                <div className="two-col-grid-item" style={{gridColumn: "1 / span 2"}}>
                    <TextField
                        id="outlined-multiline-flexible"
                        placeholder="Describe your job responsibilites and achievements."
                        multiline
                        rows={10}
                        fullWidth
                        ref={descriptionRef}
                        onChange={e => descriptionRef.current.value = e.target.value.trim()}
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

export default InputPersonalInfo