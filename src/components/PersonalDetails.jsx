function PersonalDetails({ resume, handleDetailsInput }) {
  return (
    <>
      <div className="entriesCol">
        <h2> Personal details</h2>
      </div>
      <div className="form" id="personalDetails">
        <div className="inputField">
          <input
            name="fullName"
            type="text"
            value={resume["personalDetails"].fullName}
            onChange={(e) => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
          <label className={resume["personalDetails"]["fullName"] && "filled"}>
            Full name
          </label>
        </div>

        <div className="inputField">
          <input
            name="email"
            type="email"
            value={resume["personalDetails"].email}
            onChange={(e) => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
          <label className={resume["personalDetails"]["email"] && "filled"}>
            Email
          </label>
        </div>
        <div className="inputField">
          <input
            name="phoneNumber"
            type="tel"
            value={resume["personalDetails"].phoneNumber}
            onChange={(e) => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
          <label
            className={resume["personalDetails"]["phoneNumber"] && "filled"}
          >
            Phone number
          </label>
        </div>

        <div className="inputField">
          <input
            name="address"
            type="text"
            value={resume["personalDetails"].address}
            onChange={(e) => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
          <label className={resume["personalDetails"]["address"] && "filled"}>
            Address{" "}
          </label>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
