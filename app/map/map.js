'use client';

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import residenciesData from "../../public/residenciesData.json";import L from "leaflet";

// Custom Marker Icon
const customMarker = new L.Icon({
  iconUrl: "/pin.png", // Path relative to the public folder root
  iconSize: [24, 24],  // Adjust the size to fit your needs
  iconAnchor: [12, 41], // Anchor to align the icon
});


export default function Map() {
  return (
    <main className="flex h-screen">
      <MapContainer
        center={[51.0447, -114.0719]} 
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {residenciesData.map((item) => (
          <Marker position={[item.latitude, item.longitude]} icon={customMarker} key={item.id}>
            <Popup>
              <div>
                <img src={item.image} alt="" className="w-full h-32 object-cover" />
                <h3 className="text-xl font-bold text-[#001f3f]">{item.name}</h3>
                <h4 className="text-sm text-gray-500">${item.price}</h4>
              </div>
            </Popup>
          </Marker>
        ))}



        
       
      </MapContainer>
    </main>
  );
}
