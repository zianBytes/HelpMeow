// src/pages/Alerts.jsx

const MOCK_ALERTS = [
  {
    id: 1,
    name: "cat1",
    timeAgo: "1d",
    message: "Started following you",
    hasDot: true,
    hasThumb: false,
  },
  {
    id: 2,
    name: "cat2",
    timeAgo: "1d",
    message: "Liked your post",
    hasDot: true,
    hasThumb: true,
  },
  {
    id: 3,
    name: "shelter",
    timeAgo: "2d",
    message: "Liked your comment",
    hasDot: false,
    hasThumb: false,
  },
  {
    id: 4,
    name: "lunavoyager",
    timeAgo: "3d",
    message: "Saved your post",
    hasDot: false,
    hasThumb: true,
  },
];

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
        {MOCK_ALERTS.map((alert) => (
          <div className="alert-item" key={alert.id}>
            <div className="alert-avatar-wrap">
              <div className="alert-avatar" />
              {alert.hasDot && <div className="alert-dot" />}
            </div>

            <div className="alert-text">
              <div className="alert-line-1">
                <span className="alert-name">{alert.name}</span>
                <span className="alert-time">{alert.timeAgo}</span>
              </div>
              <div className="alert-message">{alert.message}</div>
            </div>

            {alert.hasThumb && <div className="alert-thumbnail" />}
          </div>
        ))}
      </div>

      <p className="centered-note">
        These alerts are demo data. Later we&apos;ll load real notifications from
        the backend.
      </p>
    </div>
  );
}

export default Alerts;
