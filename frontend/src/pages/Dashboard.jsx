import RiskOverview from "../components/RiskOverview";
import MapView from "../components/MapView";
import ScenarioSimulator from "../components/ScenarioSimulator";
import CommunityCard from "../components/CommunityCard";
import CommunityDetails from "./CommunityDetails";
import LifelineScore from "../components/LifelineScore";
import ImpactChain from "../components/ImpactChain";
import AIActionCenter from "../components/AIActionCenter";
import ResponsePlan from "../components/ResponsePlan";

import communities from "../data/communities";

function Dashboard() {
  const selectedCommunity = communities[0];

  return (
    <main className="main-content">

      {/* Dashboard Header */}
      <div className="dashboard-header">

        <div>
          <span className="dashboard-label">
            NORTHEAST REGION
          </span>

          <h1>
            Accessibility Intelligence Dashboard
          </h1>

          <p>
            Monitor community accessibility, risks and
            emergency response priorities.
          </p>
        </div>

        <div className="live-status">
          <span></span>
          LIVE MONITORING
        </div>

      </div>

      {/* Risk Overview */}
      <section className="dashboard-section">
        <RiskOverview />
      </section>

      {/* Accessibility Map */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>REGIONAL INTELLIGENCE</span>
            <h2>Accessibility Map</h2>
          </div>
        </div>

        <MapView />

      </section>

      {/* Scenario Simulator */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>WHAT-IF ANALYSIS</span>
            <h2>Scenario Simulator</h2>
          </div>
        </div>

        <ScenarioSimulator />

      </section>

      {/* Community */}
      <section className="community-layout">

        <CommunityCard
          community={selectedCommunity}
        />

        <CommunityDetails
          community={selectedCommunity}
        />

      </section>

      {/* Lifeline Score */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>COMMUNITY HEALTH</span>
            <h2>Lifeline Intelligence</h2>
          </div>
        </div>

        <LifelineScore />

      </section>

      {/* Impact Chain */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>IMPACT ANALYSIS</span>
            <h2>Impact Chain</h2>
          </div>
        </div>

        <ImpactChain />

      </section>

      {/* AI Action Center */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>AI DECISION SUPPORT</span>
            <h2>AI Action Center</h2>
          </div>
        </div>

        <AIActionCenter />

      </section>

      {/* Response Plan */}
      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <span>EMERGENCY OPERATIONS</span>
            <h2>Response Plan</h2>
          </div>
        </div>

        <ResponsePlan />

      </section>

    </main>
  );
}

export default Dashboard;
