import { useState } from "react";
import ExpForm from "./ExpForm.jsx";

function Experience({ resume, handleInput, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <details id="experience">
        <summary>Experience</summary>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <ExpForm
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
              toggleShowForm={toggleShowForm}
            />
          )}
          {/* Otherwise show list of experience as buttons */}
          {!showForm &&
            resume["experience"].map((item, index) => (
              <button key={item.company} onClick={() => toggleShowForm(index)}>
                {item.company}
              </button>
            ))}
          {/* Afterwards, show add button to add experience */}
          {!showForm && (
            <button id="addExperience" onClick={() => toggleShowForm()}>
              + Company
            </button>
          )}
        </div>
      </details>
    </>
  );
}

export default Experience;
