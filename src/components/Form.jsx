import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function Form({
  resume,
  index,
  handleInput,
  category,
  toggleShowForm,
  deleteEntry,
}) {
  // Call toggleShowForm on the parent component
  const doneWithForm = () => {
    // Set showForm to false and indexToShow to -1
    toggleShowForm(-1);
  };

  const deleteAndDone = () => {
    console.log(`deleting index: ${index}`);
    deleteEntry("education", index);
    toggleShowForm(-1);
  };

  let formFields;
  let formLabels;
  switch (category) {
    case "education":
      formFields = ["school", "degree", "gradDate", "location"];
      formLabels = ["School", "Degree", "Graduation date", "Location"];
      break;
    case "experience":
      formFields = [
        "company",
        "position",
        "startDate",
        "endDate",
        "location",
        "description",
      ];
      formLabels = [
        "Company",
        "Position / Title",
        "Start date",
        "End date",
        "Location",
        "Description",
      ];
      break;
    case "activities":
      formFields = [
        "organization",
        "role",
        "startDate",
        "endDate",
        "location",
        "description",
      ];
      formLabels = [
        "Organization",
        "Role",
        "Start date",
        "End date",
        "Location",
        "Description",
      ];
      break;
    case "skills":
      formFields = ["skills", "interests"];
      formLabels = ["Skills", "Interests"];
      break;
    default:
      console.log("Invalid category");
  }

  // If object does not exist at index, create it
  if (!resume[category][index]) {
    let newObj = {};
    // Create properties from formFields array
    formFields.forEach((field) => {
      newObj[field] = "";
    });
    resume[category][index] = newObj;
  }

  const generateFormInputs = (category, index) => {
    return formLabels.map((label, i) => (
      <label key={formLabels[i]}>
        {label}
        <input
          name={formFields[i]}
          type="text"
          value={resume[category][index][formFields[i]]}
          onChange={(e) =>
            handleInput(e.target.name, e.target.value, category, index)
          }
        />
      </label>
    ));
  };

  return (
    <>
      {generateFormInputs(category, index)}
      <div className="btnContainer">
        <Button id="doneBtn" label="Done" handleClick={doneWithForm} />
        <Button id="deleteBtn" label="Delete" handleClick={deleteAndDone} />
      </div>
    </>
  );
}

export default Form;
