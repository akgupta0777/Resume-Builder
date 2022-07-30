import React from "react";
import '../App.css'
import { levelsMap } from "../util";
import { useResumeContext } from "../context/ResumeDataProvider";

function Classic() {
  const {personalInfo, experiences, projects, educations, skills, summary} = useResumeContext()
  return <div className="template-container classic">
    {
      Object.keys(personalInfo).length > 0 &&
      <div className="personal-info">
      {personalInfo.firstName || personalInfo.lastName ? <h1>{personalInfo.firstName} {personalInfo.lastName}</h1> : null}
      { personalInfo.phone && 
        <div className="details flex-container">
            <div className="flex-1"><p className="fn-bold">Phone:</p></div>
            <div className="flex-4"><p>{personalInfo.phone}</p></div>
        </div>
      }
      {
        personalInfo.email && 
        <div className="details flex-container">
          <div className="flex-1"><p className="fn-bold">Email:</p></div>
          <div className="flex-4"><p>{personalInfo.email}</p></div>
        </div>
      }
      {
        personalInfo.address ||
        personalInfo.city ||
        personalInfo.country ?
        <div className="details flex-container">
          <div className="flex-1"><p className="fn-bold">Address</p></div>
          <div className="flex-4"><p>{personalInfo.address}, {personalInfo.city}, {personalInfo.country}</p></div>
        </div> : null
      }
    </div>
    }
    {
      summary &&
      <div className="summary classic">
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    }

    {
      experiences.length > 0 &&
      <div className="experiences classic" >
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
      projects.length > 0 &&
      <div className="projects classic" >
          <h2>Projects</h2>
      {
        projects.map(project => {
          return <div key={project.id} className="project">
              <div style={{marginBottom: 10}}>
                <p style={{fontSize: 16, fontWeight: 700}}>{project.projectTitle}</p>
                <a
                  className="primary"
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  >{project.projectUrl}</a>
              </div>
              <div>
                <pre style={{fontSize: 14}}>{project.description}</pre>
              </div>
            </div>
        })
      }
        </div>
    }

    {
      educations.length > 0 &&
        <div className="educations classic">
            <h2>Education</h2>
      {educations.map(education => {
            return <div key={education.institute} className="education flex-container">
                    <div className="duration flex-1 left-align">
                      <p className="fn-bold">{education.currentStatus ? "Pursuing" : <>{education.graduation_date.month && `${education.graduation_date.month}.`} {education.graduation_date.year && ` ${education.graduation_date.year}`}</>}</p>
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
      <div className="skills classic">
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

export default Classic;
