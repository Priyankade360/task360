import React from "react";

import "./Styles/ChatBoard.css";

const messagesData = [
  {
    date: "12 FEB 2025",
    messages: [
      {
        id: 1,
        sender: "Sucharita Paul",
        time: "12:38 pm",
        text: "Hey, team! Quick update—our client meeting is scheduled for 3 PM today. Be prepared!",
      },
      {
        id: 2,
        sender: "Abhijeet Das",
        time: "12:39 pm",
        text: "Thanks for the update, will get everything ready.",
      },
    ],
  },
  {
    date: "13 FEB 2025",
    messages: [
      {
        id: 3,
        sender: "Sucharita Paul",
        time: "10:00 am",
        text: "Morning, all! Let’s finalize the slides ASAP.",
      },
      {
        id: 4,
        sender: "Abhijeet Das",
        time: "10:15 am",
        text: "Sure, working on them now!",
      },
    ],
  },
  {
    date: "14 FEB 2025",
    messages: [
      {
        id: 3,
        sender: "Sucharita Paul",
        time: "10:00 am",
        text: "Morning, all! Let’s finalize the slides ASAP.",
      },
      {
        id: 4,
        sender: "Abhijeet Das",
        time: "10:15 am",
        text: "Sure, working on them now!",
      },
    ],
  },
  {
    date: "15 FEB 2025",
    messages: [
      {
        id: 3,
        sender: "Sucharita Paul",
        time: "10:00 am",
        text: "Morning, all! Let’s finalize the slides ASAP.",
      },
      {
        id: 4,
        sender: "Abhijeet Das",
        time: "10:15 am",
        text: "Sure, working on them now!",
      },
    ],
  },
];

const ChatBoard = () => {
  return (
    <div className="Main-container">
    {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-partner-info">
        <img src="https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays.png" alt="Profile" className="profile-icon" />
          <h3>Sucharita Paul</h3>
        </div>
        
        
      </div>

        <div className="chatboard-container">
      {/* Messages */}
      <div className="chat-messages">
        {messagesData.map((group, index) => (
          <div key={index}>
            {/* Date Divider */}
            <div className="date-divider">
              <span>{group.date}</span>
            </div>

            {/* Message List */}
            {group.messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-item ${
                  msg.sender === "Abhijeet Das" ? "sent" : "received"
                }`}
              >
                <div className="message-meta">
                  <span className="message-sender">{msg.sender}</span>
                  <span className="message-time">{msg.time}</span>
                </div>
                <div className="message-text">{msg.text}</div>
              </div>
            ))}
          </div>
        ))}
          

      </div>

      {/* Notification Bar Section */}
     <div className="notification-container">
     <h4><u>Assigned by Abhijeet</u></h4>
     <table>
       <thead>
         <tr>
           <th>Date</th>
           <th>Title</th>
           <th>Status</th>
           <th>Priority</th>
           <th>Project</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>04-02-2025</td>
           <td>Simply Dummy ...</td>
           <td>Pending</td>
           <td className="urgent">Urgent</td>
           <td>Pizza Hut</td>
         </tr>
         <tr>
           <td>04-02-2025</td>
           <td>Simply Dummy ...</td>
           <td>Pending</td>
           <td className="high">High</td>
           <td>Chanel</td>
         </tr>
         <tr>
           <td>04-02-2025</td>
           <td>Simply Dummy ...</td>
           <td>Pending</td>
           <td className="medium">Medium</td>
           <td>Starbucks</td>
         </tr>
         <tr>
           <td>04-02-2025</td>
           <td>Simply Dummy ...</td>
           <td>Pending</td>
           <td className="low">Low</td>
           <td>Adidas</td>
         </tr>
       </tbody>
         </table>
         </div>
      
      
      </div>

      
      {/* Message Input */}
      
      {/* <div className="message-input-container">
            
      <div className="message-input-actions-left">
        <button className="action-button">
          <span className="icon">+</span>
        </button>
        <button className="action-button">
          <span className="icon">Aa</span>
        </button>
        <button className="action-button">
          <span className="icon">😊</span>
        </button>
        <button className="action-button">
          <span className="icon">🎥</span>
        </button>
        <button className="action-button">
          <span className="icon">📎</span>
        </button>
      </div> */}

      {/* Input field */}
      {/* <input
        type="text"
        className="message-text-field"
        placeholder="Write Something here"
      /> */}

         {/* Right icons (send arrow + dropdown) */}
      {/* <div className="message-input-actions-right">
        <button className="send-button">
          <span className="icon">➤</span>
        </button>
        <button className="dropdown-button">
          <span className="icon">▾</span>
        </button>
      </div>
        </div> */}
      {/* Message Input */}
      <div className="message-input-container">
  <div className="floating-label-container">
    <input
      type="text"
      className="message-text-field"
      placeholder=" "  /* Use a blank placeholder */
    />
    <label className="floating-label">Write Something here</label>
  </div>

  <div className="message-input-row">
    {/* Left icons */}
    <div className="message-input-actions-left">
      <button className="action-button">
        <span className="icon">+</span>
      </button>
      <button className="action-button">
        <span className="icon">Aa</span>
      </button>
      <button className="action-button">
        <span className="icon">😊</span>
      </button>
      <button className="action-button">
        <span className="icon">🎥</span>
      </button>
      <button className="action-button">
        <span className="icon">📎</span>
      </button>
    </div>

    {/* Right icons (send arrow + dropdown) */}
    <div className="message-input-actions-right">
      <button className="send-button">
        <span className="icon">➤</span>
      </button>
      <button className="dropdown-button">
        <span className="icon">▾</span>
      </button>
    </div>
  </div>
</div>

      </div>
  );
};

export default ChatBoard;
