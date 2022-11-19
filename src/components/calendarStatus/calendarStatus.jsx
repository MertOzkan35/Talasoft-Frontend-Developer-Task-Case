import "./calendarStatus.css";

const CalendarStatus = () => {
  return (
    <div className="calendarStatus">
      <h3 id="Available">Available</h3>
      <h3 id="Reserved">Reserved</h3>
      <h3 id="Awaiting">Awaiting Payment</h3>
      <h3 id="Check">Check in/out</h3>
    </div>
  );
};

export default CalendarStatus;
