// src/App.jsx
import AlertDetail from "./pages/AlertDetail.jsx";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import MapPage from "./pages/MapPage.jsx";
import Alerts from "./pages/Alerts.jsx";
import CreateAlert from "./pages/CreateAlert.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./styles.css";


// Icons
import { FiMenu, FiMap, FiGlobe, FiVideo, FiBell, FiUser } from "react-icons/fi";
import { FaCat } from "react-icons/fa";

// Import the placeholder logo image
import logo from "./assets/logo.png";


function UpdatesPage() {
  return (
    <div className="feed-shell">
      <h2 className="feed-title">Updates</h2>
      <p className="feed-subtitle">
        Rescue stories, adoption posts, and progress updates from shelters and
        cat lovers will show up here.
      </p>

      <div className="feed-card">
        <div className="feed-card-header">
          <div className="feed-avatar" />
          <div className="feed-header-text">
            <div className="feed-author">Daniel in HelpMeow NYC</div>
            <div className="feed-meta">2 hrs ago</div>
          </div>
        </div>
        <p className="feed-caption">Cat progress</p>
        <div className="feed-image-placeholder"></div>
        <div className="feed-actions">
          <span>♡ 6 likes</span>
          <span>💬 18 comments</span>
        </div>
      </div>
    </div>
  );
}

function ProfilePage() {
  return <Dashboard />;
}

// ---------------------- Main App ----------------------

function App() {
  return (
    <div className="phone-shell">
      
      {/* -------------------- TOP BAR -------------------- */}
      <header className="top-bar">
        <div className="top-bar-left">
          <button className="icon-button" type="button">
            <FiMenu size={18} />
          </button>
        </div>

        {/* LOGO IMAGE instead of title */}
        <img
          src={logo}
          alt="HelpMeow Logo"
          className="top-logo-img"
          style={{ height: "100px", objectFit: "contain" }}
        />

        <div className="top-bar-right">
          <div className="avatar-circle"></div>
        </div>
      </header>


      {/* -------------------- MAIN CONTENT -------------------- */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/map" replace />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/cats" element={<CreateAlert />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/alerts/:id" element={<AlertDetail />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

      </main>


      {/* -------------------- BOTTOM NAV -------------------- */}
      <nav className="bottom-nav">

        <NavLink
          to="/map"
          className={({ isActive }) =>
            "bottom-tab" + (isActive ? " active" : "")
          }
        >
          <div className="bottom-tab-icon">
            <FiMap size={18} />
          </div>
          <span>Map</span>
        </NavLink>

        <NavLink
          to="/updates"
          className={({ isActive }) =>
            "bottom-tab" + (isActive ? " active" : "")
          }
        >
          <div className="bottom-tab-icon">
            <FiGlobe size={18} />
          </div>
          <span>News</span>
        </NavLink>

        {/* SPECIAL CAT TAB */}
        <NavLink
          to="/cats"
          className={({ isActive }) =>
            "bottom-tab bottom-tab-cats" + (isActive ? " active" : "")
          }
        >
          <div className="cats-icon-wrapper">
            <FaCat size={26} />
          </div>
          <span className="cats-label">MeowNow</span>
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            "bottom-tab" + (isActive ? " active" : "")
          }
        >
          <div className="bottom-tab-icon">
            <FiBell size={18} />
          </div>
          <span>Alerts</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            "bottom-tab" + (isActive ? " active" : "")
          }
        >
          <div className="bottom-tab-icon">
            <FiUser size={18} />
          </div>
          <span>You</span>
        </NavLink>

      </nav>
    </div>
  );
}

export default App;
