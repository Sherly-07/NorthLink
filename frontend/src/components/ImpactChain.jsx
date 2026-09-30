import {
  CloudRain,
  Route,
  Users,
  HeartPulse,
  Package,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

function ImpactChain() {
  const impacts = [
    {
      icon: CloudRain,
      title: "Heavy Rain",
      description: "Extreme weather event",
      type: "danger",
    },
    {
      icon: Route,
      title: "Road Blocked",
      description: "Main route becomes unavailable",
      type: "danger",
    },
    {
      icon: Users,
      title: "Community Isolated",
      description: "Access to nearby areas decreases",
      type: "warning",
    },
    {
      icon: HeartPulse,
      title: "Medical Access ↓",
      description: "Emergency services become harder to reach",
      type: "warning",
    },
    {
      icon: Package,
      title: "Supply Window ↓",
      description: "Essential supplies may run low",
      type: "warning",
    },
    {
      icon: TrendingDown,
      title: "Lifeline Score ↓",
      description: "Community accessibility decreases",
      type: "critical",
    },
  ];

  return (
    <div className="impact-chain">

      {/* Header */}
      <div className="impact-header">
        <div className="impact-title">

          <div className="impact-icon">
            <AlertTriangle size={21} />
          </div>

          <div>
            <h2>Impact Chain</h2>
            <p>How a disruption affects the community</p>
          </div>

        </div>

        <span className="impact-status">
          LIVE ANALYSIS
        </span>
      </div>

      {/* Impact Chain */}
      <div className="chain-container">

        {impacts.map((impact, index) => {
          const Icon = impact.icon;

          return (
            <div className="chain-item" key={index}>

              {/* Icon */}
              <div className={`chain-node ${impact.type}`}>
                <Icon size={20} />
              </div>

              {/* Text */}
              <div className="chain-content">
                <h3>{impact.title}</h3>
                <p>{impact.description}</p>
              </div>

              {/* Arrow */}
              {index < impacts.length - 1 && (
                <div className="chain-arrow">
                  ↓
                </div>
              )}

            </div>
          );
        })}

      </div>

      {/* Summary */}
      <div className="impact-summary">

        <AlertTriangle size={17} />

        <span>
          A single disruption can create multiple accessibility risks
          across the community.
        </span>

      </div>

    </div>
  );
}

export default ImpactChain;