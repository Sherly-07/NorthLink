// ======================================
// COMMUNITY LIFELINE SCORE CALCULATOR
// ======================================

function calculateScore(community) {
  if (!community) {
    return 0;
  }

  const roadAccess = community.roadAccess || 0;
  const medicalAccess = community.medicalAccess || 0;
  const foodSupply = community.foodSupply || 0;
  const transportAccess = community.transportAccess || 0;
  const connectivity = community.connectivity || 0;

  // Weight of each factor
  const weights = {
    roadAccess: 0.25,
    medicalAccess: 0.25,
    foodSupply: 0.20,
    transportAccess: 0.15,
    connectivity: 0.15,
  };

  // Calculate weighted score
  const score =
    roadAccess * weights.roadAccess +
    medicalAccess * weights.medicalAccess +
    foodSupply * weights.foodSupply +
    transportAccess * weights.transportAccess +
    connectivity * weights.connectivity;

  // Return a whole number between 0 and 100
  return Math.round(Math.max(0, Math.min(100, score)));
}

export default calculateScore;