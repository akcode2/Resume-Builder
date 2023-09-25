function Skills({ resume, handleInput, category }) {

  const handleSubmit = (skillsOrInterests, value) => {
    resume[skillsOrInterests].push(value);
  }
  return (
    <>
      <div className="formCategory" id="skills">
        <h2>Skills and interests</h2>
        <div className="contents">
          Skills: {resume["skills"].skills.map((skill) => (
              <button 
              key={skill}
              className="skillInterest">{skill}</button>
            ))}
          <form>
            <input
            name="skills"
            type="text"
            />
            <input type="submit"></input>
          </form>

          
          <label>
            Interests:  {resume["skills"].interests.join(', ')}
            <input></input>
          </label>
        </div>
      </div>
    </>
  );
}

export default Skills;


          // {/* Show the form if toggleShowForm is true */}
          // {showForm && (
          //   <Form
          //     resume={resume}
          //     index={indexToShow}
          //     handleInput={handleInput}
          //     category={category}
          //     toggleShowForm={toggleShowForm}
          //   />
          // )}
          // {/* Otherwise show list of skills as buttons */}
          // {!showForm &&
          //   resume["skills"].map((item, index) => (
          //     <button key={item.skill} onClick={() => toggleShowForm(index)}>
          //       {item.skill}
          //     </button>
          //   ))}
          // {/* Afterwards, show add button to add skill */}
          // {!showForm && (
          //   <button id="addSkill" onClick={() => toggleShowForm(resume[category].length)}>
          //     + Skill or Interest
          //   </button>
          // )}