import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<div className='topnav'>
				<NavLink exact={true} to='/'>
					Home
				</NavLink>
				<NavLink to='/product'>Product</NavLink>
				<NavLink to='/weather'>Weather App</NavLink>
				<NavLink to='/about'>About</NavLink>
			</div>
		</div>
	);
};

export default Nav;
