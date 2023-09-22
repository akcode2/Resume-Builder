import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function SkillsForm({ resume, index, handleInput, category, toggleShowForm }) {
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

  return (
    <>
      <label>
        Skill or interest
        <input
          name="skill"
          type="text"
          value={emptyForm ? "" : resume[category][index].skill}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        ></input>
      </label>

      <div className="btnContainer">
        <Button id="doneBtn" label="Done" handleClick={doneForm} />
        <Button id="deleteBtn" label="Delete" />
      </div>
    </>
  );
}

export default SkillsForm;
