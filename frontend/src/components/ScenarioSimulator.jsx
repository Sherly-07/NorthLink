import { useState } from "react";
import {
  CloudRain,
  Mountain,
  Waves,
  Route,
  Package,
  AlertTriangle,
  RotateCcw,
  Play,
} from "lucide-react";

function ScenarioSimulator() {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [simulationRunning, setSimulationRunning] = useState(false);

  const scenarios = [
    {
      id: "rain",
      name: "Heavy Rain",
      description: "Extreme rainfall affects regional roads",
      icon: CloudRain,
      risk: "HIGH",
    },
    {
      id: "landslide",
      name: "Landslide",
      description: "Mountain routes become inaccessible",
      icon: Mountain,
      risk: "CRITICAL",
    },
    {
      id: "flood",
      name: "Flood",
      description: "Flooding disrupts transport corridors",
      icon: Waves,
      risk: "HIGH",
    },
    {
      id: "road",
      name: "Major Road Closure",
      description: "Primary logistics corridor is blocked",
      icon: Route,
      risk: "CRITICAL",
    },
    {
      id: "supply",
      name: "Supply Shortage",
      description: "Essential supplies fall below safe levels",
      icon: Package,
      risk: "MEDIUM",
    },
  ];

  const selected = scenarios.find(
    (scenario) => scenario.id === selectedScenario
  );

  const handleSimulation = () => {
    if (!selectedScenario) return;

    setSimulationRunning(true);

    setTimeout(() => {
      setSimulationRunning(false);
    }, 1500);
  };

  const resetSimulation = () => {
    setSelectedScenario(null);
    setSimulationRunning(false);
  };

  return (
    <div className="scenario-simulator">

      {/* Header */}
      <div className="scenario-header">

        <div className="scenario-title">

          <div className="scenario-icon">
            <AlertTriangle size={21} />
          </div>

          <div>
            <h2>What-If Scenario Simulator</h2>
            <p>
              Simulate disruptions and analyse their community impact
            </p>
          </div>

        </div>

        <span className="scenario-mode">
          SIMULATION MODE
        </span>

      </div>

      {/* Scenario Buttons */}
      <div className="scenario-grid">

        {scenarios.map((scenario) => {
          const Icon = scenario.icon;

          const isSelected =
            selectedScenario === scenario.id;

          return (
            <button
              key={scenario.id}
              className={`scenario-card ${
                isSelected ? "selected" : ""
              }`}
              onClick={() =>
                setSelectedScenario(scenario.id)
              }
            >

              <div className="scenario-card-icon">
                <Icon size={21} />
              </div>

              <div className="scenario-card-info">
                <strong>{scenario.name}</strong>

                <span>{scenario.description}</span>
              </div>

              <small className={scenario.risk.toLowerCase()}>
                {scenario.risk}
              </small>

            </button>
          );
        })}

      </div>

      {/* Selected Scenario */}
      {selected && (
        <div className="selected-scenario">

          <div className="selected-scenario-info">

            <span>SELECTED SCENARIO</span>

            <strong>{selected.name}</strong>

            <p>
              The system will simulate how this disruption
              affects roads, medical access, supplies and
              community accessibility.
            </p>

          </div>

          <div className="scenario-actions">

            <button
              className="run-simulation"
              onClick={handleSimulation}
              disabled={simulationRunning}
            >
              <Play size={15} />

              {simulationRunning
                ? "Running..."
                : "Run Simulation"}
            </button>

            <button
              className="reset-simulation"
              onClick={resetSimulation}
            >
              <RotateCcw size={15} />
              Reset
            </button>

          </div>

        </div>
      )}

      {/* Simulation Result */}
      {simulationRunning && (
        <div className="simulation-result">

          <div className="simulation-loader"></div>

          <div>
            <strong>Analysing disruption impact...</strong>

            <p>
              Calculating accessibility and community risk.
            </p>
          </div>

        </div>
      )}

      {!selected && (
        <div className="scenario-hint">
          Select a scenario above to begin a simulation.
        </div>
      )}

    </div>
  );
}

export default ScenarioSimulator;