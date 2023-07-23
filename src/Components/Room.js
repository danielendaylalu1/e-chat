import Date from "./Date";

function Room({ message }) {
  const now = Date.now();
  return (
    <div key={message.id} className="room">
      <img src={message.profilePic} alt="profile" />
      <div className="convo">
        <h2 className="name">{message.name}</h2>
        <h1 className="text">{message.text}</h1>

        {message.createdAt ? (
          <Date time={message.createdAt.seconds * 1000} />
        ) : (
          <Date time={now} />
        )}
      </div>
    </div>
  );
}

export default Room;
