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
  return (
    <>
      {/* Display current entries as buttons */}
      <div className="entriesCol">
        <h2>Education</h2>
        {resume["education"]
          .filter((item) => item.school != "")
          .map((item, index) => (
            <button
              key={`${item.school}_${index}`}
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
      </div>
      <div className="form" id="education">
        {
          <Form
            resume={resume}
            index={activeIndex["education"]}
            handleInput={handleInput}
            category={category}
            deleteEntry={deleteEntry}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        }
      </div>
    </>
  );
}

export default Education;
