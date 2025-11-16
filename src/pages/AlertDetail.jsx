// src/pages/AlertDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { DEMO_ALERTS } from "../data/demoAlerts";

function AlertDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const alert = DEMO_ALERTS.find((a) => a.id === id);

  if (!alert) {
    return (
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={() => navigate(-1)}
          style={{ marginBottom: "10px" }}
        >
          ← Back
        </button>
        <h2>Cat case not found</h2>
        <p
          style={{
            marginTop: "6px",
            fontSize: "13px",
            color: "var(--text-muted)",
          }}
        >
          This demo alert ID doesn&apos;t exist. Try opening it from the Alerts
          page.
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <button
        className="btn btn-ghost"
        type="button"
        onClick={() => navigate(-1)}
        style={{ marginBottom: "10px" }}
      >
        ← Back
      </button>

      <h2 style={{ fontSize: "20px", marginBottom: "4px" }}>{alert.title}</h2>
      <p
        style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "12px",
        }}
      >
        Case ID: <strong>{alert.id}</strong> · {alert.location}
      </p>

      {/* Top card with status & severity */}
      <div className="card" style={{ marginBottom: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              padding: "4px 10px",
              borderRadius: "999px",
              background:
                alert.severity === "Critical"
                  ? "rgba(248, 113, 113, 0.15)"
                  : "rgba(56, 189, 248, 0.12)",
            }}
          >
            Severity: <strong>{alert.severity}</strong>
          </span>
          <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
            {alert.timeAgo} · {alert.status}
          </span>
        </div>

        <p style={{ fontSize: "13px", lineHeight: 1.5 }}>
          {alert.description}
        </p>
      </div>

      {/* Timeline placeholder for your QR journey idea */}
      <div className="card">
        <h3 style={{ fontSize: "13px", marginBottom: "6px" }}>
          Case timeline
        </h3>
        <p
          style={{
            fontSize: "11px",
            color: "var(--text-muted)",
            marginBottom: "6px",
          }}
        >
         
        </p>
        <ul
          style={{
            fontSize: "12px",
            marginLeft: "1rem",
            lineHeight: 1.6,
          }}
        >
          <li> Reported by a HelpMeow user near {alert.location}</li>
          <li> Rescuer assigned (QR transfer flow here)</li>
          <li> Arrives at shelter / vet</li>
          <li> Marked as adopted + happy ending update</li>
        </ul>
      </div>
    </div>
  );
}

export default AlertDetail;

