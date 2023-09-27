import "../styles/FormControls.css";
import PersonalDetails from "./PersonalDetails.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Activities from "./Activities.jsx";
import Skills from "./Skills.jsx";

function FormControls({
  resume,
  activeCat,
  formLabels,
  formCategories,
  setActiveCat,
  handleDetailsInput,
  handleInput,
  deleteEntry,
  handleSkillsSubmit,
  handleDeleteTag,
}) {
  return (
    <>
      <div id="formNav">
        {/* Create nav buttons from formLabels */}
        {formLabels.map((label, i) => (
          <button
            key={`nav-${label}`}
            className={`navItem ${
              activeCat === formCategories[i] ? "active" : ""
            }
              `}
            onClick={() => setActiveCat(`${formCategories[i]}`)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* Conditionally render form components */}
      <div id="formContent">
        {activeCat === "personalDetails" && (
          <PersonalDetails
            resume={resume}
            handleDetailsInput={handleDetailsInput}
            category={"personalDetails"}
          />
        )}
        {activeCat === "education" && (
          <Education
            resume={resume}
            handleInput={handleInput}
            deleteEntry={deleteEntry}
            category={"education"}
          />
        )}
        {activeCat === "experience" && (
          <Experience
            resume={resume}
            handleInput={handleInput}
            deleteEntry={deleteEntry}
            category={"experience"}
          />
        )}
        {activeCat === "activities" && (
          <Activities
            resume={resume}
            handleInput={handleInput}
            deleteEntry={deleteEntry}
            category={"activities"}
          />
        )}
        {activeCat === "skills" && (
          <Skills
            resume={resume}
            handleSkillsSubmit={handleSkillsSubmit}
            handleDeleteTag={handleDeleteTag}
          />
        )}
      </div>
    </>
  );
}

export default FormControls;
