import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
import Product from './components/Products/Product';
function App() {
	return (
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
	);
}

export default App;
