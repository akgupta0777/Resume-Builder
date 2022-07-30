import React, {useState, useEffect} from 'react'
import { 
    TextField,
    Button,
    MenuItem
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { levels } from '../util';
import { useLocation, useNavigate } from 'react-router-dom';
import { useResumeContext } from '../context/ResumeDataProvider';

const MAX_SKILLS = 8

function SkillSet() {
    const setSkillsContext = useResumeContext()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
      setSkillsContext.skills.length > 0 &&
        setSkills(setSkillsContext.skills.map(data => {
            return {
                ...data,
                skill: data.skill,
                level: data.level
            }
        }))
    
    }, [setSkillsContext.skills])
    
    const [skills, setSkills] = useState([
        {
            skill_id: Math.random().toString(),
            level_id: Math.random().toString(),
            skill: '',
            level: ''
        },
        {
            skill_id: Math.random().toString(),
            level_id: Math.random().toString(),
            skill: '',
            level: ''
        },
        {
            skill_id: Math.random().toString(),
            level_id: Math.random().toString(),
            skill: '',
            level: ''
        },
    ])
    const [disable, setDisable] = useState(false)

    const addNewSkillInput = () =>{
        setSkills(prevSkills => [...prevSkills, {
            skill_id: Math.random().toString(),
            level_id: Math.random().toString(),
            skill: '',
            level: ''
        }])
        if(skills.length + 1 === MAX_SKILLS){
            setDisable(true)
            return
        }
    }

    const handleSkill = (e, id) => {
        setSkills(prevSkills => {
            return prevSkills.map(data => {
                if(data.skill_id === id){
                    data.skill = e.target.value
                }
                return data
            })
        })
    }
    
    const handleLevel = (e, id) => {
        setSkills(prevSkills => {
            return prevSkills.map(data => {
                if(data.level_id === id){
                    data.level = e.target.value
                }
                return data
            })
        })
    }

    const handleSaveAndNext = () => {
        const data = skills.filter(data => data.skill || data.level)
        data.length > 0 ?
            setSkillsContext.setSkills(data) :
            setSkillsContext.setSkills([])
        
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/summary')
        }
    }
    const handleBack = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/educations')
        }
    }

  return (
    <>
    <div className='form-personal wt-70'>
        {
            skills.map(skillItem => 
                <div key={skillItem.skill_id} className='two-col-grid'>
                    <div className="two-col-grid-item">
                        <TextField 
                            fullWidth 
                            label="Skill"
                            id="skill"
                            size="small"
                            value={skillItem.skill}
                            onChange={e => handleSkill(e, skillItem.skill_id)}
                        />
                    </div>
                    <div className="two-col-grid-item">
                        <TextField
                            id="outlined-level"
                            select
                            label="Level"
                            size="small"
                            value={skillItem.level}
                            onChange={e => handleLevel(e, skillItem.level_id)}
                            fullWidth
                            >
                            {levels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </div>
            )
        }
        <div className="two-col-grid-item">
            <Button 
                variant='outlined' 
                endIcon={<AddIcon />}
                onClick={addNewSkillInput}
                disabled={disable}
            >Add more skills</Button>
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
    </>
  )
}

export default SkillSet