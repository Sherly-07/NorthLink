import {
  Activity,
  Brain,
  Map,
  ShieldCheck,
  Route,
  Users,
  ArrowRight,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: Map,
      title: "Accessibility Intelligence",
      description:
        "Monitors road, transport, medical and supply accessibility across communities.",
    },
    {
      icon: Brain,
      title: "AI-Assisted Decisions",
      description:
        "Converts disruption data into prioritized actions for emergency response teams.",
    },
    {
      icon: Route,
      title: "Lifeline Score",
      description:
        "Combines critical accessibility indicators into one simple community risk score.",
    },
    {
      icon: ShieldCheck,
      title: "Scenario Simulation",
      description:
        "Allows teams to test what happens when a flood, landslide or road closure occurs.",
    },
  ];

  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-hero-icon">
          <Activity size={28} />
        </div>

        <span className="about-label">
          NER LIFELINK
        </span>

        <h1>
          Smart Logistics & Accessibility
          <span> Intelligence for the Northeast</span>
        </h1>

        <p>
          NER LIFELINK is a decision-support dashboard designed to
          help identify accessibility risks, understand community
          impact and plan faster emergency responses across the
          Northeast Region.
        </p>

      </section>

      {/* Problem */}

      <section className="about-section">

        <div className="about-section-heading">
          <span>01</span>

          <div>
            <h2>The Problem</h2>

            <p>
              When disasters affect remote communities, information
              about roads, medical access and essential supplies can
              become difficult to understand and act upon quickly.
            </p>
          </div>
        </div>

        <div className="about-problem-card">

          <div className="problem-item">
            <Users size={20} />
            <strong>Remote Communities</strong>
            <span>
              Some communities depend on limited transport routes.
            </span>
          </div>

          <div className="problem-item">
            <Route size={20} />
            <strong>Route Disruptions</strong>
            <span>
              Landslides, floods and weather can affect accessibility.
            </span>
          </div>

          <div className="problem-item">
            <ShieldCheck size={20} />
            <strong>Response Delays</strong>
            <span>
              Teams need clear priorities during emergency situations.
            </span>
          </div>

        </div>

      </section>

      {/* Solution */}

      <section className="about-section">

        <div className="about-section-heading">
          <span>02</span>

          <div>
            <h2>Our Solution</h2>

            <p>
              NER LIFELINK connects accessibility data, community
              impact and response planning into one visual dashboard.
            </p>
          </div>
        </div>

        <div className="about-features">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="about-feature"
                key={index}
              >

                <div className="about-feature-icon">
                  <Icon size={20} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>
            );
          })}

        </div>

      </section>

      {/* How It Works */}

      <section className="about-section">

        <div className="about-section-heading">
          <span>03</span>

          <div>
            <h2>How It Works</h2>

            <p>
              The platform follows a simple disaster intelligence
              workflow.
            </p>
          </div>
        </div>

        <div className="about-flow">

          <div className="flow-step">
            <span>01</span>
            <strong>Detect</strong>
            <p>Identify disruption or accessibility risk.</p>
          </div>

          <ArrowRight className="flow-arrow" size={20} />

          <div className="flow-step">
            <span>02</span>
            <strong>Analyse</strong>
            <p>Measure community and lifeline impact.</p>
          </div>

          <ArrowRight className="flow-arrow" size={20} />

          <div className="flow-step">
            <span>03</span>
            <strong>Prioritize</strong>
            <p>Identify communities requiring attention.</p>
          </div>

          <ArrowRight className="flow-arrow" size={20} />

          <div className="flow-step">
            <span>04</span>
            <strong>Respond</strong>
            <p>Generate a prioritized response plan.</p>
          </div>

        </div>

      </section>

      {/* Innovation */}

      <section className="about-innovation">

        <div className="innovation-icon">
          <Brain size={25} />
        </div>

        <div>
          <span>OUR INNOVATION</span>

          <h2>
            From "Where is the problem?"
            to "What should we do next?"
          </h2>

          <p>
            Instead of displaying only maps and disaster information,
            NER LIFELINK connects disruption → community impact →
            accessibility score → recommended response.
          </p>
        </div>

      </section>

      {/* Footer */}

      <div className="about-footer">
        <span>NER LIFELINK</span>
        <span>Smart Logistics & Accessibility Intelligence</span>
      </div>

    </div>
  );
}

export default About;