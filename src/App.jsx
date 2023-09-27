import { useState } from "react";
import "./App.css";
import FormControls from "./components/FormControls.jsx";
import Preview from "./components/Preview.jsx";

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
    skills: {
      skills: [
        "Strategic Planning",
        "Leadership",
        "Financial Analysis",
        "Market Research",
        "Negotiation",
        "Marketing Strategy",
      ],
      interests: ["Technology Trends", "Philanthropy", "Golf", "Fine Dining"],
    },
  });

  // Remember which form category should be active
  const [activeCat, setActiveCat] = useState("personalDetails");

  const formLabels = [
    "Personal details",
    "Education",
    "Experience",
    "Leadership & Activities",
    "Skills & Interests",
  ];
  const formCategories = [
    "personalDetails",
    "education",
    "experience",
    "activities",
    "skills",
  ];

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

  const deleteEntry = (category, index) => {
    let updatedResume;
    // Use a different deletion method for skills section
    if (
      category === "education" ||
      category === "experience" ||
      category === "activities"
    ) {
      if (resume[category].length === 1) {
        updatedResume = {
          ...resume,
          [category]: [],
        };
      } else {
        updatedResume = {
          ...resume,
          [category]: [
            ...resume[category].slice(0, index),
            ...resume[category].slice(index + 1),
          ],
        };
      }
    }
    setResume(updatedResume);
  };

  const handleSkillsSubmit = (skillsOrInterests, value) => {
    console.log("handleSkillsSubmit was called");
    const updatedResume = {
      ...resume,
      skills: {
        ...resume["skills"],
        [skillsOrInterests]: [...resume["skills"][skillsOrInterests], value],
      },
    };

    setResume(updatedResume);
  };

  const handleDeleteTag = (skillsOrInterests, index) => {
    // Make a copy of the array and splice out the tag
    const arr = resume["skills"][skillsOrInterests];
    arr.splice(index, 1);
    // Make a copy of resume and update it
    const updatedResume = {
      ...resume,
      skills: {
        ...resume["skills"],
        [skillsOrInterests]: arr,
      },
    };
    // Update the state variable
    setResume(updatedResume);
  };

  return (
    <>
      <div id="formControls">
        <FormControls
          resume={resume}
          activeCat={activeCat}
          formLabels={formLabels}
          formCategories={formCategories}
          setActiveCat={setActiveCat}
          handleDetailsInput={handleDetailsInput}
          handleInput={handleInput}
          deleteEntry={deleteEntry}
          handleSkillsSubmit={handleSkillsSubmit}
          handleDeleteTag={handleDeleteTag}
        />
      </div>
      <div id="preview">
        <Preview resume={resume} />
      </div>
    </>
  );
}

export default App;
