import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddNewProduct from './components/AddNewProduct';
function App() {
	return (
		<div className='App'>
			<header className='App-header content-left'>
				<div style={{ textAlign: 'center' }}>
					<img src={logo} className='App-logo' alt='logo' />
				</div>
				<p>Hello world with React Hook</p>
				<Home />
			</header>
			<div className='content-right'>
				<AddNewProduct />
			</div>
		</div>
	);
}

export default App;
