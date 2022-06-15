import React from 'react'
import { useResumeContext } from '../context/ResumeDataProvider'
import { Typography, IconButton } from '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';

function List({allExperiences, setAllExperiences}) {

    const deleteExperience = id => {
        setAllExperiences(prevState => prevState.filter(experience => experience.id !== id))
    }
  return (
    <>
        {allExperiences.map(experience => {
            return <div
                        key={experience.id}
                        className="form-personal wt-70 flex-container"
                        style={{boxShadow: "0 0 8px rgba(0, 0, 0, 0.15)", padding: "5px 20px"}}
                    >
                        <div style={{flexGrow: 1}}>
                            <Typography variant="subtitle2">{experience.company}</Typography>
                            <Typography variant="body2">{experience.job_title}</Typography>
                        </div>
                        <div className="flex-items">
                            <IconButton sx={{color: "#b9acb4"}}>
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
        })}
    </>
  )
}

export default List