import React from "react";

const Date = ({ time }) => {
  return (
    <div className="date">
      <p>
        {new Date(time).toLocaleString("en-US", {
          month: "short",
        })}
      </p>
      <p>
        {new Date(time).toLocaleString("en-US", {
          weekday: "short",
        })}
      </p>
      <p>{new Date(time).getHours()}:</p>
      <p>{new Date(time).getMinutes()}</p>
    </div>
  );
};

export default Date;
