// src/pages/Alerts.jsx

import { Link } from "react-router-dom";
import { DEMO_ALERTS } from "../data/demoAlerts";

function Alerts() {
  return (
    <div>
      <h2 className="alerts-title">Alerts</h2>

      <div className="filter-row">
        <button className="filter-pill active">All</button>
        <button className="filter-pill">Adoptions</button>
        <button className="filter-pill">New Cats</button>
        <button className="filter-pill">Rescues</button>
      </div>

      <div>
        {DEMO_ALERTS.map((alert) => (
          <Link
            key={alert.id}
            to={`/alerts/${alert.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="alert-item">
              <div className="alert-avatar-wrap">
                <div className="alert-avatar" />
                {/* red dot for more urgent cases */}
                {alert.severity === "Critical" && <div className="alert-dot" />}
              </div>

              <div className="alert-text">
                <div className="alert-line-1">
                  <span className="alert-name">{alert.title}</span>
                  <span className="alert-time">{alert.timeAgo}</span>
                </div>
                <div className="alert-message">
                  {alert.status} · {alert.location}
                </div>
              </div>

              <div className="alert-thumbnail" />
            </div>
          </Link>
        ))}
      </div>

      <p className="centered-note">
        These alerts are demo cases. In a full build, this list would stream
        live data from our backend.
      </p>
    </div>
  );
}

export default Alerts;


