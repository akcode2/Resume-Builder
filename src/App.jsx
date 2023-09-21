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
      address:
        "The Cupboard Under the Stairs, 4 Privet Drive, Little Whinging, Surrey",
    },
    education: [
      {
        school: "Hogwarts School of Witchcraft and Wizardry",
        degree: "Wizard in Good Standing",
        startDate: 1991,
        endDate: 1998,
        location: "Scotland",
      },
      {
        school: "Discount Dave's Higher Learning",
        degree: "Bachelor of Science in Kicking Ass",
        startDate: 2021,
        endDate: 2023,
        location: "Beverly Hills",
      },
    ],
    experience: [],
    activities: [],
    skills: [],
  });


  // 1. Spread properties from resume into updatedResume,
  // 2. Access the [category] array and spread its items
  // 3. Access the object at [index] and spread its properties
  // 4. Update the [name] property
  // 5. Finally update the `resume` state variable with updatedResume
  const handleInput = (name, value, category, index) => {
    const updatedResume = {
      ...resume,
      [category] : [
        ...resume[category].slice(0, index),
       {...resume[category][index], [name] : value},
        ...resume[category].slice(index + 1)
      ]
    };
    setResume(updatedResume);
  }
  // Handle personal details inputs
  const handleDetailsInput = (name, value) => {
    const fieldToUpdate = name;

    let newObj = {
      ...resume["personalDetails"],
      [fieldToUpdate]: value,
    }

    const updatedResume = { ...resume, "personalDetails" : newObj}
    setResume(updatedResume);
  }

  return (
    <>
      <div className="formControls">
        <PersonalDetails
          resume={resume}
          handleDetailsInput={handleDetailsInput}
          category={"personalDetails"}
        />

        <Education 
          resume={resume}
          handleInput={handleInput}
          category={"education"} 
        />
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
