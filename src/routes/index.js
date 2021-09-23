import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TrainersMap from '../pages/TrainersMap';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/app' component={TrainersMap} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
