import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Location from'../../assets/location.png'

import { Icon, divIcon, point } from "leaflet";

// create custom icon
const customIcon = new Icon({
  iconUrl: Location,
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const markers = [
  {
    geocode: [40.4093, 49,86],
    popUp: "Hello, Baku"
  },
  {
    geocode:[51.05, -0.1250],
    popUp: "Hello, London"
  },
  {
    geocode: [37.000, -95.00],
    popUp: "Branch 3"
  }
];

export function MapComponent() {
  return (
    <MapContainer center={[48.5793, 23.2671]} zoom={2.4}>
 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}

     
      </MarkerClusterGroup>
    </MapContainer>
  );
}
