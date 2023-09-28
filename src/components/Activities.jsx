import { useState } from "react";
import Form from "./Form.jsx";

function Activities({
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
        <h2>Leadership & Activities</h2>
        {resume["activities"]
          .filter((item) => item.organization != "")
          .map((item, index) => (
            <button
              key={`${item.organization}_${index}`}
              onClick={() =>
                setActiveIndex({
                  ...activeIndex,
                  [category]: index,
                })
              }
            >
              {item.organization}
            </button>
          ))}
      </div>
      <div className="form" id="activities">
        {
          <Form
            resume={resume}
            index={activeIndex["activities"]}
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

export default Activities;
