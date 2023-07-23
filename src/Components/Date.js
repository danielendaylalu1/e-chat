import React from "react";

const Date = ({ message }) => {
  return (
    <div className="date">
      <p>
        {new Date(message.createdAt.seconds * 1000).toLocaleString("en-US", {
          month: "short",
        })}
      </p>
      <p>
        {new Date(message.createdAt.seconds * 1000).toLocaleString("en-US", {
          weekday: "short",
        })}
      </p>
      <p>{new Date(message.createdAt.seconds * 1000).getHours()}:</p>
      <p>{new Date(message.createdAt.seconds * 1000).getMinutes()}</p>
    </div>
  );
};

export default Date;
