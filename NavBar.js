// Navbar.js
import React from 'react';


const Navbar = () => (
  <nav className="navbar navbar-expand navbar-light navbar-bg">
    <a className="sidebar-toggle js-sidebar-toggle">
      <i className="hamburger align-self-center"></i>
    </a>
    <div className="navbar-collapse collapse">
      <ul className="navbar-nav navbar-align">
        <li className="nav-item dropdown">
          <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
            <div className="position-relative">
              <i className="align-middle" data-feather="bell"></i>
              <span className="indicator">4</span>
            </div>
          </a>
          {/* Notifications dropdown */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
            <div className="position-relative">
              <i className="align-middle" data-feather="message-square"></i>
            </div>
          </a>
          {/* Messages dropdown */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
            <img src="F:\Web dev\bscs21025_Ass_2\assing_2\src\components\img\r1.png" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
            <span className="text-dark">Charles Hall</span>
          </a>
          {/* Profile dropdown */}
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
