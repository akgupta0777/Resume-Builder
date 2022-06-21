import React, { useContext, useState } from "react";

const ResumeContext = React.createContext();

export const useResumeContext = () => {
  return useContext(ResumeContext);
};

function ResumeDataProvider({ children }) {
  const [templateId, setTemplateId] = useState("classic");
  const [personalInfo, setPersonalInfo] = useState({});
  const [summary, setSummary] = useState("");
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const clearContext = () => {
    setPersonalInfo({});
    setSummary("");
    setEducations([]);
    setExperiences([]);
    setSkills([]);
  };

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
        templateId,
        setTemplateId,
        clearContext,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export default ResumeDataProvider;
