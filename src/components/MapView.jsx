import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function MapView() {
  return (
    <MapContainer
      center={[28.61, 77.21]} // Example: New Delhi
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
  );
}
