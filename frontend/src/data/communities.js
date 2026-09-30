const communities = [
  {
    id: 1,
    name: "Tawang",
    state: "Arunachal Pradesh",
    district: "Tawang",
    risk: "Critical",
    lifelineScore: 42,

    roadAccess: 28,
    medicalAccess: 18,
    foodSupply: 63,
    transportAccess: 31,
    connectivity: 40,

    population: 11000,
    nearestHospital: "Tawang District Hospital",
    nearestSupplyHub: "Bomdila Supply Hub",

    supplyWindow: "18 hours",

    mainIssue: "Main road access is severely restricted",
    status: "Critical",

    coordinates: {
      lat: 27.5861,
      lng: 91.8594,
    },
  },

  {
    id: 2,
    name: "Bomdila",
    state: "Arunachal Pradesh",
    district: "West Kameng",
    risk: "High",
    lifelineScore: 56,

    roadAccess: 44,
    medicalAccess: 52,
    foodSupply: 58,
    transportAccess: 47,
    connectivity: 61,

    population: 7000,
    nearestHospital: "District Hospital Bomdila",
    nearestSupplyHub: "Bomdila Supply Hub",

    supplyWindow: "24 hours",

    mainIssue: "Primary logistics corridor partially blocked",
    status: "High Risk",

    coordinates: {
      lat: 27.2648,
      lng: 92.4056,
    },
  },

  {
    id: 3,
    name: "Tezpur",
    state: "Assam",
    district: "Sonitpur",
    risk: "Medium",
    lifelineScore: 72,

    roadAccess: 78,
    medicalAccess: 76,
    foodSupply: 69,
    transportAccess: 73,
    connectivity: 82,

    population: 58000,
    nearestHospital: "Tezpur Medical College",
    nearestSupplyHub: "Tezpur Logistics Hub",

    supplyWindow: "48 hours",

    mainIssue: "Food supply levels need monitoring",
    status: "Warning",

    coordinates: {
      lat: 26.6528,
      lng: 92.7926,
    },
  },

  {
    id: 4,
    name: "Guwahati",
    state: "Assam",
    district: "Kamrup Metropolitan",
    risk: "Low",
    lifelineScore: 89,

    roadAccess: 94,
    medicalAccess: 92,
    foodSupply: 88,
    transportAccess: 91,
    connectivity: 96,

    population: 1100000,
    nearestHospital: "Gauhati Medical College",
    nearestSupplyHub: "Guwahati Central Supply Hub",

    supplyWindow: "72 hours",

    mainIssue: "Regional access currently stable",
    status: "Operational",

    coordinates: {
      lat: 26.1445,
      lng: 91.7362,
    },
  },

  {
    id: 5,
    name: "Aizawl",
    state: "Mizoram",
    district: "Aizawl",
    risk: "Medium",
    lifelineScore: 67,

    roadAccess: 61,
    medicalAccess: 74,
    foodSupply: 65,
    transportAccess: 58,
    connectivity: 78,

    population: 293000,
    nearestHospital: "Civil Hospital Aizawl",
    nearestSupplyHub: "Aizawl Supply Hub",

    supplyWindow: "36 hours",

    mainIssue: "Mountain roads require continuous monitoring",
    status: "Warning",

    coordinates: {
      lat: 23.7271,
      lng: 92.7176,
    },
  },

  {
    id: 6,
    name: "Kohima",
    state: "Nagaland",
    district: "Kohima",
    risk: "High",
    lifelineScore: 51,

    roadAccess: 39,
    medicalAccess: 63,
    foodSupply: 54,
    transportAccess: 43,
    connectivity: 66,

    population: 27000,
    nearestHospital: "Naga Hospital Authority",
    nearestSupplyHub: "Kohima Supply Hub",

    supplyWindow: "22 hours",

    mainIssue: "Road accessibility is below safe level",
    status: "High Risk",

    coordinates: {
      lat: 25.6751,
      lng: 94.1086,
    },
  },
];

export default communities;