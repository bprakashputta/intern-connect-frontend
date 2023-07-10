import React, { useState, useEffect } from "react";

const ChatWindow = ({ sender, taskId }) => {
  const [messages, setMessages] = useState({});
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    // Fetch chat messages for the specific task using the taskId
    const fetchChatMessages = async () => {
      try {
        const response = await fetch(`/api/tasks/${taskId}/chat`);
        const chatData = await response.json();
        setMessages((prevMessages) => ({
          ...prevMessages,
          [taskId]: chatData.messages,
        }));
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };

    fetchChatMessages();
  }, [taskId]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      text: inputText,
      sender: sender,
    };

    const sendMessage = async () => {
      try {
        await fetch(``, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMessage),
        });
        setMessages((prevMessages) => ({
          ...prevMessages,
          [taskId]: [...(prevMessages[taskId] || []), newMessage],
        }));
        setInputText("");
      } catch (error) {
        console.error("Error sending chat message:", error);
      }
    };

    sendMessage();
  };

  const taskMessages = messages[taskId] || [];

  return (
    <div>
      <div className="messages">
        {taskMessages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === sender ? sender : "other"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatWindow;
