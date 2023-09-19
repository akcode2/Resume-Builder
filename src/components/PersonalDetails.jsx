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
            onChange={handleDetailsInput}
          ></input>
        </label>
        <label>
          Email:{" "}
          <input
            name="email"
            type="email"
            value={resume["personalDetails"].email}
            onChange={handleDetailsInput}
          ></input>
        </label>
        <label>
          Phone number:{" "}
          <input
            name="phoneNumber"
            type="tel"
            value={resume["personalDetails"].phoneNumber}
            onChange={handleDetailsInput}
          ></input>
        </label>
        <label>
          Address:{" "}
          <input
            name="address"
            type="text"
            value={resume["personalDetails"].address}
            onChange={handleDetailsInput}
          ></input>
        </label>
      </div>
    </>
  );
}

export default PersonalDetails;
