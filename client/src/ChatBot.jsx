import React from "react";

const ChatBot = () => {
  return (
    <iframe
      title="ChatBot"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        height: "500px",
        width: "370px",
        border: "none",
        zIndex: 9999,
      }}
      srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
          </head>
          <body>
            <df-messenger
              intent="WELCOME"
              chat-title="NGO_EdTech-ChatBot"
              agent-id="692d0042-a9c5-45ec-833f-a547a80d1ed4"
              language-code="en"
            ></df-messenger>
          </body>
        </html>
      `}
    />
  );
};

export default ChatBot;
