import React from 'react'
import { Typography, IconButton } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function List(props) {

    const deleteExperience = id => {
        props.setAllExperiences(prevState => prevState.filter(experience => experience.id !== id))
    }

    const deleteEducation = id => {
        props.setEducations(prevState => prevState.filter(education => education.id !== id))
    }
  return (
    <>
        {
            props.id === "exp" ?
                props.allExperiences.map(experience => {
                    return <div
                                key={experience.id}
                                className="form-personal wt-70 flex-container"
                                style={{boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)", padding: "5px 20px"}}
                            >
                                <div style={{flexGrow: 1}}>
                                    <Typography variant="subtitle1" color="primary">{experience.company}</Typography>
                                    <Typography variant="body2">{experience.job_title}</Typography>
                                </div>
                                <div className="flex-items">
                                    <IconButton 
                                        sx={{color: "#b9acb4"}}
                                        onClick={() => props.edit(experience.id)}
                                    >
                                        <ModeEditOutlineIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{color: "#ff0000"}}
                                        onClick={() => deleteExperience(experience.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                }) :
                props.educations.map(education => {
                    return <div
                                key={education.id}
                                className="form-personal wt-70 flex-container"
                                style={{boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)", padding: "5px 20px"}}
                            >
                                <div style={{flexGrow: 1}}>
                                    <Typography variant="subtitle1" color="primary">{education.institute}</Typography>
                                    <Typography variant="body2">{education.degree}</Typography>
                                </div>
                                <div className="flex-items">
                                    <IconButton 
                                        sx={{color: "#b9acb4"}}
                                        onClick={() => props.edit(education.id)}
                                    >
                                        <ModeEditOutlineIcon />
                                    </IconButton>
                                    <IconButton
                                        sx={{color: "#ff0000"}}
                                        onClick={() => deleteEducation(education.id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                })
    
    }
    </>
  )
}

export default List