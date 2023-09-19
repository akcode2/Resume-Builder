import Button from "./Button.jsx";

function Education({ resume }) {
  

  function addEduBtn() {
    const btn = document.createElement("button");
    btn.innerText = "+ Education";
    contents.append(btn);
  }




  return (
    <>
      <details id="education">
        <summary>Education</summary>
        <div className="contents">
          {resume.education.map((item, index) => (
            
            <button key={item.school} onClick={() => expandForm(index)}>{item.school}</button>
          ))}
          <button>+ Education</button>
        </div>
      </details>
    </>
  );
}

export default Education;
