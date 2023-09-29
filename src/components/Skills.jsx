function Skills({ resume, handleSkillsSubmit, handleDeleteTag }) {
  // x-mark for button to delete tag
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height=".75rem"
      viewBox="0 0 512 512"
    >
      {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </svg>
  );
  return (
    <>
      <div className="entriesCol">
        <h2>Skills & interests</h2>
      </div>
      <div className="form" id="skills">
        <div id="skillsCol">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const inputValue = e.target.skills.value;
              handleSkillsSubmit("skills", inputValue);
              e.target.skills.value = "";
            }}
          >
            <input className="skillsInput" name="skills" placeholder="Add a skill..." type="text" />
            <input type="submit"></input>
          </form>

          <div id="skillsList">
            Skills:{" "}
            {resume["skills"].skills.map((skill, index) => (
              <div key={`skills-${skill}-${index}`} className="tag">
                <div className="skillInterest">
                  {skill}
                  <button
                    className="deleteSkillInterest"
                    onClick={() => handleDeleteTag("skills", index)}
                  >
                    <i className="deleteIcon">{svg}</i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="interestsCol">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const inputValue = e.target.interests.value;
              handleSkillsSubmit("interests", inputValue);
              e.target.interests.value = "";
            }}
          >
            <input className="skillsInput" name="interests" placeholder="Add an interest..." type="text" />
            <input type="submit"></input>
          </form>

          <div id="interestsList">
            Interests:{" "}
            {resume["skills"].interests.map((interest, index) => (
              <div key={`interests-${interest}-${index}`} className="tag">
                <div className="skillInterest">
                  {interest}
                  <button
                    className="deleteSkillInterest"
                    onClick={() => handleDeleteTag("interests", index)}
                  >
                    <i className="deleteIcon">{svg}</i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
