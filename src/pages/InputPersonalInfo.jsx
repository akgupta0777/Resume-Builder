import React, {useState, useEffect} from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import { useResumeContext } from '../context/ResumeDataProvider'

function InputPersonalInfo(props) {

    useEffect(() => {
        document.title = "Personal Information | Online Resume Builder"
      }, [])

    const {personalInfo, setPersonalInfo} = useResumeContext()
    const location = useLocation()
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState(personalInfo.firstName)
    const [lastName, setLastName] = useState(personalInfo.lastName)
    const [address,setAddress] = useState(personalInfo.address)
    const [city, setCity] = useState(personalInfo.city)
    const [country, setCountry] = useState(personalInfo.country)
    const [email, setEmail] = useState(personalInfo.email)
    const [phone, setPhone] = useState(personalInfo.phone)
    
    const handleSaveAndNext = () => {
        setPersonalInfo({
            firstName,
            lastName,
            address,
            city,
            country,
            email,
            phone
        })
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/experiences')
        }

    }

    const handleBack = () => {
        if(location.state){
            navigate('/resume/resume-preview')
        }else{
            navigate('/resume/choose-templates')
        }
    }

  return (
    <>
        <Header />
        <div className="container">
            <Typography variant="h2">Personal Information</Typography>
            <Typography variant="body1" gutterBottom>Employers will use this information to contact you.</Typography>
            <div className='two-col-grid form-personal wt-70'>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="First name" 
                        id="first-name" 
                        size="small"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Last name" 
                        id="last-name" 
                        size="small"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className="two-col-grid-item" style={{gridColumn: 'auto / span 2'}}>
                    <TextField 
                        fullWidth 
                        label="Address" 
                        id="address" 
                        size="small"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="City" 
                        id="city" 
                        size="small"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Country" 
                        id="country" 
                        size="small" 
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Email address" 
                        id="email" 
                        size="small"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Phone" 
                        id="phone" 
                        size="small"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
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