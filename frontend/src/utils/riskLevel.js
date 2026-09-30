// ======================================
// COMMUNITY RISK LEVEL CALCULATOR
// ======================================

function getRiskLevel(score) {
  if (score <= 30) {
    return "Critical";
  }

  if (score <= 50) {
    return "High";
  }

  if (score <= 70) {
    return "Medium";
  }

  return "Low";
}

export default getRiskLevel;