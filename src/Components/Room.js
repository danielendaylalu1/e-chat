import React from "react";

function Room({ message }) {
  return (
    <div key={message.id} className="room">
      <img src={message.profilePic} alt="profile" />
      <div className="convo">
        <h2 className="name">{message.name}</h2>
        <h1 className="text">{message.text}</h1>
      </div>
      {/* <p>{message.createdAt}</p> */}
    </div>
  );
}

export default Room;
