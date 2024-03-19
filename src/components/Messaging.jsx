// src/components/Messaging.js

import React, { useState, useEffect } from "react";

const Messaging = ({ mentor, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Simulated previous messages (you can replace this with actual data)
  const previousMessages = [
    { sender: "mentor", message: "Hello! How can I help you?" },
    { sender: "user", message: "Hi! I need some advice." },
    { sender: "mentor", message: "Sure, I'm here to assist you." },
  ];

  useEffect(() => {
    // Concatenate previous messages with existing messages
    setMessages(previousMessages);
  }, []);

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([
      ...messages,
      { sender: "user", message: newMessage },
      { sender: "mentor", message: "Thanks for your message!" }, // Simulated mentor's reply
    ]);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-20 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-96">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">{mentor.name}</h2>
        <div className="h-48 overflow-y-scroll mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-2 py-1 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {msg.message}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border border-gray-300 rounded-md px-2 py-1 w-full mr-2"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
