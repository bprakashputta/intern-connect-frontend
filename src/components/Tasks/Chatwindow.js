import React, { useState, useEffect } from "react";
import axios from "../../api/base";

const ChatWindow = ({ sender, taskId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchChatMessages = async () => {
      try {
        const response = await axios.get(`/taskallotment/view/${taskId}`, {
          baseURL: process.env.BACKEND_APP_SERVER_URL,
        });

        if (!response.data || !Array.isArray(response.data.comments)) {
          console.error("Invalid chat data format:", response.data);
          return;
        }

        setMessages(response.data.comments);
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };

    fetchChatMessages();
  }, [taskId]);

  const [inputText, setInputText] = useState("");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      return;
    }

    const newMessage = {
      text: inputText,
      posted_by: sender,
    };

    try {
      await axios.patch(`/taskallotment/${taskId}/comments`, [newMessage], {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText("");
    } catch (error) {
      console.error("Error sending chat message:", error);
    }
  };

  return (
    <div>
      <div className="messageBox">
        <>
          <div className="messages">
            {messages
              .slice()
              .reverse()
              .map((message, index) => (
                <div
                  key={index}
                  className={`message-sender ${
                    message.posted_by === sender ? sender : "other"
                  }`}
                >
                  {message.text}
                </div>
              ))}
          </div>
          <div className="sendMessage">
            <form onSubmit={handleMessageSubmit}>
              <div className="message-area-container">
                <textarea
                  type="text"
                  placeholder="Type your message..."
                  className="message-area"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                />
                <i className="fa fa-paperclip attachment-icon"></i>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

export default ChatWindow;
