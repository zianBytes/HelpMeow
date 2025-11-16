// src/pages/MapPage.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Simple demo cat markers near NYC
const CAT_MARKERS = [
  {
    id: 1,
    position: [40.73061, -73.935242], // Manhattan-ish
    label: "Injured orange kitten spotted here.",
  },
  {
    id: 2,
    position: [40.7295, -73.9974], // NYU area
    label: "Shy tuxedo cat near NYU courtyard.",
  },
  {
    id: 3,
    position: [40.7003, -73.992], // Brooklyn-ish
    label: "Friendly tabby seen by a local café.",
  },
];

function MapPage() {
  return (
    <div className="map-shell">
      {/* Top overlay (keeps your original vibe) */}
      <div className="map-overlay-top">
        <div className="map-mode-pill">
          <span className="map-mode-label">Nearby cats</span>
          <span className="map-mode-arrow">⌄</span>
        </div>
      </div>

      {/* Actual interactive map */}
      <MapContainer
        center={[40.73061, -73.935242]} // NYC center
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
    <TileLayer
  attribution='&copy; OpenStreetMap contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>



        {CAT_MARKERS.map((cat) => (
          <Marker key={cat.id} position={cat.position}>
            <Popup>{cat.label}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Bottom overlay (keeps your stat UI) */}
      <div className="map-overlay-bottom">
        <div className="map-bottom-left">
          <div className="map-stat-number">3</div>
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
