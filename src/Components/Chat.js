import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import {
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import Room from "./Room";
import Users from "./Users";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messagesRef = collection(db, "messages");
  useEffect(() => {
    const queryMessage = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessage, (snap) => {
      let message = [];
      snap.forEach((doc) => {
        console.log(doc.data());
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
    console.log(messages);

    return () => unsubscribe();
  }, []);
  const messageHandler = async (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    await addDoc(messagesRef, {
      text: text,
      createdAt: serverTimestamp(),
      name: auth.currentUser.displayName,
      profilePic: auth.currentUser.photoURL,
    });
    setText("");
  };
  return (
    <div className="chat">
      <Users messages={messages} />
      <div className="messages">
        {messages.map((message) => {
          return <Room message={message} />;
        })}
      </div>
      <form onSubmit={messageHandler} className="form">
        <input
          value={text}
          onChange={(e) => {
            const newText = e.target.value;
            setText(newText);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
