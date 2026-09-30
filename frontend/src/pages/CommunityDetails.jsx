import {
  MapPin,
  Users,
  Hospital,
  Package,
  Route,
  Wifi,
  Utensils,
  Activity,
  AlertTriangle,
} from "lucide-react";

function CommunityDetails({ community }) {
  if (!community) {
    return (
      <div className="community-details empty">
        <AlertTriangle size={20} />
        <p>Select a community to view its details.</p>
      </div>
    );
  }

  const indicators = [
    {
      name: "Road Access",
      value: community.roadAccess,
      icon: Route,
    },
    {
      name: "Medical Access",
      value: community.medicalAccess,
      icon: Hospital,
    },
    {
      name: "Food Supply",
      value: community.foodSupply,
      icon: Utensils,
    },
    {
      name: "Connectivity",
      value: community.connectivity,
      icon: Wifi,
    },
  ];

  return (
    <div className="community-details">

      {/* Header */}

      <div className="community-details-header">

        <div className="community-details-title">

          <div className="community-location-icon">
            <MapPin size={22} />
          </div>

          <div>
            <span className="community-state">
              {community.state}
            </span>

            <h2>{community.name}</h2>

            <p>{community.district} District</p>
          </div>

        </div>

        <div
          className={`community-risk-badge ${community.risk
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <span></span>
          {community.risk} Risk
        </div>

      </div>

      {/* Main Score */}

      <div className="community-score-section">

        <div className="community-score">

          <div
            className={`score-circle ${
              community.lifelineScore < 50
                ? "critical"
                : community.lifelineScore < 70
                ? "warning"
                : "safe"
            }`}
          >
            <strong>{community.lifelineScore}</strong>
            <span>/100</span>
          </div>

          <div className="score-info">
            <span>LIFELINE SCORE</span>

            <h3>
              {community.lifelineScore < 50
                ? "Immediate Attention Required"
                : community.lifelineScore < 70
                ? "Monitoring Required"
                : "Accessibility Stable"}
            </h3>

            <p>
              Combined score based on road, medical,
              supply and connectivity conditions.
            </p>
          </div>

        </div>

      </div>

      {/* Accessibility Indicators */}

      <div className="community-section-title">
        <Activity size={16} />
        <h3>Accessibility Indicators</h3>
      </div>

      <div className="community-indicators">

        {indicators.map((indicator, index) => {
          const Icon = indicator.icon;

          return (
            <div
              className="community-indicator"
              key={index}
            >

              <div className="indicator-header">

                <div className="indicator-name">
                  <Icon size={15} />
                  <span>{indicator.name}</span>
                </div>

                <strong>{indicator.value}%</strong>

              </div>

              <div className="indicator-bar">
                <div
                  className={`indicator-fill ${
                    indicator.value < 40
                      ? "critical"
                      : indicator.value < 70
                      ? "warning"
                      : "safe"
                  }`}
                  style={{
                    width: `${indicator.value}%`,
                  }}
                ></div>
              </div>

            </div>
          );
        })}

      </div>

      {/* Community Information */}

      <div className="community-section-title">
        <Users size={16} />
        <h3>Community Information</h3>
      </div>

      <div className="community-info-grid">

        <div className="community-info-card">

          <Users size={17} />

          <div>
            <span>Population</span>
            <strong>
              {community.population?.toLocaleString() || "N/A"}
            </strong>
          </div>

        </div>

        <div className="community-info-card">

          <Hospital size={17} />

          <div>
            <span>Nearest Hospital</span>
            <strong>{community.nearestHospital}</strong>
          </div>

        </div>

        <div className="community-info-card">

          <Package size={17} />

          <div>
            <span>Supply Hub</span>
            <strong>{community.nearestSupplyHub}</strong>
          </div>

        </div>

        <div className="community-info-card">

          <Activity size={17} />

          <div>
            <span>Supply Window</span>
            <strong>{community.supplyWindow}</strong>
          </div>

        </div>

      </div>

      {/* Current Issue */}

      <div className="community-current-issue">

        <div className="issue-icon">
          <AlertTriangle size={18} />
        </div>

        <div>
          <span>CURRENT PRIORITY</span>

          <strong>{community.mainIssue}</strong>

          <p>
            Recommended response should prioritize this
            community based on its current accessibility score.
          </p>
        </div>

      </div>

    </div>
  );
}

export default CommunityDetails;