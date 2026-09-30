import { Circle } from "lucide-react";

function StatusBadge({ status = "Operational" }) {
  const getStatusClass = (status) => {
    if (status === "Critical") return "critical";
    if (status === "High Risk") return "high";
    if (status === "Warning") return "warning";
    if (status === "Operational") return "operational";
    if (status === "Stable") return "stable";

    return "default";
  };

  return (
    <span className={`status-badge ${getStatusClass(status)}`}>
      <Circle size={8} fill="currentColor" />
      {status}
    </span>
  );
}

export default StatusBadge;