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
    <div>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <h1>{message.text}</h1>
          </div>
        );
      })}
      <form onSubmit={messageHandler}>
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
