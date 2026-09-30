import {
  Activity,
  Bell,
  User,
  Menu,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="navbar-left">

        <div className="navbar-logo">
          <Activity size={22} />
        </div>

        <div className="navbar-brand">
          <h2>NER LIFELINK</h2>
          <span>Regional Intelligence Platform</span>
        </div>

      </div>

      {/* Center */}
      <div className="navbar-status">

        <span className="status-dot"></span>

        <span>NETWORK STATUS</span>

        <strong>OPERATIONAL</strong>

      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <button className="navbar-icon-button">
          <Bell size={19} />

          <span className="notification-dot"></span>
        </button>

        <div className="navbar-divider"></div>

        <div className="navbar-user">

          <div className="user-avatar">
            <User size={17} />
          </div>

          <div className="user-info">
            <strong>Admin</strong>
            <span>Control Center</span>
          </div>

        </div>

        <button className="mobile-menu-button">
          <Menu size={21} />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;