import React from "react";
import '../App.css'
import { levelsMap } from "../util";

function Classic({personalInfo, experiences, educations, skills, summary}) {
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
      <div className="summary">
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    }

    {
      experiences.length > 0 &&
      experiences.map(experience => {
        return <div className="experiences" key={experience.company}>
          <h2>Experiences</h2>
          <div className="experience flex-container">
            <div className="duration flex-1 left-align">
              <p className="fn-bold">{experience.start_date.month}. {experience.start_date.year} - {experience.currentStatus ? "current" : <>{experience.end_date.month}. {experience.end_date.year} </>}</p>
              <p className="fn-bold">{experience.city} {experience.country}</p>
            </div>
            <div className="work flex-2">
              <p>{experience.job_title}, {experience.company}</p>
              <p>{experience.job_description}</p>
            </div>
          </div>
        </div>
      })
    }

    {
      educations.length > 0 &&
      educations.map(education => {
        return <div className="educations" key={education.institute}>
            <h2>Education</h2>
            <div className="education flex-container">
              <div className="duration flex-1 left-align">
                <p className="fn-bold">{education.currentStatus ? "Pursuing" : <>{education.graduation_date.month}. {education.graduation_date.year}</>}</p>
                <p className="fn-bold">{education.state}</p>
              </div>
              <div className="work flex-2">
                <p>{education.degree}, {education.field}</p>
                <p>{education.institute}, {education.city}, {education.state}</p>
              </div>
            </div>
          </div>
      })

    }

    {
      skills.length > 0 &&
      <div className="skills">
        <h2>Skills</h2>
        <div className="two-col-grid">
          {skills.map(data => {
            return <div className="two-col-grid-item flex-container skill" key={data.skill_id}>
              <p>{data.skill}</p>
              {data.level && <p>{levelsMap[data.level]}</p>}
            </div>
          })}
        </div>
      </div>
    }
  </div>;
}

export default Classic;
