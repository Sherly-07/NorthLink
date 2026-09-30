import { Bot, AlertTriangle, Truck, HeartPulse, Package, ArrowRight } from "lucide-react";

function AIActionCenter() {
  const actions = [
    {
      priority: "HIGH",
      title: "Send Medical Supplies",
      location: "Tawang",
      reason: "Medical access is critically low",
      icon: HeartPulse,
    },
    {
      priority: "HIGH",
      title: "Restore Road Access",
      location: "Bomdila",
      reason: "Main road is blocked",
      icon: Truck,
    },
    {
      priority: "MEDIUM",
      title: "Increase Food Supply",
      location: "Tezpur",
      reason: "Food supply is below safe level",
      icon: Package,
    },
  ];

  return (
    <div className="ai-action-center">

      {/* Header */}
      <div className="ai-header">
        <div className="ai-title">
          <div className="ai-icon">
            <Bot size={22} />
          </div>

          <div>
            <h2>AI Action Center</h2>
            <p>Recommended actions based on current risks</p>
          </div>
        </div>

        <span className="ai-status">
          AI ACTIVE
        </span>
      </div>

      {/* Alert */}
      <div className="ai-alert">
        <AlertTriangle size={20} />

        <div>
          <strong>3 communities need attention</strong>
          <p>
            The system has identified high-priority accessibility risks.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="action-list">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <div className="action-card" key={index}>

              <div className="action-icon">
                <Icon size={20} />
              </div>

              <div className="action-info">
                <div className="action-top">
                  <span className={`priority ${action.priority.toLowerCase()}`}>
                    {action.priority}
                  </span>

                  <span className="location">
                    {action.location}
                  </span>
                </div>

                <h3>{action.title}</h3>

                <p>{action.reason}</p>
              </div>

              <button className="action-button">
                <ArrowRight size={18} />
              </button>

            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="ai-footer">
        <Bot size={16} />
        <span>
          Recommendations generated from current community risk data.
        </span>
      </div>

    </div>
  );
}

export default AIActionCenter;