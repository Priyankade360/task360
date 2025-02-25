import React from "react";
import "./Styles/NotificationPanel.css";

const NotificationPanel = ({ notifications }) => {
  if (!notifications || notifications.length === 0) {
    return null; // If no notifications, don't render or show "No notifications"
  }

  return (
    <div className="notification-panel">
      <h4>Assigned by {notifications[0]?.assignedBy}</h4>
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
          {notifications.map((item, idx) => (
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>{item.priority}</td>
              <td>{item.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotificationPanel;