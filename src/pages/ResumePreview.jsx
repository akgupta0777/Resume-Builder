import React, { useEffect } from 'react'
import Header from '../components/Header'
import Classic from '../templates/Classic'
import Collegiate from '../templates/Collegiate'
import Armony from '../templates/Armony'
import { Button, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Option from '../components/Option';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useResumeContext } from '../context/ResumeDataProvider';

function ResumePreview() {
    useEffect(() => {
        document.title = "Preview | Online Resume Builder"
      }, [])

    const {templateId} = useResumeContext()

    const download = () => {
        let doc = document.querySelector('.template-container');
        html2canvas(doc)
        .then(canvas => {
                const imgData = canvas.toDataURL('image/png')
                let pdf = jsPDF('p', 'px', 'a4')
                let width = pdf.internal.pageSize.getWidth()
                let height = pdf.internal.pageSize.getHeight()
                pdf.addImage(imgData, 'PNG', 0, 0, width, height)
                pdf.save(`resume${Math.floor(Math.random() * 10000)}.pdf`)
        }).catch(error =>{
            console.log('Error', error);
        })
    }

  return (
    <>
        <Header />
        <div className="container preview-grid" style={{marginTop: "1.5em"}}>
            {
                templateId === "classic" ?
                    <Classic /> :
                    templateId === "collegiate" ?
                        <Collegiate /> :
                        templateId === "armony" ?
                            <Armony /> :
                                <Classic />
            }
            <div className="download">
                <Button
                    variant='contained'
                    startIcon={<DownloadIcon />}
                    fullWidth
                    style={{ padding: '12px 0' }}
                    onClick={download}
                >Download</Button>
                <Accordion sx={{border: "2px solid #1976d2a1", boxShadow: "none"}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon color="primary" />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography color="primary" variant="button">EDIT RESUME</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Option />
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </>
  )
}

export default ResumePreview