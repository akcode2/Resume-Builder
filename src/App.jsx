import { useState } from "react";
import "./App.css";
import "./styles/Preview.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/Education.jsx";

function App() {
  // Resume is an object with nested objects for each section
  const [resume, setResume] = useState({
    personalDetails: {
      fullName: "Harry Potter",
      email: "hedwig@owlmail.com",
      phoneNumber: "(414)-232-9992",
      address: "The Cupboard Under the Stairs, 4 Privet Drive, Little Whinging, Surrey",
    },
    education: [{school: 'Hogwarts School of Witchcraft and Wizardry', degree: 'Wizard in Good Standing', startDate: 1991, endDate: 1998, location: 'Scotland'}],
    experience: [],
    activities: [],
    skills: [],
  });

  const handleDetailsInput = (event) => {
    const fieldToUpdate = event.target.name;
    // Copy the nested object and update the value
    const newPersonalDetails = {
      ...resume.personalDetails,
      [fieldToUpdate]: event.target.value,
    };
    // Copy the resume object and update it
    const updatedResume = { ...resume, personalDetails: newPersonalDetails };
    // Set the resume state variable
    setResume(updatedResume);
  };



  return (
    <>
      <div className="formControls">
        <PersonalDetails
          resume={resume}
          handleDetailsInput={handleDetailsInput}
        />

        <Education resume={resume} />
        <details>
          <summary>Professional Experience</summary>
          <button>+ Experience</button>
        </details>
        <details>
          <summary>Leadership & Activities</summary>
          <button>+ Activity</button>
        </details>
        <details>
          <summary>Skills & Interests</summary>
          <button>+ Activity</button>
        </details>
      </div>
      <div id="preview" className="preview">
        <div id="header">
          <div className="name">{resume["personalDetails"].fullName}</div>
          <div className="personalDetail">
            {resume["personalDetails"].email}
          </div>
          <div className="personalDetail">
            {resume["personalDetails"].phoneNumber}
          </div>
          <div className="personalDetail">
            {resume["personalDetails"].address}
          </div>
        </div>
        <div className="bodySection" id="eduPreview"></div>
        <div className="bodySection" id="expPreview"></div>
        <div className="bodySection" id="activitiesPreview"></div>
        <div className="bodySection" id="skillsPreview"></div>
      </div>
    </>
  );
}

export default App;
