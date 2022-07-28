import React, {useState, useEffect} from 'react'
import { 
    Typography,
    TextField,
    Button,
    MenuItem,
    FormControlLabel,
    Checkbox
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import List from '../components/List'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {months, years} from '../util'
import { useResumeContext } from '../context/ResumeDataProvider'

const MAX_EXP = 3

function InputPersonalInfo() {
    const {experiences, setExperiences} = useResumeContext()
    const navigate = useNavigate()
    const location = useLocation()
    const [allExperiences, setAllExperiences] = useState(experiences)
    const [open, setOpen] = useState(false);
    // active state to open or close the form
    const [active, setActive] = useState(experiences.length > 0) 
    const [startMonth, setStartMonth] = useState('');
    const [endMonth, setEndMonth] = useState('');
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')
    const [company, setCompany] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [description, setDescription] = useState('')
    const [checked, setChecked] = useState(false)
    // mode = true -> add new data otherwise edit the data
    const [mode, setMode] = useState(true)
    // id of the experience to be edit
    const [id, setId] = useState('')

    useEffect(() => {
        document.title = "Experience | Online Resume Builder"
      }, [])

    useEffect(() => {
      setExperiences(allExperiences)
    }, [allExperiences, setExperiences])
    
    const editExperience = id => {
        setId(id)
        allExperiences.forEach((data, i) => {
            if(data.id === id){
                setCity(data.city)
                setJobTitle(data.job_title)
                setCompany(data.company)
                setState(data.state)
                setDescription(data.job_description)
                setStartMonth(data.start_date.month)
                setStartYear(data.start_date.year)
                setEndMonth(data.end_date.month)
                setEndYear(data.end_date.year)
                setChecked(data.currentStatus)
                setActive(false)
                setMode(false)
            }
        })
    }


    const handleClose = () => {
        setOpen(false);
    };

    const handleSaveAndNext = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/projects')
        }
    }
    
    const handleBack = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/personal-infos')
        }
    }
    
    const save = () => {
        if(allExperiences.length > 0 && (company.trim().length === 0 || jobTitle.trim().length === 0)){
            alert('Enter atleast company and job title')
            return
        }else if(allExperiences.length === 0 && (company.trim().length === 0 || jobTitle.trim().length === 0)){
            setOpen(true)
            return
        }
        const newData = {
            company,
            job_title: jobTitle,
            state,
            city,
            job_description: description,
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
        if(mode){
            newData.id = Math.random().toString()
            setAllExperiences(prevState => {
                if(prevState.length === 0){
                    return [newData]
                }
                const newState = [...prevState]
                newState.push(newData)
                return newState
            })
        }
        else{
            setAllExperiences(prevState => {
                return prevState.map(data => {
                    if(data.id === id){
                        return {
                            id: data.id,
                            ...newData
                        }
                    }
                    return data
                })
            })
        }
        setActive(true)
    }

    const addPosition = () => {
        setActive(false)
        clearAllStates()
        setMode(true)
    }
    
    const clearAllStates = () => {
        setCompany('')
        setJobTitle('')
        setDescription('')
        setCity('')
        setState('')
        setStartMonth('')
        setStartYear('')
        setEndMonth('')
        setEndYear('')
        setChecked(false)
    }

  return (
    <>
        <Header />
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                More Information Needed
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Looks like you haven't entered any work experience. We recommend that you at least enter your past Position and Company. Click on 'Skip' to skip this section.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveAndNext}>Skip</Button>
                <Button onClick={handleClose} autoFocus>Ok</Button>
            </DialogActions>
        </Dialog>
        <div className="container">
            <Typography variant="h2">Experience</Typography>
            <Typography variant="body1" gutterBottom>List your work experience, from the most recent to the oldest.</Typography>
            {active ? 
                <List
                    id="exp"
                    allExperiences={allExperiences} 
                    setAllExperiences={setAllExperiences}
                    edit={editExperience}
                /> : 
                <div className='two-col-grid form-personal wt-70'>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth 
                            label="Company" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth 
                            label="Job title" 
                            id="outlined-size-normal"
                            size="small"
                            autoComplete='off'
                            value={jobTitle}
                            onChange={e => setJobTitle(e.target.value)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth 
                            label="City" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth label="State" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={state}
                            onChange={e => setState(e.target.value)}
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
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>
            }
            <div className="back-or-save wt-70">
                <Button
                    variant="contained"
                    onClick={handleBack}
                >BACK</Button>
                {
                    active ?
                        <>
                            <Button
                                variant="outlined"
                                endIcon={<AddIcon />}
                                onClick={addPosition}
                                disabled={allExperiences.length === MAX_EXP}
                            >Add more position
                            </Button>
                            <Button 
                                variant="contained" 
                                onClick={handleSaveAndNext}
                            >SAVE & NEXT</Button>
                        </> :
                        <Button 
                            variant="contained" 
                            onClick={save}
                        >SAVE</Button>
                        

                }
            </div>
        </div>
    </>
  )
}

export default InputPersonalInfo