import { useState } from "react";
import Form from "./Form.jsx";

function Experience({
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
        {resume["experience"]
          .filter((item) => item.company != "")
          .map((item, index) => (
            <button
              key={`${item.company}_${index}`}
              onClick={() =>
                setActiveIndex({
                  ...activeIndex,
                  [category]: index,
                })
              }
            >
              {item.company}
            </button>
          ))}
      </div>
      <div className="form" id="experience">
        <div className="contents">
          {
            <Form
              resume={resume}
              index={activeIndex["experience"]}
              handleInput={handleInput}
              category={category}
              deleteEntry={deleteEntry}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          }
        </div>
      </div>
    </>
  );
}

export default Experience;
