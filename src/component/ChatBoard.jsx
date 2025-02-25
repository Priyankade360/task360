import React, { useState, useEffect, useRef } from "react";
import "./Styles/ChatBoard.css";

const ChatBoard = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const messagesEndRef = useRef(null);

  // When a new chat is selected, initialize the messages
  useEffect(() => {
    if (selectedChat) {
      setMessages([
        { sender: "System", text: `Chat with ${selectedChat.name}...` },
      ]);
    }
  }, [selectedChat]);

  // Auto-scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // If no chat is selected, do not render the chat board
  if (!selectedChat) return null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmedMessage = currentMessage.trim();
    if (!trimmedMessage) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "You", text: trimmedMessage },
    ]);
    setCurrentMessage("");
  };

  return (
    <div className="chat-board">
      <div className="chat-header">
        <img
          src={selectedChat.avatar}
          alt={selectedChat.name}
          className="chat-avatar"
        />
        <span className="chat-username">{selectedChat.name}</span>
      </div>

      <div className="chat-body">
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`chat-message ${
                msg.sender === "You" ? "chat-message-sent" : "chat-message-received"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input section fixed at the bottom */}
      <form onSubmit={handleSendMessage} className="chat-input-section">
        <textarea
          className="chat-input"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <div className="chat-input-actions">
          <button type="submit" className="chat-send-button">
            <span className="send-icon">➤</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBoard;
