import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import ChooseTemplates from "./pages/ChooseTemplates";
import InputPersonalInfo from "./pages/InputPersonalInfo";
import InputExperience from "./pages/InputExperience";
import InputEducation from "./pages/InputEducation";
import InputSkills from "./pages/InputSkills";
import InputSummary from "./pages/InputSummary";
import ResumePreview from "./pages/ResumePreview";
import ResumeDataProvider from "./context/ResumeDataProvider";
import InputProjects from "./pages/InputProjects";

function App() {
  return (
    <>
      <ResumeDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="introduction" element={<Introduction />} />
            <Route
              path="resume/choose-templates"
              element={<ChooseTemplates />}
            />
            <Route
              path="resume/personal-infos"
              element={<InputPersonalInfo />}
            />
            <Route path="resume/experiences" element={<InputExperience />} />
            <Route path="resume/projects" element={<InputProjects />} />
            <Route path="resume/educations" element={<InputEducation />} />
            <Route path="resume/skills" element={<InputSkills />} />
            <Route path="resume/summary" element={<InputSummary />} />
            <Route path="resume/resume-preview" element={<ResumePreview />} />
          </Routes>
        </BrowserRouter>
      </ResumeDataProvider>
    </>
  );
}

export default App;
