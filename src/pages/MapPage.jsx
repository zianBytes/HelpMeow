// src/pages/MapPage.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { DEMO_ALERTS } from "../data/demoAlerts";
import { SHELTERS, RESCUE_UNITS } from "../data/partners";

// Import your 4 custom pin icons
import distressedPin from "../assets/pins/sadkitty.png";
import rescuePin from "../assets/pins/policekitty.png";
import shelterPin from "../assets/pins/doctorkitty.png";
import adoptedPin from "../assets/pins/homekitty.png";

// Create Leaflet icons
const distressedIcon = L.icon({
  iconUrl: distressedPin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36],
});

const rescueIcon = L.icon({
  iconUrl: rescuePin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36],
});

const shelterIcon = L.icon({
  iconUrl: shelterPin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36],
});

const adoptedIcon = L.icon({
  iconUrl: adoptedPin,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36],
});

// Helper to choose icon for alerts
function getIconForAlertType(type) {
  switch (type) {
    case "distressed":
      return distressedIcon;
    case "rescue":
      return rescueIcon;
    case "shelter":
      return shelterIcon;
    case "adopted":
      return adoptedIcon;
    default:
      return distressedIcon;
  }
}

function MapPage() {
  return (
    <div className="map-shell">
      {/* Top overlay */}
      <div className="map-overlay-top">
        <div className="map-mode-pill">
          <span className="map-mode-label">Nearby cats & partners</span>
          <span className="map-mode-arrow">⌄</span>
        </div>
      </div>

      {/* Interactive map */}
      <MapContainer
        center={[40.73061, -73.935242]} // NYC-ish center
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Cat alerts */}
        {DEMO_ALERTS.map((alert) => (
          <Marker
            key={alert.id}
            position={alert.coords}
            icon={getIconForAlertType(alert.type)}
          >
            <Popup>
              <strong>{alert.title}</strong>
              <br />
              {alert.location}
              <br />
              Status: {alert.status}
            </Popup>
          </Marker>
        ))}

        {/* Shelters */}
        {SHELTERS.map((shelter) => (
          <Marker
            key={shelter.id}
            position={shelter.coords}
            icon={shelterIcon}
          >
            <Popup>
              <strong>{shelter.name}</strong>
              <br />
              {shelter.address}
              <br />
              Type: Shelter
            </Popup>
          </Marker>
        ))}

        {/* Rescue units */}
        {RESCUE_UNITS.map((unit) => (
          <Marker key={unit.id} position={unit.coords} icon={rescueIcon}>
            <Popup>
              <strong>{unit.name}</strong>
              <br />
              {unit.area && <>Area: {unit.area}<br /></>}
              Type: Rescue unit
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Bottom overlay */}
      <div className="map-overlay-bottom">
        <div className="map-bottom-left">
          <div className="map-stat-number">
            {DEMO_ALERTS.length + SHELTERS.length + RESCUE_UNITS.length}
          </div>
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
