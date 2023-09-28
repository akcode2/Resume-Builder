import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function Form({
  resume,
  index,
  handleInput,
  category,
  deleteEntry,
  activeIndex = { activeIndex },
  setActiveIndex = { setActiveIndex },
}) {
  let formFields;
  let formLabels;
  let primaryKey;
  switch (category) {
    case "education":
      formFields = ["school", "degree", "gradDate", "location"];
      formLabels = ["School", "Degree", "Graduation date", "Location"];
      primaryKey = "school";
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
      primaryKey = "company";
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
      primaryKey = "organization";
      break;
    case "skills":
      formFields = ["skills", "interests"];
      formLabels = ["Skills", "Interests"];
      break;
    default:
      console.log("Invalid category");
  }

  const doneWithForm = () => {
    let emptyForm = true;
    // If even one field has a value, keep the entry and show it as the most recent
    formFields.forEach((field) => {
      if (resume[category][index][field] !== "") {
        // Handle empty school/company/organization
        switch (category) {
          case "education":
            if (resume[category][index]["school"] === "") {
              resume[category][index]["school"] = "A university...";
            }
            break;
          case "experience":
            if (resume[category][index]["company"] === "") {
              resume[category][index]["company"] = "A company...";
            }
            break;
          case "activities":
            if (resume[category][index]["organization"] === "") {
              resume[category][index]["organization"] = "An organization...";
            }
        }
        // Prepare to receive a new entry
        setActiveIndex({
          ...activeIndex,
          [category]: index + 1,
        });
        emptyForm = false;
        // Return early
        return;
      }
    });
    // Otherwise all fields are empty. Delete the entry and then show the most recent.
    if (emptyForm) {
      deleteEntry(category, index);
      setActiveIndex({
        ...activeIndex,
        [category]: index - 1,
      });
    }
  };

  const deleteAndDone = () => {
    console.log(`deleting index: ${index}`);
    deleteEntry(category, index);
    setActiveIndex({
      ...activeIndex,
      [category]: index - 1,
    });
  };

  // If object does not exist at index, create it
  if (!resume[category][index]) {
    let newObj = {};
    // Create properties from formFields array
    formFields.forEach((field) => {
      newObj[field] = "";
    });
    resume[category][index] = newObj;
  }

  // When a field comes into focus and has "..." as its value, change it to ""
  // const handleFocus = (field) => {
  //   if (field === "...") {
  //     console.log(value);
  //     field = "";
  //   }
  // };

  const generateFormInputs = (category, index) => {
    if (category === "experience" || category === "activities") {
      // Create text inputs for all fields except "description"
      // which will be a textbox
      return (
        <>
          {formLabels
            .filter((label) => label !== "Description")
            .map((label, i) => (
              <div className="inputField" key={formLabels[i]}>
                <input
                  name={formFields[i]}
                  type="text"
                  placeholder={`${label}`}
                  value={resume[category][index][formFields[i]]}
                  onChange={(e) => {
                    setActiveIndex({
                      ...activeIndex,
                      [category]: index,
                    });
                    handleInput(e.target.name, e.target.value, category, index);
                  }}
                />
                <label
                  className={resume[category][index][formFields[i]] && "filled"} // Add "filled" class when input value is not an empty string
                  htmlFor={formFields[i]}
                >
                  {label}
                </label>
              </div>
            ))}
          <div key={"Description"}>
            <textarea
              name="description"
              type="textarea"
              value={resume[category][index]["description"]}
              onChange={(e) => {
                setActiveIndex({
                  ...activeIndex,
                  [category]: index,
                });
                handleInput(e.target.name, e.target.value, category, index);
              }}
            />
            <label
              className={resume[category][index]["description"] && "filled"} // Add "filled" class when input value is not an empty string
              htmlFor={"description"}
            >
              Description
            </label>
          </div>
        </>
      );
    } else {
      return formLabels.map((label, i) => (
        <div className="inputField" key={formLabels[i]}>
          <input
            name={formFields[i]}
            type="text"
            placeholder={`${label}`}
            value={resume[category][index][formFields[i]]}
            onChange={(e) => {
              setActiveIndex({
                ...activeIndex,
                [category]: index,
              });
              handleInput(e.target.name, e.target.value, category, index);
            }}
          />
          <label
            className={resume[category][index][formFields[i]] && "filled"} // Add "filled" class when input value is not an empty string
            htmlFor={formFields[i]}
          >
            {label}
          </label>
        </div>
      ));
    }
  };

  return (
    <>
      {generateFormInputs(category, index)}
      <div className="btnContainer">
        {/* Show done button only if "school" is included */}
        {resume[category][index][primaryKey] !== "" &&
          resume[category][index][primaryKey] !== "..." && (
            <Button id="doneBtn" label="Done" handleClick={doneWithForm} />
          )}

        <Button id="deleteBtn" label="Delete" handleClick={deleteAndDone} />
      </div>
    </>
  );
}

export default Form;
