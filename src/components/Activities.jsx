import { useState } from "react";
import ActivitiesForm from "./ActivitiesForm.jsx";

function Activities({ resume, handleInput, category }) {
  const [showForm, setShowForm] = useState(false);
  const [indexToShow, setIndexToShow] = useState(-1);

  const toggleShowForm = (index) => {
    setShowForm(!showForm);
    setIndexToShow(index);
  };

  return (
    <>
      <details id="activities">
        <summary>Leadership and activities</summary>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && (
            <ActivitiesForm
              resume={resume}
              index={indexToShow}
              handleInput={handleInput}
              category={category}
            />
          )}
          {/* Otherwise show list of activities as buttons */}
          {!showForm &&
            resume["activities"].map((item, index) => (
              <button
                key={item.organization}
                onClick={() => toggleShowForm(index)}
              >
                {item.organization}
              </button>
            ))}
          {/* Afterwards, show add button to add activity */}
          {!showForm && (
            <button id="addActivity" onClick={() => toggleShowForm()}>
              + Leadership / Activity
            </button>
          )}
        </div>
      </details>
    </>
  );
}

export default Activities;
