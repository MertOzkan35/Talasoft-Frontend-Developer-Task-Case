import "./buttons.css";

const Buttons = ({ setCalendarType }) => {
  const updateCalendarType = ({ target }) => {
    const value = target.value;
    const firstValue = value.split("-");
    console.log(firstValue);
    setCalendarType(firstValue[0]);
  };

  return (
    <div className="calendarType">
      <select onChange={updateCalendarType}>
        <option selected disabled>
          Select Calendar Type
        </option>
        <option>1-Mount</option>
        <option>3-Mounts</option>
        <option>6-Mounts</option>
        <option>12-Mounts</option>
      </select>
    </div>
  );
};

export default Buttons;
