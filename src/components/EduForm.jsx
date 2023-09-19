import Button from "./Button.jsx";

// Replace the contents of the <details> element with a form
function EduForm({ index }) {
//   const cancelBtn = document.createElement("button");
//   const addBtn = document.createElement("button");
//   // Affix buttons
//   btnBox.append({ deleteBtn }, cancelBtn, addBtn);
//   contents.append(btnBox);
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
          value={index ? resume["education"][index].endDate : ""}
        ></input>
      </label>
      <label>
        Location
        <input
          name="location"
          type="text"
          value={index ? resume["education"][index].location : ""}
        ></input>
      </label>
        <div className="btnContainer">
            <Button key="deleteBtn" label="Delete" />
            <Button key="cancelBtn" label="Cancel" />
            <Button key="saveBtn" label="Save" />
        </div>
    </>
  );
}

export default EduForm;
