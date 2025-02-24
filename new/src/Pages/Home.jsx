import React from "react";
import "./Home.css";
import Sidebar from "../component/Sidebar.jsx";
import ChatBoard from "../component/ChatBoard";
const Home = () => {
  
    return (
              <div className="main-container">
                <div className="fixed-container">
                  <Sidebar/>
                </div>
                <div className="responsive-container">
                <ChatBoard />
                
                </div>
              </div>
            );
          };
export default Home;
