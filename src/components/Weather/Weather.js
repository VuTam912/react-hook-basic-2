import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

// Fucntion
const Weather = () => {
	const [title, setTitle] = useState('');

	// simliar componentWillMount
	useEffect(async () => {
		console.log('>> 2 run use effect');
		let response = await axios({
			method: 'post',
			url: 'http://localhost:8080/get-data-by-url',
			data: { url: 'https://www.metaweather.com/api/location/1236594' },
		});
		setTimeout(() => {
			setTitle(response.data.title);
		}, 3000);
	}, []);

	console.log('>> 1 run render');
	return <div> Inside weather component: title = {title}</div>;
};

export default Weather;

/* Class : */
// class Weather extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			title: '',
// 		};
// 	}
// 	// chạy npm start: project backend - metaweather (http://localhost:8080)
// 	// va MYSQL
// 	async componentWillMount() {
// 		let response = await axios({
// 			method: 'post',
// 			url: 'http://localhost:8080/get-data-by-url',
// 			data: { url: 'https://www.metaweather.com/api/location/1236594' },
// 		});
// 		setTimeout(() => {
// 			this.setState({
// 				title: response.data.title,
// 			});
// 		}, 3000);

// 		console.log('Check weather: ', response.data);
// 	}

// 	render() {
// 		return <div> Inside weather component : title = {this.state.title}</div>;
// 	}
// }

// export default Weather;
