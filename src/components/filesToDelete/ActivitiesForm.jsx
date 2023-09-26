import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function ActivitiesForm({
  resume,
  index,
  handleInput,
  category,
  toggleShowForm,
  deleteEntry,
}) {
  let emptyForm = true;
  // 0 is falsy, handle that case
  if (index >= 0) {
    emptyForm = false;
  }

  // Call toggleShowForm on the parent component
  const doneForm = () => {
    // Set showForm to false and indexToShow to -1
    toggleShowForm(-1);
  };

  const deleteAndDone = () => {
    console.log(`deleting index: ${index}`);
    deleteEntry("activities", index);
    toggleShowForm(-1);
  };

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
        Role
        <input
          name="role"
          type="text"
          value={emptyForm ? "" : resume[category][index].role}
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
        <Button id="doneBtn" label="Done" handleClick={doneForm} />
        <Button id="deleteBtn" label="Delete" handleClick={deleteAndDone}/>
      </div>
    </>
  );
}

export default ActivitiesForm;
