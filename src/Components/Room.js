import React from "react";

function Room({ message }) {
  return (
    <div key={message.id} className="room">
      <img src={message.profilePic} alt="profile" />
      <div className="convo">
        <h2 className="name">{message.name}</h2>
        <h1 className="text">{message.text}</h1>
        <div className="date">
          <p>
            {new Date(message.createdAt.seconds * 1000).toLocaleString(
              "en-US",
              { month: "short" }
            )}
          </p>
          <p>
            {new Date(message.createdAt.seconds * 1000).toLocaleString(
              "en-US",
              { weekday: "short" }
            )}
          </p>
          <p>{new Date(message.createdAt.seconds * 1000).getHours()}:</p>
          <p>{new Date(message.createdAt.seconds * 1000).getMinutes()}</p>
        </div>
      </div>
      {console.log(new Date(message.createdAt.seconds * 1000))}
    </div>
  );
}

export default Room;
