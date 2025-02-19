import React from "react";
import { useState } from "react"; 
import { FaTasks } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./Styles/Sidebar.css";

const users = [
    {
      name: "Abhijeet Das",
      avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png", // Placeholder image
      status: "online",
    },
    {
      name: "Jayanta Mahato",
      avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png", // Placeholder image
      status: "online",
    },
    {
      name: "Sucharita Paul",
      avatar: "https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays.png",
      status: "online",
    },
    {
      name: "Abhijeet Das",
      avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png", // Placeholder image
      status: "online",
    },
    {
      name: "Jayanta Mahato",
      avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png", // Placeholder image
      status: "online",
    },
    {
      name: "Sucharita Paul",
      avatar: "https://e7.pngegg.com/pngimages/439/19/png-clipart-avatar-user-profile-icon-women-wear-frock-face-holidays.png",
      status: "online",
    },
  ];


  // Example project data
const projects = [
    {
      name: "Pizza Hut",
      icon: "https://e7.pngegg.com/pngimages/669/531/png-clipart-pizza-hut-the-pizza-company-buffalo-wing-pasta-pizza-pizza-pizza-hut-thumbnail.png",
    },
    {
      name: "Chanel",
      icon: "http://w7.pngwing.com/pngs/571/691/png-transparent-chanel-logo-brand-fashion-coco-company-text-trademark.png",
    },
    {
      name: "Starbucks",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_APKQS4vk2XZ_JDY-98ROy1lc8PRa3Hpcw&s",
    },
    {
      name: "Adidas",
      icon: "https://e7.pngegg.com/pngimages/61/526/png-clipart-adidas-logo-adidas-puma-logo-shoe-sportswear-adidas-angle-text-thumbnail.png",
    },
    {
      name: "Crocs",
      icon: "https://e7.pngegg.com/pngimages/861/38/png-clipart-crocs-shoe-logo-nasdaq-crox-brand-clogs-white-mammal-thumbnail.png",
    },
    {
      name: "Apple",
      icon: "https://e7.pngegg.com/pngimages/832/458/png-clipart-apple-logo-computer-icons-cute-icon-logo-computer-wallpaper.png",
    },
  ];

  // Example teams data
