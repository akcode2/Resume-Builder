import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function SkillsForm({ resume, index, handleInput, category }) {
  let emptyForm = true;
  // 0 is falsy, handle that case
  if (index >= 0) {
    emptyForm = false;
  }

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
        <Button id="deleteBtn" label="Delete" />
        <Button id="cancelBtn" label="Cancel" />
        <Button id="saveBtn" label="Save" />
      </div>
    </>
  );
}

export default SkillsForm;
