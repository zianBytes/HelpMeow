// src/pages/MapPage.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { DEMO_ALERTS } from "../data/demoAlerts";

function MapPage() {
  return (
    <div className="map-shell">
      {/* Top overlay */}
      <div className="map-overlay-top">
        <div className="map-mode-pill">
          <span className="map-mode-label">Nearby cats</span>
          <span className="map-mode-arrow">⌄</span>
        </div>
      </div>

      {/* Interactive map */}
      <MapContainer
        center={[40.693812, -73.986384]} // NYC-ish
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {DEMO_ALERTS.map((alert) => (
          <Marker key={alert.id} position={alert.coords}>
            <Popup>
              <strong>{alert.title}</strong>
              <br />
              {alert.location}
              <br />
              Status: {alert.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Bottom overlay */}
      <div className="map-overlay-bottom">
        <div className="map-bottom-left">
          <div className="map-stat-number">{DEMO_ALERTS.length}</div>
          <button className="map-explore-btn" type="button">
            Explore further ↗
          </button>
        </div>
        <div className="map-bottom-right">
          <div className="map-stat-number">7,647</div>
          <div className="map-stat-label">
            Nearby cat lovers · 0.6 mi (demo)
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
