import { useState } from "react";
import EduForm from "./EduForm.jsx";

function Education({ resume, handleInput, deleteEntry, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <div className="formCategory" id="education">
        <h2>Education</h2>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <EduForm
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
              toggleShowForm={toggleShowForm} // Pass toggleShowForm as a prop to allow form to be canceled
              deleteEntry={deleteEntry}
            />
          )}
          {/* Otherwise show list of institutions as buttons */}
          {!showForm &&
            resume.education.map((item, index) => (
              <button key={item.school} onClick={() => toggleShowForm(index)}>
                {item.school}
              </button>
            ))}
          {/* Afterwards, show add button to add institution */}
          {!showForm && (
            // Use array.length as the index so that we can extend the array
            <button id="addInstitution" onClick={() => toggleShowForm(resume[category].length)}> 
              + Institution
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Education;
