import {
  AlertTriangle,
  MapPin,
  Route,
  HeartPulse,
  Package,
  TrendingDown,
} from "lucide-react";

function RiskOverview() {
  const risks = [
    {
      title: "Critical Communities",
      value: "3",
      description: "Require immediate attention",
      icon: AlertTriangle,
      type: "critical",
    },
    {
      title: "Blocked Routes",
      value: "5",
      description: "Affecting regional accessibility",
      icon: Route,
      type: "warning",
    },
    {
      title: "Medical Access",
      value: "18%",
      description: "Lowest access recorded",
      icon: HeartPulse,
      type: "critical",
    },
    {
      title: "Supply Risk",
      value: "7",
      description: "Communities below safe level",
      icon: Package,
      type: "warning",
    },
  ];

  return (
    <div className="risk-overview">

      {/* Header */}
      <div className="risk-overview-header">

        <div className="risk-overview-title">

          <div className="risk-overview-icon">
            <TrendingDown size={21} />
          </div>

          <div>
            <h2>Risk Overview</h2>
            <p>Current regional accessibility conditions</p>
          </div>

        </div>

        <div className="risk-location">
          <MapPin size={14} />
          <span>Northeast Region</span>
        </div>

      </div>

      {/* Risk Cards */}
      <div className="risk-grid">

        {risks.map((risk, index) => {
          const Icon = risk.icon;

          return (
            <div
              className={`risk-card ${risk.type}`}
              key={index}
            >

              <div className="risk-card-top">

                <div className="risk-card-icon">
                  <Icon size={19} />
                </div>

                <span className="risk-indicator"></span>

              </div>

              <div className="risk-value">
                {risk.value}
              </div>

              <h3>{risk.title}</h3>

              <p>{risk.description}</p>

            </div>
          );
        })}

      </div>

      {/* Overall Risk */}
      <div className="overall-risk">

        <div className="overall-risk-left">

          <div className="overall-risk-icon">
            <AlertTriangle size={18} />
          </div>

          <div>
            <span>OVERALL REGIONAL RISK</span>
            <strong>HIGH</strong>
          </div>

        </div>

        <div className="risk-progress-container">

          <div className="risk-progress-bar">
            <div className="risk-progress-value"></div>
          </div>

          <span>68 / 100</span>

        </div>

      </div>

    </div>
  );
}

export default RiskOverview;