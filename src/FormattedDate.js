import React from "react";
import moment from "moment";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let currentDate = moment().format("MMMM Do YYYY, h:mm a");

  return (
    <div>
      {day} {currentDate}
    </div>
  );
}
