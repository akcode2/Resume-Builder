import "../styles/Preview.css";

function Preview({ resume }) {
  return (
    <>
      <div id="preview" className="preview">
        <div id="header">
          <div className="name">{resume["personalDetails"].fullName}</div>
          <div className="personalDetails">
            <div className="detail">{resume["personalDetails"].email}</div>
            <div className="detail">
              {resume["personalDetails"].phoneNumber}
            </div>
            <div className="detail">{resume["personalDetails"].address}</div>
          </div>
        </div>

        <div className="bodySection" id="eduPreview">
          <div className="bodyHeading">
            <h1>Education</h1>
          </div>
          <div>
            {resume["education"].map((item) => (
              <div key={Math.random()} className="eduItem">
                <div className="schoolAndLocation">
                  <div className="school">{item.school}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="degreeAndDates">
                  <div className="degree">{item.degree}</div>
                  <div className="dates">
                    <span className="gradDate">{item.gradDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bodySection" id="expPreview">
          <div className="bodyHeading">
            <h1>Experience</h1>
          </div>
          <div>
            {resume["experience"].map((item) => (
              <div key={Math.random()} className="expItem">
                <div className="companyAndLocation">
                  <div className="company">{item.company}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="positionAndDates">
                  <div className="position">{item.position}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                </div>
                <div className="description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bodySection" id="activitiesPreview">
          <div className="bodyHeading">
            <h1>Leadership and Activities</h1>
          </div>
          <div>
            {resume["activities"].map((item) => (
              <div key={Math.random()} className="activitiesItem">
                <div className="companyAndLocation">
                  <div className="company">{item.organization}</div>
                  <div className="location">{item.location}</div>
                </div>
                <div className="positionAndDates">
                  <div className="role">{item.role}</div>
                  <div className="dates">
                    <span className="startDate">{item.startDate}</span>
                    <span> - </span>
                    <span className="endDate">{item.endDate}</span>
                  </div>
                </div>
                <div className="description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bodySection" id="skillsPreview">
          <div className="bodyHeading">
            <h1>Skills and Interests</h1>
          </div>
          <div id="displayedSkills">
            Skills: {resume["skills"].skills.join(", ")}
          </div>
          <div id="displayedInterests">
            Interests: {resume["skills"].interests.join(", ")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
