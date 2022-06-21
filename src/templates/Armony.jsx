import React from "react";
import '../App.css'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { Rating } from "@mui/material";

function Armony({personalInfo, experiences, educations, skills, summary}) {
  return <div className="template-container classic">
    {
      Object.keys(personalInfo).length > 0 &&
      <div className="personal-info armony">
      {personalInfo.firstName || personalInfo.lastName ? <h1>{personalInfo.firstName} {personalInfo.lastName}</h1> : null}
      <div className="flex-container" style={{justifyContent: 'space-between'}}>
        {
              personalInfo.address ||
              personalInfo.city ||
              personalInfo.country ?
              <div className="details flex-container" style={{alignItems: 'center', gap: 5}}>
              <div><p className="fn-bold">
                <HomeIcon sx={{ color: '#4991d8' }} />
              </p></div>
              <div><p>{personalInfo.address}, {personalInfo.city}, {personalInfo.country}</p></div>
              </div> : null
        }
        { personalInfo.phone && 
            <div className="details flex-container" style={{alignItems: 'center', gap: 5}}>
                <div><p>
                    <PhoneIcon sx={{ color: '#4991d8' }}  />
                </p></div>
                <div><p>{personalInfo.phone}</p></div>
            </div>
        }
        {
            personalInfo.email && 
            <div className="details flex-container" style={{alignItems: 'center', gap: 5}}>
            <div><p className="fn-bold">
                <EmailIcon sx={{ color: '#4991d8' }} />
            </p></div>
            <div><p>{personalInfo.email}</p></div>
            </div>
        }
      </div>
    </div>
    }
    {
      summary &&
      <div className="summary armony">
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    }

    {
      experiences.length > 0 &&
      <div className="experiences armony" >
          <h2>Experiences</h2>
      {
      experiences.map(experience => {
        return <div key={experience.id} className="experience">
            <div style={{marginBottom: 10}}>
              <p style={{fontSize: 16, fontWeight: 700}}>{experience.job_title}, {experience.company}.  {experience.city && `${experience.city},`}  {experience.state && `${experience.state}`}</p>
              <p className="primary">{experience.start_date.month && `${experience.start_date.month}.`} {experience.start_date.year && `${experience.start_date.year}`} {experience.currentStatus ? " - current" : <>{experience.end_date.month && ` - ${experience.end_date.month}.`} {experience.end_date.year && `${experience.end_date.year}`} </>}</p>
            </div>
            <div>
              <pre style={{fontSize: 14}}>{experience.job_description}</pre>
            </div>
          </div>
      })}
        </div>
    }

    {
      educations.length > 0 &&
        <div className="educations armony">
            <h2>Education</h2>
      {educations.map(education => {
            return <div key={education.institute} className="education" style={{marginBottom: 10}}>
                    <div>
                      <p style={{fontSize: 16, fontWeight: 700}}>{education.institute}{education.city && `, ${education.city}`}{education.state && `, ${education.state}`}</p>
                    </div>
                    <div>
                      <p className="primary">{education.degree}{education.field && `, ${education.field}`}{education.currentStatus ? ", pursuing" : <>{education.graduation_date.month && `, ${education.graduation_date.month}.`} {education.graduation_date.year && ` - ${education.graduation_date.year}`}</>}</p>
                    </div>
                  </div>
      })}
      </div>

    }

    {
      skills.length > 0 &&
      <div className="skills armony">
        <h2>Skills</h2>
        <div className="two-col-grid">
          {skills.map(data => {
            return <div className="two-col-grid-item flex-container skill" key={data.skill_id}>
              <p className="fn-bold">{data.skill}</p>
              <p>
                <Rating
                  name="read-only"
                  value={data.level}
                  size='small'
                  readOnly
                />
              </p>
            </div>
          })}
        </div>
      </div>
    }
  </div>;
}

export default Armony;
