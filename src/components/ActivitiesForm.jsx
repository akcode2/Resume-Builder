import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function ActivitiesForm({ resume, index, handleInput, category }) {
  let emptyForm = true;
  // 0 is falsy, handle that case
  if (index >= 0) {
    emptyForm = false;
  }

  return (
    <>
      <label>
        Organization name
        <input
          name="organization"
          type="text"
          value={emptyForm ? "" : resume[category][index].organization}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Position or title
        <input
          name="position"
          type="text"
          value={emptyForm ? "" : resume[category][index].position}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Start date
        <input
          name="startDate"
          type="text"
          value={emptyForm ? "" : resume[category][index].startDate}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        End date
        <input
          name="endDate"
          type="text"
          value={emptyForm ? "" : resume[category][index].endDate}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Location
        <input
          name="location"
          type="text"
          value={emptyForm ? "" : resume[category][index].location}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Description
        <input
          name="description"
          type="text"
          value={emptyForm ? "" : resume[category][index].description}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <div className="btnContainer">
        <Button id="deleteBtn" label="Delete" />
        <Button id="cancelBtn" label="Cancel" />
        <Button id="saveBtn" label="Save" />
      </div>
    </>
  );
}

export default ActivitiesForm;
