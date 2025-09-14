import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // connect to backend

export default function MapView() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    socket.on("trainUpdate", (data) => {
      setTrains(data);
    });
    return () => socket.off("trainUpdate");
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[28.61, 77.23]}
        zoom={12}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {trains.map((train) => (
          <Marker key={train.id} position={[train.lat, train.lng]}>
            <Popup>
              🚆 Train {train.id} <br />
              Status: {train.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
