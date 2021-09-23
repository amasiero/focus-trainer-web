import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logo from '../../assets/img/logo.svg';
import './styles.css';

const Home = () => {
	return (
		<div id='page-home'>
			<div className='container'>
				<img src={logo} alt='logo focus trainer' />
				<main>
					<h1>Garanta seu treino em qualquer lugar da cidade.</h1>
					<p>Os melhores treinadores para um super atleta.</p>
				</main>
				<Link to='/app' className='enter-app'>
					<FiArrowRight size={32} color='#864400' />
				</Link>
			</div>
		</div>
	);
};

export default Home;
