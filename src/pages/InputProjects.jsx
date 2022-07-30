import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { 
    Typography,
    TextField,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useResumeContext } from '../context/ResumeDataProvider'
import ProjectList from '../components/ProjectList'
import { useLocation, useNavigate } from 'react-router-dom'

const MAX_PROJECTS = 3

function InputProjects() {
    const {projects, setProjects} = useResumeContext()
    const navigate = useNavigate()
    const location = useLocation()
    const [allProjects, setAllProjects] = useState(projects)
    const [projectTitle, setProjectTitle] = useState('')
    const [projectUrl, setProjectUrl] = useState('')
    const [description, setDescription] = useState('')
    const [open, setOpen] = useState(false);
    // active state to open or close the form
    const [active, setActive] = useState(projects.length > 0)
    // mode = true -> add new data otherwise edit the data
    const [mode, setMode] = useState(true)
    // id of the experience to be edit
    const [id, setId] = useState('')

    useEffect(() => {
        document.title = "Projects | Online Resume Builder"
      }, [])
    
    useEffect(() => {
        setProjects(allProjects)
    }, [allProjects, setProjects])

    const handleSaveAndNext = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/educations')
        }
    }
    
    const handleBack = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/experiences')
        }
    }

    const editProject = id => {
        setId(id)
        allProjects.forEach((data, i) => {
            if(data.id === id){
                setProjectTitle(data.projectTitle)
                setProjectUrl(data.projectUrl)
                setDescription(data.description)
                setActive(false)
                setMode(false)
            }
        })
    }
    const handleClose = () => {
        setOpen(false);
    };

    const save = () => {
        if(allProjects.length > 0 && (projectTitle.trim().length === 0 || projectUrl.trim().length === 0)){
            alert('Enter atleast project title and project url')
            return
        }else if(allProjects.length === 0 && (projectTitle.trim().length === 0 || projectUrl.trim().length === 0)){
            setOpen(true)
            return
        }
        const newData = {
            projectTitle,
            projectUrl: projectUrl.includes('https://') ? projectUrl : 'https://' + projectUrl,
            description,
        }
        if(mode){
            newData.id = Math.random().toString()
            setAllProjects(prevState => {
                if(prevState.length === 0){
                    return [newData]
                }
                const newState = [...prevState]
                newState.push(newData)
                return newState
            })
        }
        else{
            setAllProjects(prevState => {
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

    const addProject = () => {
        setActive(false)
        clearAllStates()
        setMode(true)
    }
    
    const clearAllStates = () => {
        setProjectTitle('')
        setProjectUrl('')
        setDescription('')
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
                    Looks like you haven't mention any project. We recommend that you at least one project. Click on 'Skip' to skip this section.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSaveAndNext}>Skip</Button>
                <Button onClick={handleClose} autoFocus>Ok</Button>
            </DialogActions>
        </Dialog>
        <div className="container">
            <Typography variant="h2">Projects</Typography>
            <Typography variant="body1" gutterBottom>Show your top 3 projects.</Typography>
            {active ? 
                <ProjectList
                    allProjects={allProjects}
                    setAllProjects={setAllProjects}
                    edit={editProject}
                /> : 
                <div className='two-col-grid form-personal wt-70'>
                        <div className="two-col-grid-item">
                            <TextField 
                                fullWidth 
                                label="Project Title" 
                                id="outlined-size-normal" 
                                size="small"
                                value={projectTitle}
                                onChange={e => setProjectTitle(e.target.value)}
                            />
                        </div>
                        <div className="two-col-grid-item">
                            <TextField 
                                fullWidth
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">https://</InputAdornment>,
                                }}
                                label="Project URL" 
                                id="outlined-size-normal"
                                size="small"
                                value={projectUrl}
                                onChange={e => setProjectUrl(e.target.value)}
                            />
                        </div>
                        <div className="two-col-grid-item" style={{gridColumn: "1 / span 2"}}>
                            <TextField
                                id="outlined-multiline-flexible"
                                placeholder="Description"
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
                                onClick={addProject}
                                disabled={allProjects.length === MAX_PROJECTS}
                            >Add more projects
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

export default InputProjects