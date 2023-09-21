function PersonalDetails({ resume, handleDetailsInput}) {

  return (
    <>
      <div className="formCategory" id="personalDetails">
        <label>
          Full name:{" "}
          <input
            name="fullName"
            type="text"
            value={resume["personalDetails"].fullName}
            onChange={e => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
        </label>
        <label>
          Email:{" "}
          <input
            name="email"
            type="email"
            value={resume["personalDetails"].email}
            onChange={e => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
        </label>
        <label>
          Phone number:{" "}
          <input
            name="phoneNumber"
            type="tel"
            value={resume["personalDetails"].phoneNumber}
            onChange={e => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
        </label>
        <label>
          Address:{" "}
          <input
            name="address"
            type="text"
            value={resume["personalDetails"].address}
            onChange={e => handleDetailsInput(e.target.name, e.target.value)}
          ></input>
        </label>
      </div>
    </>
  );
}

export default PersonalDetails;
