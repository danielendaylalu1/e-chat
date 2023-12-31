import React, { useEffect, useRef, useState } from "react";
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
      ids: auth.currentUser.uid,
    });
    setText("");
  };
  return (
    <div className="chat">
      <div className="users">
        <h3 className="users-header">Wellcome to e-chat</h3>
      </div>
      <div className="messages">
        {messages.map((message) => {
          // console.log(message);
          return <Room message={message} key={message.id} />;
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
