// src/pages/Home.jsx
import { Link } from "react-router-dom";

const MOCK_ALERTS = [
  {
    id: "ALRT-1024",
    status: "Waiting for rescuer",
    location: "Greenwich Village, NY",
    timeAgo: "3 min ago",
    summary: "Tiny orange kitten hiding under a parked car.",
    severity: "High",
  },
  {
    id: "ALRT-1023",
    status: "On the way to shelter",
    location: "Brooklyn Heights, NY",
    timeAgo: "18 min ago",
    summary: "Injured tabby, friendly and limping.",
    severity: "Critical",
  },
];

function Home() {
  return (
    <div className="grid-2col" style={{ alignItems: "center" }}>
      {/* Left column: hero */}
      <section>
        <div className="streak-pill">
          <span className="streak-dot" />
          <span>NYU Hackathon prototype · Day 1</span>
        </div>

        <h2
          style={{
            fontSize: "2.3rem",
            marginTop: "0.9rem",
            lineHeight: 1.15,
          }}
        >
          Citizen-style alerts,
          <br />
          but only for cats. 🐱🆘
        </h2>

        <p
          style={{
            marginTop: "0.7rem",
            color: "var(--text-muted)",
            maxWidth: "34rem",
            lineHeight: 1.6,
          }}
        >
          Spot a cat in trouble, tap once, and let nearby rescuers, shelters, and
          vets know. Track each meow from street to safe home, and earn playful
          badges along the way.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.7rem",
            marginTop: "1.5rem",
          }}
        >
          <Link to="/create">
            <button className="btn btn-primary">
              Report a cat
              <span>➤</span>
            </button>
          </Link>
          <Link to="/dashboard">
            <button className="btn btn-ghost">View my impact</button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
          }}
        >
          <span className="chip">📍 Location-based alerts</span>
          <span className="chip">📲 QR hand-offs to shelters</span>
          <span className="chip">🏅 Cat Lover of the Year</span>
        </div>
      </section>

      {/* Right column: mock nearby alerts */}
      <section>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
              alignItems: "center",
            }}
          >
            <h3 style={{ fontSize: "1rem" }}>Nearby cat alerts (demo)</h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              Mock data · UX preview
            </span>
          </div>

          <div className="list-vertical" style={{ marginTop: "0.5rem" }}>
            {MOCK_ALERTS.map((alert) => (
              <div
                key={alert.id}
                style={{
                  padding: "0.75rem 0.85rem",
                  borderRadius: "14px",
                  border: "1px solid var(--border-subtle)",
                  background:
                    alert.severity === "Critical"
                      ? "linear-gradient(90deg, rgba(251, 113, 133, 0.18), transparent)"
                      : "rgba(11, 18, 32, 0.95)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.78rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color:
                        alert.severity === "Critical"
                          ? "#fecaca"
                          : "var(--accent)",
                    }}
                  >
                    {alert.status}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>
                    {alert.timeAgo}
                  </span>
                </div>
                <div style={{ fontSize: "0.86rem" }}>{alert.summary}</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.76rem",
                    color: "var(--text-muted)",
                    marginTop: "0.2rem",
                  }}
                >
                  <span>{alert.location}</span>
                  <span>
                    Severity:{" "}
                    <strong
                      style={{
                        color:
                          alert.severity === "Critical"
                            ? "#fecaca"
                            : "var(--accent)",
                      }}
                    >
                      {alert.severity}
                    </strong>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "0.9rem",
              paddingTop: "0.7rem",
              borderTop: "1px dashed var(--border-subtle)",
              fontSize: "0.77rem",
              color: "var(--text-muted)",
            }}
          >
            Soon: tap any card to see the cat&apos;s timeline, QR transfers, and
            adoption updates.
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
