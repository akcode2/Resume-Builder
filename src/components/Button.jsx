function Button({ label, svg, key }) {
  return (
    <>
      <button key={key}>
        <i className="icon">{svg}</i> <span>{label}</span>
      </button>
    </>
  );
}

export default Button;
