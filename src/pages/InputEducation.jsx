import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
    Typography,
    TextField,
    Button,
    MenuItem,
    FormControlLabel,
    Checkbox
} from '@mui/material'
import {months, years} from '../util'
import List from '../components/List'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useResumeContext } from '../context/ResumeDataProvider'
import AddIcon from '@mui/icons-material/Add'
//Looks like you haven't entered any degree. We recommend that you at least enter your past Degree and School name.
const MAX_ED = 3

function InputEducation() {

    useEffect(() => {
      document.title = "Education | Online Resume Builder"
    }, [])
    
    const {educations, setEducations} = useResumeContext()
    const navigate = useNavigate()
    const location = useLocation()
    // active state to open or close the form
    const [active, setActive] = useState(educations.length > 0) 
    const [open, setOpen] = useState(false);
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [institute, setInstitute] = useState('')
    const [degree, setDegree] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [field, setField] = useState('')
    const [checked, setChecked] = useState(false)
    // mode = true -> add new data otherwise edit the data
    const [mode, setMode] = useState(true)
    // id of the education to be edit
    const [id, setId] = useState('')

    const editEducation = id => {
        setId(id)
        educations.forEach((data, i) => {
            if(data.id === id){
                setInstitute(data.institute)
                setDegree(data.degree)
                setField(data.field)
                setState(data.state)
                setCity(data.city)
                setMonth(data.graduation_date.month)
                setYear(data.graduation_date.year)
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
            navigate('/resume/skills')
        }
    }
    const handleBack = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/projects')
        }
    }

    const save = () => {
        if(educations.length > 0 && (institute.trim().length === 0 || degree.trim().length === 0)){
            alert('Enter atleast institute and Qualification/Degree')
            return
        }else if(educations.length === 0 && (institute.trim().length === 0 || degree.trim().length === 0)){
            setOpen(true)
            return
        }
        const newData = {
            institute,
            degree,
            state,
            city,
            field,
            graduation_date: {
                month: !checked ? month : "",
                year: !checked ? year : ""
            },
            currentStatus: checked
        }
        if(mode){
            newData.id = Math.random().toString()
            setEducations(prevState => {
                if(prevState.length === 0){
                    return [newData]
                }
                const newState = [...prevState]
                newState.push(newData)
                return newState
            })
        }
        else{
            setEducations(prevState => {
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
        setInstitute('')
        setCity('')
        setState('')
        setDegree('')
        setField('')
        setChecked(false)
        setMonth('')
        setYear('')
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
                    Looks like you haven't entered any degree. We recommend that you at least enter your past Degree/Qualicafication and Institute/School name. Click on 'Skip' to skip this section.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveAndNext}>Skip</Button>
                <Button onClick={handleClose} autoFocus>Ok</Button>
            </DialogActions>
        </Dialog>
        <div className="container">
        <Typography variant="h2">Education</Typography>
            <Typography variant="body1" gutterBottom>Add information about your educational background.</Typography>
            {active ?
                <List
                    key="ed"
                    educations={educations} 
                    setEducations={setEducations}
                    edit={editEducation}
                /> :
                <div className='two-col-grid form-personal wt-70'>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth 
                            label="School/Institute" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={institute}
                            onChange={e => setInstitute(e.target.value)}
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
                            fullWidth
                            label="State" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth
                            label="Qualification" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={degree}
                            onChange={e => setDegree(e.target.value)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth
                            label="Field of Study" 
                            id="outlined-size-normal" 
                            size="small"
                            autoComplete='off'
                            value={field}
                            onChange={e => setField(e.target.value)}
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
                            disabled={checked}
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
                            disabled={checked}
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
                                disabled={educations.length === MAX_ED}
                            >Add more education
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

export default InputEducation