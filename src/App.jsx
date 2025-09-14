import React from "react";
import "leaflet/dist/leaflet.css"; // Leaflet map styles
import "./App.css"; // custom styles we'll add
import MapView from "./components/MapView";
import AlertsPanel from "./components/AlertsPanel";

export default function App() {
  return (
    <div className="app">
      <header className="topbar">🚆 Railway Control Dashboard</header>
      <div className="main">
        <aside className="sidebar">
          <h2>Alerts</h2>
          <AlertsPanel />
        </aside>
        <main className="content">
          <MapView />
        </main>
      </div>
    </div>
  );
}
