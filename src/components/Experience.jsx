import { useState } from "react";
import Form from "./Form.jsx";

function Experience({ resume, handleInput, deleteEntry, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <div className="formCategory" id="experience">
        <h2>Experience</h2>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <Form
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
              toggleShowForm={toggleShowForm}
              deleteEntry={deleteEntry}
            />
          )}
          {/* Otherwise show list of experience as buttons */}
          {!showForm &&
            resume["experience"].map((item, index) => (
              <button key={`${item.company}_${item.position}`} onClick={() => toggleShowForm(index)}>
                {item.company}
              </button>
            ))}
          {/* Afterwards, show add button to add experience */}
          {!showForm && (
            <button
              id="addExperience"
              onClick={() => toggleShowForm(resume[category].length)}
            >
              + Company
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Experience;
