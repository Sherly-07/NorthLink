const scenarios = [
  {
    id: 1,
    name: "Heavy Rain",
    type: "weather",
    risk: "High",
    description: "Extreme rainfall affects roads and transportation.",
    affectedCommunities: ["Tawang", "Bomdila", "Kohima"],
    affectedRoutes: ["Tawang - Bomdila Corridor"],
    roadImpact: -20,
    medicalImpact: -10,
    foodImpact: -8,
    transportImpact: -15,
    connectivityImpact: -5,
    lifelineImpact: -12,
    recommendedAction:
      "Pre-position medical supplies and essential food before road conditions worsen.",
  },

  {
    id: 2,
    name: "Landslide",
    type: "disaster",
    risk: "Critical",
    description: "Mountain routes are blocked by landslides.",
    affectedCommunities: ["Tawang", "Bomdila", "Kohima"],
    affectedRoutes: [
      "Tawang - Bomdila Corridor",
      "Kohima - Imphal Corridor",
    ],
    roadImpact: -35,
    medicalImpact: -20,
    foodImpact: -15,
    transportImpact: -25,
    connectivityImpact: -8,
    lifelineImpact: -22,
    recommendedAction:
      "Prioritize road clearance and activate alternate emergency routes.",
  },

  {
    id: 3,
    name: "Flood",
    type: "disaster",
    risk: "High",
    description: "Flooding disrupts transport corridors and supply movement.",
    affectedCommunities: ["Tezpur", "Guwahati"],
    affectedRoutes: [
      "Tezpur - Guwahati Corridor",
      "Bomdila - Tezpur Corridor",
    ],
    roadImpact: -25,
    medicalImpact: -12,
    foodImpact: -18,
    transportImpact: -22,
    connectivityImpact: -10,
    lifelineImpact: -18,
    recommendedAction:
      "Move essential supplies to safe hubs and monitor flood-affected routes.",
  },

  {
    id: 4,
    name: "Major Road Closure",
    type: "infrastructure",
    risk: "Critical",
    description: "A primary logistics corridor becomes completely unavailable.",
    affectedCommunities: ["Tawang", "Bomdila"],
    affectedRoutes: ["Tawang - Bomdila Corridor"],
    roadImpact: -45,
    medicalImpact: -25,
    foodImpact: -20,
    transportImpact: -35,
    connectivityImpact: -10,
    lifelineImpact: -28,
    recommendedAction:
      "Activate alternate routes and prioritize emergency medical transport.",
  },

  {
    id: 5,
    name: "Supply Shortage",
    type: "logistics",
    risk: "Medium",
    description: "Essential food and medical supplies fall below safe levels.",
    affectedCommunities: ["Tawang", "Bomdila", "Kohima"],
    affectedRoutes: [],
    roadImpact: 0,
    medicalImpact: -12,
    foodImpact: -30,
    transportImpact: -8,
    connectivityImpact: 0,
    lifelineImpact: -15,
    recommendedAction:
      "Dispatch essential food and medical supplies from the nearest supply hub.",
  },
];

export default scenarios;