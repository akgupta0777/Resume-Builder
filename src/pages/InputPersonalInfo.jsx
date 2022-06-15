import React, {useRef} from 'react'
import { Typography, TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useResumeContext } from '../context/ResumeDataProvider'

function InputPersonalInfo() {
    const {personalInfo, setPersonalInfo} = useResumeContext()
    
    const navigate = useNavigate()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const addressRef = useRef()
    const cityRef = useRef()
    const countryRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    
    const handleSaveAndNext = () => {
        setPersonalInfo({
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            address: addressRef.current.value,
            city: cityRef.current.value,
            country: countryRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        })
        navigate('/resume/experiences')
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
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={firstNameRef}
                        onChange={e => firstNameRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Last name" 
                        id="outlined-size-normal" 
                        size="small" 
                        autoComplete='off'
                        ref={lastNameRef}
                        onChange={e => lastNameRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item" style={{gridColumn: 'auto / span 2'}}>
                    <TextField 
                        fullWidth 
                        label="Address" 
                        id="outlined-size-normal" 
                        size="small"
                        autoComplete='off'
                        ref={addressRef}
                        onChange={e => addressRef.current.value = e.target.value.trim()}
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
                        fullWidth 
                        label="Country" 
                        id="outlined-size-normal" 
                        size="small" 
                        autoComplete='off'
                        ref={countryRef}
                        onChange={e => countryRef.current.value = e.target.value.trim()}
                        />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Email address" 
                        id="outlined-size-normal" 
                        size="small" 
                        autoComplete='off'
                        ref={emailRef}
                        onChange={e => emailRef.current.value = e.target.value.trim()}
                    />
                </div>
                <div className="two-col-grid-item">
                    <TextField 
                        fullWidth 
                        label="Phone" 
                        id="outlined-size-normal" 
                        size="small" 
                        autoComplete='off'
                        ref={phoneRef}
                        onChange={e => phoneRef.current.value = e.target.value.trim()}
                    />
                </div>
            </div>
            <div className="back-or-save wt-70">
                <Button variant="contained" disabled>BACK</Button>
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