import React from 'react'
import Header from '../components/Header'
import Classic from '../templates/Classic'
import { Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useResumeContext } from '../context/ResumeDataProvider';

function ResumePreview() {
    const {personalInfo, experiences, educations, skills, summary} = useResumeContext()
    const download = () => {
        let doc = document.querySelector('.template-container');
        html2canvas(doc)
        .then(canvas => {
                const imgData = canvas.toDataURL('image/png')
                let pdf = jsPDF('p', 'px', 'a4')
                let width = pdf.internal.pageSize.getWidth()
                let height = pdf.internal.pageSize.getHeight()
                pdf.addImage(imgData, 'PNG', 0, 0, width, height)
                pdf.save('resume.pdf')
        }).catch(error =>{
            console.log('Error', error);
        })
    }

  return (
    <>
        <Header />
        <div className="container preview-grid" style={{marginTop: "1.5em"}}>
            <Classic 
                personalInfo={personalInfo}
                experiences={experiences}
                educations={educations}
                skills={skills}
                summary={summary}
            />
            <div className="download">
                <Button
                    variant='contained'
                    startIcon={<DownloadIcon />}
                    fullWidth
                    style={{ gridColumn: "auto / span 1", padding: '12px 0' }}
                    onClick={download}
                >Download</Button>
                <Button
                    variant='contained'
                    startIcon={<ModeEditOutlineIcon />}
                    fullWidth
                    style={{ gridColumn: "auto / span 1", padding: '12px 0' }}
                >Edit Resume</Button>
            </div>
        </div>
    </>
  )
}

export default ResumePreview