import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
import Nav from './components/Navigation/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
				<Route path='/weather'>
					<div>Weather App</div>
				</Route>
				<Route path='/about'>
					<div>About</div>
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
