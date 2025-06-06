import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './map.scss'
import 'leaflet/dist/leaflet.css' // To prevent any map visual error
import Pin from '../pin/Pin'

const position = [52.4797, -1.90269]

function Map({ items }) {
    return (
        <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id} />
            ))}
        </MapContainer>
    )
}

export default Map