import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
const WeatherByLocation = () => {
	// woied = phai cung ten tham so
	const { woeid } = useParams();
	const [locationWeather, setLocationWeather] = useState({});

	const getWeatherByLocation = async () => {
		let response = await axios({
			method: 'post',
			url: 'http://localhost:8080/get-data-by-url',
			data: {
				url: `https://www.metaweather.com/api/location/${woeid}/`,
			},
		});
		if (response && response.data) {
			setLocationWeather(response.data);
		}
	};

	useEffect(() => {
		getWeatherByLocation();
	}, []);

	return <div>detail 1111</div>;
};

export default WeatherByLocation;
