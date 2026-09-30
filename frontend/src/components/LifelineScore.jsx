import {
  HeartPulse,
  Route,
  Package,
  Truck,
  Wifi,
  ShieldCheck,
} from "lucide-react";

function LifelineScore({ score = 42 }) {
  const factors = [
    {
      name: "Road Access",
      value: 28,
      icon: Route,
    },
    {
      name: "Medical Access",
      value: 18,
      icon: HeartPulse,
    },
    {
      name: "Food Supply",
      value: 63,
      icon: Package,
    },
    {
      name: "Transport",
      value: 31,
      icon: Truck,
    },
    {
      name: "Connectivity",
      value: 40,
      icon: Wifi,
    },
  ];

  const getStatus = () => {
    if (score <= 30) return "CRITICAL";
    if (score <= 50) return "HIGH RISK";
    if (score <= 70) return "MODERATE";
    return "STABLE";
  };

  const status = getStatus();

  return (
    <div className="lifeline-score-card">

      {/* Header */}
      <div className="lifeline-score-header">
        <div>
          <h2>Community Lifeline Score</h2>
          <p>Essential accessibility during disruption</p>
        </div>

        <ShieldCheck size={22} />
      </div>

      {/* Score */}
      <div className="score-section">

        <div className="score-circle-large">
          <div>
            <strong>{score}</strong>
            <span>/100</span>
          </div>
        </div>

        <div className="score-status">
          <span>STATUS</span>
          <strong>{status}</strong>
          <p>
            Lower scores indicate greater difficulty
            accessing essential services.
          </p>
        </div>

      </div>

      {/* Factors */}
      <div className="lifeline-factor-list">

        {factors.map((factor, index) => {
          const Icon = factor.icon;

          return (
            <div className="lifeline-factor-row" key={index}>

              <div className="factor-name">
                <Icon size={17} />
                <span>{factor.name}</span>
              </div>

              <div className="factor-progress-container">

                <div className="factor-progress-bar">
                  <div
                    className="factor-progress-value"
                    style={{ width: `${factor.value}%` }}
                  ></div>
                </div>

              </div>

              <strong className="factor-value">
                {factor.value}%
              </strong>

            </div>
          );
        })}

      </div>

      {/* Explanation */}
      <div className="score-explanation">
        <span>Why this score?</span>

        <p>
          Road access and medical accessibility are currently
          the biggest factors affecting this community.
        </p>
      </div>

    </div>
  );
}

export default LifelineScore;