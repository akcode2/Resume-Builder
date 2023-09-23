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
  // If object does not exist at index, create it
  if (resume[category].length === index) {
    resume[category][index] = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
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

  let formFields;
  switch (category) {
    case "education":
        formFields = ["school", "degree"]
  }
  return()
}