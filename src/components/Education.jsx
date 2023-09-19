import { useState } from "react";
import EduForm from "./EduForm.jsx";

function Education({ resume }) {
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <details id="education">
        <summary>Education</summary>
        <div className="contents">
          {/* Show the form if toggleShowForm is true */}
          {showForm && <EduForm />}
          {/* Otherwise show list of institutions as buttons */}
          {!showForm && resume.education.map((item, index) => (
            <button key={item.school} onClick={toggleShowForm}>
              {item.school}
            </button>
          ))}
        </div>
      </details>
    </>
  );
}

export default Education;
