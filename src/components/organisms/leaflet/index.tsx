import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Tag } from "../../atoms/tag";

export const Leaflet = (props: any) => {
  const { data, isLoading } = props;
  return (
    <div className="h-96 w-4/5">
      <MapContainer
        className="h-96"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!isLoading && data.map((item: any, idx: any) => {
          const { countryInfo, deaths, recovered, active } = item;
          return (
            <Marker key={idx} position={[countryInfo.lat, countryInfo.long]}>
              <Popup>
                <Tag text={`Active Cases: ${active}`} /> <br />
                <Tag text={`Recovered Cases: ${recovered}`} /> <br />
                <Tag text={`Deaths: ${deaths}`} />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
