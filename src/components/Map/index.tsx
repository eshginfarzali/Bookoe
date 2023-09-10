import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Location from "../../assets/location.png";

import { Icon, LatLngTuple } from "leaflet";



const customIcon = new Icon({
  iconUrl: Location,
  iconSize: [38, 38],
});

const markers = [
  {
    geocode: [51.05, -0.1250] as LatLngTuple,
    popUp: "Hello, London",
  },
  {
    geocode: [40.4093, 49.86] as LatLngTuple,
    popUp: "Hello, Baku",
  },
  {
    geocode: [37.0, -95.0] as LatLngTuple,
    popUp: "Branch 3",
  },
];

export function MapComponent() {
  
  return (
    <MapContainer center={[48.5793, 23.2671]} zoom={2.4}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
