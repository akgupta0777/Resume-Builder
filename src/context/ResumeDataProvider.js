import React, { useContext, useState } from "react";

const ResumeContext = React.createContext();

export const useResumeContext = () => {
  return useContext(ResumeContext);
};

function ResumeDataProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState({});
  const [summary, setSummary] = useState("");
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        educations,
        setEducations,
        experiences,
        setExperiences,
        summary,
        setSummary,
        skills,
        setSkills,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeDataProvider;
