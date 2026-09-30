import {
  MapPin,
  Hospital,
  Package,
  AlertTriangle,
  Navigation,
} from "lucide-react";

function MapView() {
  const locations = [
    {
      name: "Tawang",
      type: "Critical Community",
      status: "critical",
      top: "22%",
      left: "72%",
      icon: MapPin,
    },
    {
      name: "Bomdila",
      type: "High Risk",
      status: "warning",
      top: "35%",
      left: "65%",
      icon: AlertTriangle,
    },
    {
      name: "Tezpur",
      type: "Supply Hub",
      status: "safe",
      top: "50%",
      left: "57%",
      icon: Package,
    },
    {
      name: "Guwahati",
      type: "Medical Hub",
      status: "safe",
      top: "65%",
      left: "48%",
      icon: Hospital,
    },
  ];

  return (
    <div className="map-view">

      {/* Map Header */}
      <div className="map-header">

        <div>
          <div className="map-title">
            <Navigation size={20} />
            <h2>NER Accessibility Map</h2>
          </div>

          <p>
            Regional logistics and community accessibility overview
          </p>
        </div>

        <span className="map-mode">
          DEMO MODE
        </span>

      </div>

      {/* Map Area */}
      <div className="map-container">

        {/* Background Grid */}
        <div className="map-grid"></div>

        {/* Region Shape */}
        <div className="ner-region">
          <span>NER</span>
        </div>

        {/* Locations */}
        {locations.map((location, index) => {
          const Icon = location.icon;

          return (
            <div
              key={index}
              className={`map-marker ${location.status}`}
              style={{
                top: location.top,
                left: location.left,
              }}
            >
              <div className="marker-icon">
                <Icon size={17} />
              </div>

              <div className="marker-label">
                <strong>{location.name}</strong>
                <span>{location.type}</span>
              </div>
            </div>
          );
        })}

        {/* Blocked Route */}
        <div className="blocked-route route-one"></div>
        <div className="blocked-route route-two"></div>

        {/* Route Warning */}
        <div className="route-warning">
          <AlertTriangle size={15} />
          <span>Road disruption detected</span>
        </div>

        {/* Map Legend */}
        <div className="map-legend">

          <div className="legend-title">
            MAP STATUS
          </div>

          <div className="legend-item">
            <span className="legend-dot critical"></span>
            Critical
          </div>

          <div className="legend-item">
            <span className="legend-dot warning"></span>
            At Risk
          </div>

          <div className="legend-item">
            <span className="legend-dot safe"></span>
            Accessible
          </div>

        </div>

        {/* Demo Label */}
        <div className="demo-label">
          SIMULATED REGIONAL DATA
        </div>

      </div>

    </div>
  );
}

export default MapView;