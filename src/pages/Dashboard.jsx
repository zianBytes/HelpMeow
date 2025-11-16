// src/pages/Dashboard.jsx

function Dashboard() {
  const mockStats = {
    reported: 7,
    followedToAdoption: 3,
    updatesShared: 20,
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "20px", marginBottom: "4px" }}>My profile</h2>
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "12px",
        }}
      >
        In the full app, this screen will show your profile, badges, and rescue
        impact over time.
      </p>

      <div className="card" style={{ marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "999px",
              background: "#272838",
            }}
          />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500 }}>Cat Lover Name</div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              New York City · HelpMeow user
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "12px" }}>
        <h3 style={{ fontSize: "13px", marginBottom: "8px" }}>My cases</h3>
        <div className="stats-grid">
          <div>
            <div style={{ fontSize: "18px", fontWeight: 600 }}>
              {mockStats.reported}
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              Cats reported
            </div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 600 }}>
              {mockStats.followedToAdoption}
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              Followed to adoption
            </div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 600 }}>
              {mockStats.updatesShared}
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              Updates shared
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "13px", marginBottom: "6px" }}>Badges</h3>
        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
          Badges will unlock as you help more cats and complete rescue journeys.
        </p>
        <div className="badge-row">
          <span className="badge-chip">🌱 First Rescue</span>
          <span className="badge-chip">🚚 Transfer Pro</span>
          <span className="badge-chip">📍 Neighborhood Guardian</span>
          <span className="badge-chip">🏆 Cat Lover of the Month</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
