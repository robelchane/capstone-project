'use client';

//https://www.youtube.com/watch?v=Y4HzQNoUg_E

import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import residenciesData from "../../public/residenciesData.json";

export default function Map() {
  return (
    <main className="flex h-screen">
      
      <MapContainer
        center={[51.0447, -114.0719]} 
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {residenciesData.map((residence) => (
          <CircleMarker
            key={residence.id}
            center={[residence.latitude, residence.longitude]}
            radius={10}
            color="transparent"
            fillColor="green"
            opacity={0.5}
          >
            <Popup position={[residence.latitude, residence.longitude]}>
              {residence.name} <br /> {residence.address}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
      
    </main>
  );
}
