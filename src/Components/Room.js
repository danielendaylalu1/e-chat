import { auth } from "../firebase-config";

function Room({ message }) {
  const now = Date.now();
  return (
    <div
      key={message.id}
      className={`room ${
        message.ids === auth.currentUser.uid ? "sent" : "recieved"
      }`}
    >
      <img src={message.profilePic} alt="profile" />
      <div className="convo">
        <h2 className="name">{message.name}</h2>
        <h1 className="text">{message.text}</h1>

        {message.createdAt ? (
          <div className="date">
            <p>
              {new Date(message.createdAt.seconds * 1000).toLocaleString(
                "en-US",
                {
                  month: "short",
                }
              )}
            </p>
            <p>
              {new Date(message.createdAt.seconds * 1000).toLocaleString(
                "en-US",
                {
                  weekday: "short",
                }
              )}
            </p>
            <p>{new Date(message.createdAt.seconds * 1000).getHours()}:</p>
            <p>{new Date(message.createdAt.seconds * 1000).getMinutes()}</p>
          </div>
        ) : (
          <div className="date">
            <p>
              {new Date(now).toLocaleString("en-US", {
                month: "short",
              })}
            </p>
            <p>
              {new Date(now).toLocaleString("en-US", {
                weekday: "short",
              })}
            </p>
            <p>{new Date(now).getHours()}:</p>
            <p>{new Date(now).getMinutes()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Room;
