// Replace the contents of the <details> element
// with a form
function EduForm({ index }) {
  // Get the contents div
  const contents = document.querySelector("#education .contents");
  // Empty it out
  contents.innerText = "";

  // Create input fields
  const fieldNames = ["School", "Degree", "Start date", "End date", "Location"];
  const fields = ["school", "degree", "startDate", "endDate", "location"];
  fields.forEach((field, ind) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    // Make input a controlled component
    input.name = field;
    input.type = "text";
    input.value = resume["education"][index][field];

    // Construct label
    label.append(fieldNames[ind], input);
    // Affix label to contents
    contents.append(label);
  });
  // Create div to contain buttons
  const btnBox = document.createElement("div");
  btnBox.className = "btnContainer";
  // Create buttons
  const deleteImg =
    '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
  const deleteBtn = <Button key="deleteBtn" label="Delete" svg={deleteImg} />;

  const cancelBtn = document.createElement("button");
  const addBtn = document.createElement("button");
  // Affix buttons
  btnBox.append({ deleteBtn }, cancelBtn, addBtn);
  contents.append(btnBox);

  return (
    <>
      <label>
        School
        <input
          name="school"
          type="text"
          value={index ? resume["education"][index].school : ""}
        ></input>
      </label>
      <label>
        Degree
        <input
          name="degree"
          type="text"
          value={index ? resume["education"][index].degree : ""}
        ></input>
      </label>
      <label>
        Start date
        <input
          name="startDate"
          type="text"
          value={index ? resume["education"][index].startDate : ""}
        ></input>
      </label>
      <label>
        End date
        <input
          name="endDate"
          type="text"
          value={index ? resume["education"][index].endDate ""}
        ></input>
      </label>
      <label>
        Location
        <input
          name="location"
          type="text"
          value={index ? resume["education"][index].location ""}
        ></input>
      </label>
    </>
  );
}

export default EduForm;
