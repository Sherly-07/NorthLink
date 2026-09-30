import { MapPin, Activity, Truck, HeartPulse } from "lucide-react";

function CommunityCard({ community }) {
  const getRiskClass = (risk) => {
    if (risk === "Critical") return "critical";
    if (risk === "High") return "high";
    if (risk === "Medium") return "medium";
    return "low";
  };

  return (
    <div className="community-card">

      {/* Header */}
      <div className="community-header">
        <div>
          <h3>{community.name}</h3>

          <div className="community-location">
            <MapPin size={13} />
            <span>{community.state}</span>
          </div>
        </div>

        <span className={`risk-badge ${getRiskClass(community.risk)}`}>
          {community.risk}
        </span>
      </div>

      {/* Lifeline Score */}
      <div className="community-score">

        <div>
          <p>Lifeline Score</p>
          <h2>{community.lifelineScore}<span>/100</span></h2>
        </div>

        <div className="score-circle">
          <Activity size={20} />
        </div>

      </div>

      {/* Details */}
      <div className="community-details">

        <div className="detail-item">
          <Truck size={16} />
          <div>
            <span>Road Access</span>
            <strong>{community.roadAccess}%</strong>
          </div>
        </div>

        <div className="detail-item">
          <HeartPulse size={16} />
          <div>
            <span>Medical Access</span>
            <strong>{community.medicalAccess}%</strong>
          </div>
        </div>

      </div>

      {/* Supply */}
      <div className="supply-section">

        <div className="supply-header">
          <span>Food Supply</span>
          <strong>{community.foodSupply}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${community.foodSupply}%` }}
          ></div>
        </div>

      </div>

      {/* Button */}
      <button className="view-community-btn">
        View Community
      </button>

    </div>
  );
}

export default CommunityCard;