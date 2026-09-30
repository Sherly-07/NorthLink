import {
  ClipboardList,
  HeartPulse,
  Droplets,
  Package,
  Truck,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

function ResponsePlan() {
  const responseActions = [
    {
      priority: "01",
      title: "Send Medical Supplies",
      location: "Tawang",
      urgency: "IMMEDIATE",
      time: "< 6 hrs",
      icon: HeartPulse,
      type: "critical",
    },
    {
      priority: "02",
      title: "Restore Road Access",
      location: "Bomdila",
      urgency: "HIGH",
      time: "< 12 hrs",
      icon: Truck,
      type: "warning",
    },
    {
      priority: "03",
      title: "Deliver Essential Food",
      location: "Tezpur",
      urgency: "MEDIUM",
      time: "< 24 hrs",
      icon: Package,
      type: "medium",
    },
    {
      priority: "04",
      title: "Secure Water Supply",
      location: "Remote Communities",
      urgency: "MEDIUM",
      time: "< 24 hrs",
      icon: Droplets,
      type: "medium",
    },
  ];

  return (
    <div className="response-plan">

      {/* Header */}
      <div className="response-header">

        <div className="response-title">

          <div className="response-icon">
            <ClipboardList size={21} />
          </div>

          <div>
            <h2>Response Plan</h2>
            <p>Prioritized actions based on current accessibility risks</p>
          </div>

        </div>

        <span className="response-status">
          ACTION READY
        </span>

      </div>

      {/* Summary */}
      <div className="response-summary">

        <div className="summary-item">
          <strong>4</strong>
          <span>Actions Required</span>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-item">
          <strong>2</strong>
          <span>Critical</span>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-item">
          <strong>24h</strong>
          <span>Response Window</span>
        </div>

      </div>

      {/* Action List */}
      <div className="response-list">

        {responseActions.map((action, index) => {
          const Icon = action.icon;

          return (
            <div
              className={`response-action ${action.type}`}
              key={index}
            >

              {/* Priority */}
              <div className="response-priority">
                {action.priority}
              </div>

              {/* Icon */}
              <div className="response-action-icon">
                <Icon size={20} />
              </div>

              {/* Details */}
              <div className="response-action-info">

                <div className="response-action-top">

                  <h3>{action.title}</h3>

                  <span className={`urgency ${action.type}`}>
                    {action.urgency}
                  </span>

                </div>

                <div className="response-location">
                  <MapPin size={13} />
                  <span>{action.location}</span>
                </div>

                <div className="response-time">
                  <Clock size={13} />
                  <span>Recommended completion: {action.time}</span>
                </div>

              </div>

              {/* Arrow */}
              <button className="response-arrow">
                <ArrowRight size={17} />
              </button>

            </div>
          );
        })}

      </div>

      {/* Footer */}
      <div className="response-footer">

        <div>
          <span className="footer-label">PLAN STATUS</span>
          <strong>Ready for deployment</strong>
        </div>

        <button className="deploy-button">
          Review Plan
          <ArrowRight size={16} />
        </button>

      </div>

    </div>
  );
}

export default ResponsePlan;