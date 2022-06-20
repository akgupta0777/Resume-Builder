import React from "react";
import '../App.css'
import { levelsMap } from "../util";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

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
        return <div key={experience.id} className="experience flex-container">
            <div className="duration flex-1 left-align">
              <p className="fn-bold">{experience.start_date.month && `${experience.start_date.month}.`} {experience.start_date.year && `${experience.start_date.year}`} {experience.currentStatus ? " - current" : <>{experience.end_date.month && ` - ${experience.end_date.month}.`} {experience.end_date.year && `${experience.end_date.year}`} </>}</p>
              <b style={{fontSize: 12, letterSpacing: 0.9}}>{experience.city && `${experience.city},`}  {experience.state && `${experience.state}`}</b>
            </div>
            <div className="work flex-2">
              <p><span style={{fontWeight: 300}}>{experience.job_title}</span>, {experience.company}</p>
              <pre>{experience.job_description}</pre>
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
            return <div key={education.institute} className="education flex-container">
                    <div className="duration flex-1 left-align">
                      <p className="fn-bold">{education.currentStatus ? "Pursuing" : <>{education.graduation_date.month && `${education.graduation_date.month}.`} {education.graduation_date.year && ` - ${education.graduation_date.year}`}</>}</p>
                      <p className="fn-bold">{education.state}</p>
                    </div>
                    <div className="work flex-2">
                      <p>{education.degree}{education.field && `, ${education.field}`}</p>
                      <p>{education.institute}{education.city && `, ${education.city}`}{education.state && `, ${education.state}`}</p>
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
              {data.level && <p>{levelsMap[data.level]}</p>}
            </div>
          })}
        </div>
      </div>
    }
  </div>;
}

export default Armony;
