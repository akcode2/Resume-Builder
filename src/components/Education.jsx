import { useState } from "react";
import Form from "./Form.jsx";

function Education({
  resume,
  handleInput,
  deleteEntry,
  category,
  activeIndex = { activeIndex },
  setActiveIndex = { setActiveIndex },
}) {
  const [showForm, setShowForm] = useState(false);
  // Show the latest entry as a form by default
  const latestIndex = resume[category].length - 1;
  const [indexToShow, setIndexToShow] = useState(resume[category].length);

  return (
    <>
      {/* Display current entries as buttons */}
      <div className="entriesCol">
        <h2>Education</h2>
        {resume["education"]
          .filter((item) => item.school !== "")
          .map((item, index) => (
            <button
              key={`${item.school}_${item.degree}`}
              onClick={() =>
                setActiveIndex({
                  ...activeIndex,
                  [category]: index,
                })
              }
            >
              {item.school}
            </button>
          ))}

        {/* Show button to add an institution only if the current entry has a school */}
        {/* {resume[category][indexToShow] &&
          resume[category][indexToShow]["school"] !== "" && (
            <button
              id="addInstitution"
              onClick={() => setIndexToShow(resume[category].length)}
            >
              + Institution
            </button>
          )} */}
      </div>
      <div className="form" id="education">
        <div className="contents">
          {
            <Form
              resume={resume}
              index={activeIndex["education"]}
              handleInput={handleInput}
              category={category}
              deleteEntry={deleteEntry}
              setIndexToShow={setIndexToShow}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          }
        </div>
      </div>
    </>
  );
}

export default Education;