const teams = [
    { name: "App-Development", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    { name: "General", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    { name: "Development", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    { name: "International Projects", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    { name: "Digital-marketing", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
    { name: "Wordpress-Development", icon: "https://img.icons8.com/ios-filled/50/000000/conference-call.png" },
  ];

  // **Channels** array with lock/hashtag indicators
const channels = [
    { name: "App-DeActivevelopment", locked: true }, // locked channel
    { name: "General", locked: false },             // public channel
    { name: "Development", locked: true },
    { name: "International Projects", locked: true },
    { name: "Digital-marketing", locked: false },
    { name: "Wordpress-Development", locked: false },
  ];
  
const Sidebar = () => {
      // 2) State for dropdown
  const [isOpen, setIsOpen] = useState(true);
  const [isMessageOpen, setIsMessageOpen] = useState(true);
  const [isTeamsOpen, setIsTeamsOpen] = useState(true);
  const [isChannelsOpen, setisChannelsOpen] = useState(true);
  // 3) Toggle function for Projects dropdown
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleMessage = () => {
    setIsMessageOpen(!isMessageOpen);
  };
  const handleToggleTeams = () => {
    setIsTeamsOpen(!isTeamsOpen);
  };
  const handleToggleChannels = () => {
    setisChannelsOpen(!isChannelsOpen);
  };
  return (
    <div className="sidebar">
      {/* My Task */}
      <div className="sidebar-item-task">
        <FaTasks className="sidebar-item-icon" />
        <span className="sidebar-item-text">My Task</span>
      </div>

      {/* Unread */}
      <div className="sidebar-item">
        <BiMessageSquareDetail className="sidebar-item-icon" />
        <span className="sidebar-item-text">Unread</span>
        <span className="unread-dot"></span>
      </div>

  {/* Direct Message Section */}
     
  <div className="direct-message-section">
  {/* Section Header */}
  {/* Header with arrow and label */}
  <div className="direct-message-header" >
     {/* Arrow changes based on open/closed state */}
     <span className="projects-arrow" onClick={handleToggleMessage}>{isMessageOpen ? "▾" : "▸"}</span>
    <span>Direct Message</span>
    <button className="add-button">+</button>
  </div>
  
     

  {/* Users List */}
 {isMessageOpen && (<ul className="direct-message-list">
    {users.map((user, index) => (
      <li key={index} className="direct-message-item">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="user-avatar"
        />
        <span className="user-name">{user.name}</span>
        {/* Status dot */}
        {user.status === "online" && <span className="status-dot"></span>}
      </li>
    ))}
  </ul>)}
  

  {/* More Conversation Link */}
  <div className="more-conversation">
    <a href="#more-conversation">More Conversations</a>
  </div>
</div>

{/* Projects Section */}
<div className="projects-section">
      {/* Header with arrow and label */}
      <div className="projects-header" >
        {/* Arrow changes based on open/closed state */}
        <span className="projects-arrow" onClick={handleToggle}>{isOpen ? "▾" : "▸"}</span>
        <span>Projects</span>
        <button className="add-button">+</button>
      </div>

      {/* Conditionally render the list only if isOpen is true */}
      {isOpen && (
        <ul className="projects-list">
          {projects.map((project, index) => (
            <li key={index} className="project-item">
                 <img
          src={project.icon}
          alt={`${project.name}'s logo`}
          className="profile-logo"
        />
               <span className="user-name">{project.name}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="more-projects">
          <a href="#more-teams">More Projects</a>
        </div>
    </div>
    {/* Teams Section */}
    <div className="teams-section">
        <div className="teams-header">
        <span className="projects-arrow" onClick={handleToggleTeams}>{isTeamsOpen ? "▾" : "▸"}</span>
          <span>Teams</span>
          <button className="add-button">+</button>
        </div>

        {isTeamsOpen && (
            <ul className="teams-list">
          {teams.map((team, index) => (
            <li key={index} className="team-item">
              <img
                src={team.icon}
                alt={`${team.name} icon`}
                className="team-icon"
              />
              <span className="team-name">{team.name}</span>
            </li>
          ))}
        </ul>
        )}
        <div className="more-teams">
          <a href="#more-teams">More Teams</a>
        </div>
      </div>
    {/* Channels Section */}
    <div className="channels-section">
        <div className="channels-header">
        <span className="projects-arrow" onClick={handleToggleChannels}>{isChannelsOpen ? "▾" : "▸"}</span>
          <span>Channels</span>
          <button className="add-button">+</button>
        </div>

        {isChannelsOpen && (
        <ul className="channels-list">
          {channels.map((channel, index) => (
            <li key={index} className="channel-item">
              {channel.locked ? (
                <span className="channel-icon">🔒</span>
              ) : (
                <span className="channel-icon">#</span>
              )}
              <span className="channel-name">{channel.name}</span>
            </li>
          ))}
        </ul>
        )}
        <div className="more-channels">
          <a href="#more-channels">More Channels</a>
        </div>
      </div>

      {/* Footer (Company + Profile) */}
      <div className="sidebar-footer">
        {/* Company Logo/Name */}
        <div className="footer-company">
      <span className="logo-360">360</span>
      <span className="logo-task">task</span>
    </div>
        {/* Profile */}
        <div className="footer-profile">
          <img
            src="https://img.lovepik.com/png/20231031/User-avatar-login-interface-abstract-blue-icon-profile-picture-round_430107_wh860.png"
            alt="User Profile"
            className="profile-avatar"
          />
          <span className="profile-name">Profile Name</span>
          <span className="profile-arrow">▾</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
