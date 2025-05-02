import React, { useState } from 'react';
import '../styles/styles.css';
import { FaBars, FaHome, FaFire, FaRegClock, FaUser,FaMusic,FaFilm,FaNewspaper } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars size={24} />
      </div>
      {isOpen && (
        <aside className="sidebar">
          <ul>
            <li><FaHome className="icon" /> Home</li>
            <li><FaFire className="icon" /> Shorts</li>
            <li><FaRegClock className="icon" /> Subscriptions</li>
            <hr />
            <li><FaUser className="icon" /> You</li>
            <li><FaRegClock className="icon" /> History</li>
            <hr />
            <h1>Explore</h1>
            <li><FaFire className="icon" /> Trending</li>
            <li><FaMusic className="icon" /> Music</li>
            <li><FaFilm className="icon" /> Movies</li>
            <li><FaNewspaper className="icon" /> News</li>
          </ul>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
