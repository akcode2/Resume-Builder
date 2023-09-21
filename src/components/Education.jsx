import { useState } from "react";
import EduForm from "./EduForm.jsx";

function Education({ resume, handleInput, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <details id="education">
        <summary>Education</summary>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <EduForm
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
              toggleShowForm={toggleShowForm} // Pass toggleShowForm as a prop to allow form to be canceled
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
            <button id="addInstitution" onClick={() => toggleShowForm()}>
              + Institution
            </button>
          )}
        </div>
      </details>
    </>
  );
}

export default Education;
