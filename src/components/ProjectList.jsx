import React from 'react'
import { Typography, IconButton } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function ProjectList({allProjects, setAllProjects, edit}) {
    const deleteProject = id => {
        setAllProjects(prevState => prevState.filter(project => project.id !== id))
    }
  return (
        allProjects.map(project => {
            return <div
                        key={project.id}
                        className="form-personal wt-70 flex-container"
                        style={{boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)", padding: "5px 20px"}}
                    >
                        <div style={{flexGrow: 1}}>
                            <Typography variant="subtitle1" color="primary">{project.projectTitle}</Typography>
                            <Typography
                                variant="body2"
                                style={{fontStyle: 'italic', color: '#5d5d5d'}}
                            >{project.projectUrl}</Typography>
                        </div>
                        <div className="flex-items">
                            <IconButton 
                                sx={{color: "#b9acb4"}}
                                onClick={() => edit(project.id)}
                            >
                                <ModeEditOutlineIcon />
                            </IconButton>
                            <IconButton
                                sx={{color: "#ff0000"}}
                                onClick={() => deleteProject(project.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </div>
        })
  )
}

export default ProjectList