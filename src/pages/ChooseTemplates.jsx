import React from 'react'
import Header from '../components/Header'
import { Typography, Button } from '@mui/material'
import armony from '../assets/armony.png'
import classic from '../assets/classic.png'
import collegiate from '../assets/collegiate.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { useResumeContext } from '../context/ResumeDataProvider'

function ChooseTemplates() {
  const {setTemplateId} = useResumeContext()
  const navigate = useNavigate()
  const location = useLocation()

  const chooseTemplate = e => {
    setTemplateId(e.target.name)
    if(location.state)
      navigate('/resume/resume-preview')
    else{
      navigate('/resume/personal-infos')
    }
  }
  return (
    <>
      <Header />
      <div style={{textAlign: 'center', marginBottom: 30}}>
        <Typography variant='h5' mt={2}>CHOOSE YOUR</Typography>
          <Typography variant='h4' color='primary'>RESUME TEMPLATE</Typography>
      </div>
      <div className="templates-list">
        <div className="template">
          <div className="image">
            <img src={classic} alt="classic-template-img" loading='lazy' />
          </div>
          <Button 
            name='classic'
            variant='contained' 
            fullWidth
            onClick={chooseTemplate}
          >Classic</Button>
        </div>
        <div className="template">
          <div className="image">
            <img src={collegiate} alt="collegiate-template-img" loading='lazy' />
          </div>
          <Button 
            name='collegiate'
            variant='contained' 
            fullWidth
            onClick={chooseTemplate}
          >Collegiate</Button>
        </div>
        <div className="template">
          <div className="image">
            <img src={armony} alt="armony-template-img" loading='lazy' />
          </div>
          <Button 
            name='armony'
            variant='contained' 
            fullWidth
            onClick={chooseTemplate}
          >Armony</Button>
        </div>
      </div>
    </>
  )
}

export default ChooseTemplates