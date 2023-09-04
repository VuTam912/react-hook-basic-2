import React, { useEffect, useState } from 'react';
// Create countdown 1:00
// // option:1 - funtion - use Hook
const CountDown = (props) => {
	const [count, setCount] = useState(10);

	// useEffect cho phép chạy nhiều lần - Allows multiple executions
	useEffect(() => {
		if (count === 0) {
			props.setDisableBtn(true);
			return;
		}

		const timer = setInterval(() => {
			setCount(count - 1);
		}, 1000); // is Delay

		return () => {
			// clear đi để timer ko được sinh ra nua. count sẽ được cap nhap tu giảm đi
			clearInterval(timer);
		};
	}, [count]); // nếu giá trị count thay đổi thì effect sẽ kích hoat effect nhiều lần. [] để trống thì chỉ chạy effect 1 lần

	return <div>{count}</div>;
};

export default CountDown;

// option 2: - class - use componentDidUpdate
// class CountDown extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 10,
// 		};
// 	}

// 	// when render done and Mount will execute
// 	componentDidMount() {
// 		console.log('run didmount');
// 		// this.timer là biến có sẵn trong class đã extend component
// 		this.timer = setInterval(() => {
// 			let currentCount = this.state.count;
// 			this.setState({
// 				count: currentCount - 1,
// 			});
// 		}, 1000);
// 	}

// 	// update - prevState -> theo dõi 2 tham số props va state ở quá khứ đã execute.
// 	componentDidUpdate(prevProps, prevState) {
// 		console.log(
// 			'run didupdate',
// 			'currentState =',
// 			this.state,
// 			'prevState =',
// 			prevState
// 		);
// 		if (this.state.count !== prevState.count && this.state.count === 0) {
// 			clearInterval(this.timer);
// 		}
// 	}

// 	render() {
// 		return <div>{this.state.count}</div>;
// 	}
// }

// export default CountDown;
