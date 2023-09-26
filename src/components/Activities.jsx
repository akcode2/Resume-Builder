import { useState } from "react";
import Form from "./Form.jsx";

function Activities({ resume, handleInput, deleteEntry, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <div className="formCategory" id="activities">
        <h2>Leadership and activities</h2>
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
          {/* Otherwise show list of activities as buttons */}
          {!showForm &&
            resume["activities"].map((item, index) => (
              <button
                key={`${item.organization}_${item.role}`}
                onClick={() => toggleShowForm(index)}
              >
                {item.organization}
              </button>
            ))}
          {/* Afterwards, show add button to add activity */}
          {!showForm && (
            <button
              id="addActivity"
              onClick={() => toggleShowForm(resume[category].length)}
            >
              + Leadership / Activity
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Activities;
