// ===============================
// NER LIFELINK API SERVICE
// ===============================

// Backend URL
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Generic API request function
async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("NER LIFELINK API Error:", error);

    throw error;
  }
}

// ===============================
// COMMUNITIES
// ===============================

export const getCommunities = () => {
  return apiRequest("/communities");
};

export const getCommunity = (id) => {
  return apiRequest(`/communities/${id}`);
};

// ===============================
// ROUTES
// ===============================

export const getRoutes = () => {
  return apiRequest("/routes");
};

export const getRoute = (id) => {
  return apiRequest(`/routes/${id}`);
};

// ===============================
// RISKS
// ===============================

export const getRisks = () => {
  return apiRequest("/risks");
};

export const getCommunityRisk = (communityId) => {
  return apiRequest(`/risks/${communityId}`);
};

// ===============================
// SCENARIOS
// ===============================

export const getScenarios = () => {
  return apiRequest("/scenarios");
};

export const runScenario = (scenarioId, communityId) => {
  return apiRequest("/scenarios/simulate", {
    method: "POST",

    body: JSON.stringify({
      scenarioId,
      communityId,
    }),
  });
};

// ===============================
// LIFELINE SCORE
// ===============================

export const getLifelineScore = (communityId) => {
  return apiRequest(`/lifeline/${communityId}`);
};

// ===============================
// AI ACTION CENTER
// ===============================

export const getAIRecommendations = (communityId) => {
  return apiRequest(`/ai/recommendations/${communityId}`);
};

// ===============================
// RESPONSE PLAN
// ===============================

export const generateResponsePlan = (communityId, scenarioId) => {
  return apiRequest("/response-plan", {
    method: "POST",

    body: JSON.stringify({
      communityId,
      scenarioId,
    }),
  });
};

// ===============================
// HEALTH CHECK
// ===============================

export const checkBackendStatus = () => {
  return apiRequest("/health");
};