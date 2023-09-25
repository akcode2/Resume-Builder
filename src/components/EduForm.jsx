import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function EduForm({
  resume,
  index,
  handleInput,
  category,
  toggleShowForm,
  deleteEntry,
}) {
  // If object does not exist at index, create it
  if (resume[category].length === index) {
    resume[category][index] = {
      school: "",
      degree: "",
      gradDate: "",
      location: "",
    };
  }

  // Call toggleShowForm on the parent component
  const doneForm = () => {
    // Set showForm to false and indexToShow to -1
    toggleShowForm(-1);
  };

  const deleteAndDone = () => {
    console.log(`deleting index: ${index}`);
    deleteEntry("education", index);
    toggleShowForm(-1);
  };

  return (
    <>
      <label>
        School
        <input
          name="school"
          type="text"
          value={resume[category][index][school]}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Degree
        <input
          name="degree"
          type="text"
          value={resume[category][index][degree]}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <label>
        Graduation date
        <input
          name="gradDate"
          type="text"
          value={resume[category][index][gradDate]}
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
          value={resume[category][index][location]}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>
      <div className="btnContainer">
        <Button id="donelBtn" label="Done" handleClick={doneForm} />
        <Button id="deleteBtn" label="Delete" handleClick={deleteAndDone} />
      </div>
    </>
  );
}

export default EduForm;
