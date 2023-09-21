import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function EduForm({ resume, index, handleInput, category }) {
  let emptyForm = true;
  // 0 is falsy, handle that case
  if (index >= 0) {
    emptyForm = false;
  }


  return (
    <>
      {/* <label>
        School
        <input
          name="school"
          type="text"
          value={emptyForm ? "" : resume[category][index].school}
          onChange={e => handleInput(e.target.name, e.target.value, category)}
        ></input>
      </label> */}
      <label>
        Degree
        <input
          name="degree"
          type="text"
          value={emptyForm ? "" : resume[category][index].degree}
          onChange={e => handleInput(e.target.name, e.target.value, category, index)}
        ></input>
      </label>
      <label>
        Start date
        <input
          name="startDate"
          type="text"
          value={emptyForm ? "" : resume[category][index].startDate}
          onChange={e => handleInput(e.target.name, e.target.value, category, index)}
        ></input>
      </label>
      {/* <label>
        End date
        <input
          name="endDate"
          type="text"
          value={emptyForm ? "" : resume[category][index].endDate}
          onChange={e => handleInput(e.target.name, e.target.value, category)}
        ></input>
      </label>
      <label>
        Location
        <input
          name="location"
          type="text"
          value={emptyForm ? "" : resume[category][index].location}
          onChange={e => handleInput(e.target.name, e.target.value, category)}
        ></input>
      </label> */}
      <div className="btnContainer">
        <Button key="deleteBtn" label="Delete" />
        <Button key="cancelBtn" label="Cancel" />
        <Button key="saveBtn" label="Save" />
      </div>
    </>
  );
}

export default EduForm;
