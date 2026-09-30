import {
  LayoutDashboard,
  Map,
  Users,
  AlertTriangle,
  ClipboardList,
  Activity,
  Settings,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Accessibility Map",
      icon: Map,
      active: false,
    },
    {
      name: "Communities",
      icon: Users,
      active: false,
    },
    {
      name: "Risk Monitoring",
      icon: AlertTriangle,
      active: false,
    },
    {
      name: "Response Plans",
      icon: ClipboardList,
      active: false,
    },
  ];

  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-brand">

        <div className="sidebar-brand-icon">
          <Activity size={20} />
        </div>

        <div>
          <h2>NER</h2>
          <span>LIFELINK</span>
        </div>

      </div>

      {/* Main Navigation */}
      <div className="sidebar-section">

        <p className="sidebar-section-title">
          OPERATIONS
        </p>

        <nav className="sidebar-menu">

          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`sidebar-item ${
                  item.active ? "active" : ""
                }`}
              >
                <Icon size={18} />

                <span>{item.name}</span>
              </button>
            );
          })}

        </nav>

      </div>

      {/* System */}
      <div className="sidebar-bottom">

        <p className="sidebar-section-title">
          SYSTEM
        </p>

        <button className="sidebar-item">
          <Settings size={18} />
          <span>Settings</span>
        </button>

        <button className="sidebar-item">
          <HelpCircle size={18} />
          <span>Help & Information</span>
        </button>

      </div>

      {/* Collapse Button */}
      <button className="sidebar-collapse">
        <ChevronLeft size={16} />
        <span>Control Center</span>
      </button>

    </aside>
  );
}

export default Sidebar;