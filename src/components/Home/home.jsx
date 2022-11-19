import "./app.css";
import React, { useState } from "react";
import CalendarStatus from "../calendarStatus/calendarStatus";
import Buttons from "../buttons/buttons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";

<link
  href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
  rel="stylesheet"
></link>;

const HomePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [calendarType, setCalendarType] = useState(3);
  const reservedDays = [new Date("2022-11-21"), new Date("2022-12-21")];
  const paymentExpectedDays = [new Date("2022-11-24"), new Date("2022-12-24")];
  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-2": [...paymentExpectedDays],
    },
  ];

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="container">
      <h1 className="title">Talasoft Front End Developer Test Case</h1>

      <div className="calendar">
        <CalendarStatus />
        <Buttons setCalendarType={setCalendarType} />
        <DatePicker
          inline
          monthsShown={calendarType}
          onChange={(date) => onChange(date)}
          minDate={new Date()}
          maxDate={addMonths(new Date(), 12)}
          highlightDates={highlightWithRanges}
          excludeDates={reservedDays}
          selectsRange
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
};

export default HomePage;
