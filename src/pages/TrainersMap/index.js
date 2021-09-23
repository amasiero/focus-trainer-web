import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from '../../assets/img/logo.svg';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './styles.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const mapIcon = Leaflet.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconAnchor: [12, 45],
	popupAnchor: [0, -45],
});

const TrainersMap = () => {
	const position = [-23.51298, -46.7321];
	return (
		<div id='page-map'>
			<aside>
				<img src={logo} alt='Logo simplificado' />
				<header>
					<h2>Escolha a academia mais próxima para você.</h2>
					<p>O treinador está te esperando :&#41;</p>
				</header>
			</aside>

			<MapContainer
				center={position}
				zoom={17}
				scrollWheelZoom={false}
				style={{ width: '100%', height: '100%' }}
			>
				<TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
				<Marker position={position} icon={mapIcon}>
					<Popup closeButton={false} minWidth={240} maxWidth={240}>
						Escola Germinare.
					</Popup>
				</Marker>
			</MapContainer>

			<Link to='' className='create-trainer'>
				<FiPlus size={32} color='#864400' />
			</Link>
		</div>
	);
};

export default TrainersMap;
