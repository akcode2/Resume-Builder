import { useState } from "react";
import "./App.css";
import "./styles/Preview.css";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Activities from "./components/Activities.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  // Resume is an object with nested objects for each section
  const [resume, setResume] = useState({
    personalDetails: {
      fullName: "Harry Potter",
      email: "hedwig@owlmail.com",
      phoneNumber: "(414)-232-9992",
      address:
        "London, UK",
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
    experience: [
      {
        company: "Ministry of Magic",
        position: "Auror",
        startDate: 1999,
        endDate: "present",
        location: "London, England",
        description: "Fight baddies",
      },
    ],
    activities: [
      {
        organization: "Hogwarts Quidditch Team",
        position: "Captain",
        startDate: 1991,
        endDate: 1996,
        location: "London, UK",
        description: "Started from the bottom",
      },
    ],
    skills: [
      { skill: "Playing chess" },
      { skill: "Underwater basket-weaving" },
    ],
  });

  // 1. Spread properties from resume into updatedResume,
  // 2. Access the [category] array and spread its items
  // 3. Access the object at [index] and spread its properties
  // 4. Update the [name] property
  // 5. Finally update the `resume` state variable with updatedResume
  const handleInput = (name, value, category, index) => {
    const updatedResume = {
      ...resume,
      [category]: [
        ...resume[category].slice(0, index),
        { ...resume[category][index], [name]: value },
        ...resume[category].slice(index + 1),
      ],
    };
    setResume(updatedResume);
  };

  // Handle personal details inputs
  const handleDetailsInput = (name, value) => {
    const fieldToUpdate = name;

    let newObj = {
      ...resume["personalDetails"],
      [fieldToUpdate]: value,
    };

    const updatedResume = { ...resume, personalDetails: newObj };
    setResume(updatedResume);
  };

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
        <Experience
          resume={resume}
          handleInput={handleInput}
          category={"experience"}
        />
        <Activities
          resume={resume}
          handleInput={handleInput}
          category={"activities"}
        />
        <Skills resume={resume} handleInput={handleInput} category={"skills"} />
      </div>
      <div id="preview" className="preview">
        <div id="header">
          <div className="name">{resume["personalDetails"].fullName}</div>
          <div className="personalDetails">
            <div className="detail">
              {resume["personalDetails"].email}
            </div>
            <div className="detail">
              {resume["personalDetails"].phoneNumber}
            </div>
            <div className="detail">
              {resume["personalDetails"].address}
            </div>
          </div>
        </div>
        <div className="bodySection" id="eduPreview">
          <div className="bodyHeading">
            <h1>Education</h1>
          </div>
          <div>
            {resume["education"].map((item) => (
                <div key={Math.random()} className="eduItem">
                  <div className="schoolAndLocation">
                    <div className="school">{item.school}</div>
                    <div className="location">{item.location}</div>
                  </div>
                  <div className="degreeAndDates">
                  <div className="degree">{item.degree}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                  </div>
                </div>
              ))}
          </div>

        </div>
        <div className="bodySection" id="expPreview">
          <div className="bodyHeading">
            <h1>Experience</h1>
          </div>
          <div>
            {resume["experience"].map((item) => (
              <div key={Math.random()} className="expItem">
                <div className="companyAndLocation">
                  <div className="company">{item.company}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="positionAndDates">
                  <div className="position">{item.position}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                </div>
                <div className="description">
                  {item.description}
                </div>
              </div>  
            ))}
          </div>
        </div>
        <div className="bodySection" id="activitiesPreview">
          <div className="bodyHeading">
            <h1>Leadership and Activities</h1>
          </div>
          <div>
            {resume["activities"].map((item) => (
              <div key={Math.random()} className="activitiesItem">
                <div className="companyAndLocation">
                  <div className="company">{item.organization}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="positionAndDates">
                  <div className="position">{item.position}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                </div>
                <div className="description">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bodySection" id="skillsPreview">
          <div className="bodyHeading">
            <h1>Skills and Interests</h1>
          </div>
          <div>
            {resume["skills"].map((item) => (
              <div key={Math.random()} className="skillsItem">
                <div className="skill">{item.skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
