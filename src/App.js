import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Weather from './components/Weather/Weather';
import OTP from './components/OTP/OTP';
import WeatherByLocation from './components/Weather/WeatherByLocation';

function App() {
	return (
		<Router>
			<Nav />
			{/* Xu ly điều hướng trang */}
			<Switch>
				<Route path='/' exact={true}>
					<div className='App'>
						<header className='App-header content-left'>
							<div style={{ textAlign: 'center' }}>
								<img src={logo} className='App-logo' alt='logo' />
							</div>
							<p>
								<span>RYO</span> with React Hook
							</p>
							<Home />
						</header>
						<div className='content-right'>
							<AddNewProduct />
							<hr />
							<Product />
						</div>
					</div>
				</Route>
				<Route path='/product'>
					<Product />
				</Route>
				{/* exact ap dụng cho với đương link URL cần có tham số - weather cha */}
				<Route path='/weather' exact>
					<Weather />
				</Route>
				<Route path='/about'>
					<div>About</div>
				</Route>
				<Route path='/otp'>
					<OTP />
				</Route>
				{/* weather con */}
				<Route path='/weather/detail/:woeid'>
					<WeatherByLocation />
				</Route>
				<Route path='*'>
					<div>
						<h2>404 Not Found</h2>
					</div>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
