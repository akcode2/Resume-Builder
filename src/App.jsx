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
      fullName: "Kendall Roy",
      email: "kendall.roy@waystar.com",
      phoneNumber: "(555) 555-5555",
      address: "1234 Success St, New York, NY ",
    },
    education: [
      {
        school: "Harvard Business School",
        degree: "Master of Business Administration (MBA)",
        gradDate: "May 2010",
        location: "Boston, MA",
      },
      {
        school: "Wharton School of Business, University of Pennsylvania",
        degree: "Bachelor of Business Administration",
        gradDate: "May 2008",
        location: "Philadelphia, PA",
      },
    ],
    experience: [
      {
        company: "Waystar Royco",
        position: "Chief Executive Officer",
        startDate: "June 2018",
        endDate: "Present",
        location: "New York, NY",
        description: `
        * Led the company through major strategic shifts, resulting in significant revenue growth and market expansion.
        `,
      },
      {
        company: "Waystar Royco",
        position: "Vice President of Strategic Development",
        startDate: "May 2010",
        endDate: "June 2018",
        location: "New York, NY",
        description: `
        * Developed and executed strategies to diversify revenue streams and drive business growth.
        `,
      },
    ],
    activities: [
      {
        organization: "New York Business Association",
        role: "Board Member",
        startDate: "May 2011",
        endDate: "Present",
        location: "New York, NY",
        description:
          "* Actively involved in shaping policies and initiatives to promote economic growth and business development in the region.",
      },
      {
        organization: "Future Business Leaders Program",
        role: "Mentor",
        startDate: "September 2014",
        endDate: "Present",
        location: "New York, NY",
        description:
          "Guided and mentored aspiring business leaders, providing insights and advice to help them succeed in their careers.",
      },
      {
        organization: "Industry Conferences",
        role: "Speaker",
        startDate: "May 2011",
        endDate: "Present",
        location: "New York, NY",
        description:
          "Shared expertise and insights on business strategies, leadership, and innovation at various industry conferences.",
      },
    ],
    skills: [
      {
        Skills: [
          "Strategic Planning",
          "Leadership",
          "Financial Analysis",
          "Market Research",
          "Negotiation",
          "Marketing Strategy",
        ],
        Interests: ["Technology Trends", "Philanthropy", "Golf", "Fine Dining"],
      },
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

  const deleteEntry = (category, index) => {
    let updatedResume;
    if (
      category === "education" ||
      category === "experience" ||
      category === "activities"
    ) {
      if (resume[category].length === 1) {
        console.log(`Before splicing: ${updatedResume}`);
        updatedResume = {
          ...resume,
          [category]: [],
        };
        console.log(`After splicing: ${JSON.stringify(updatedResume)}`);
      } else {
        console.log(`Length not === 1. Before splicing: ${updatedResume}`);
        updatedResume = {
          ...resume,
          [category]: [
            ...resume[category].slice(0, index),
            ...resume[category].slice(index + 1)
          ],
        };
        console.log(`Length not  ==== 1. After splicing: ${JSON.stringify(updatedResume)}`);
      }
    }
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
          deleteEntry={deleteEntry}
          category={"education"}
        />
        <Experience
          resume={resume}
          handleInput={handleInput}
          deleteEntry={deleteEntry}
          category={"experience"}
        />
        <Activities
          resume={resume}
          handleInput={handleInput}
          deleteEntry={deleteEntry}
          category={"activities"}
        />
        <Skills resume={resume} handleInput={handleInput} category={"skills"} />
      </div>
      <div id="preview" className="preview">
        <div id="header">
          <div className="name">{resume["personalDetails"].fullName}</div>
          <div className="personalDetails">
            <div className="detail">{resume["personalDetails"].email}</div>
            <div className="detail">
              {resume["personalDetails"].phoneNumber}
            </div>
            <div className="detail">{resume["personalDetails"].address}</div>
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
                <div className="description">{item.description}</div>
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
                  <div className="role">{item.role}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                </div>
                <div className="description">{item.description}</div>
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
