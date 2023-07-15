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
    const textarea = document.querySelector(".message-area");
    if (textarea) {
      textarea.style.height = "auto";
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
      <div className="messageBox">
        <>
          <div className="messages">
            {taskMessages
              .slice()
              .reverse()
              .map((message, index) => (
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
