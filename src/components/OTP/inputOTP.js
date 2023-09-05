import { set } from 'lodash';
import { useState } from 'react';
//  otp-input 2.4.0
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';
import { useRef } from 'react';

const InputOTP = (props) => {
	// cho luu gia tri va su dụng ở cac component nào đó cũng có thể truy cập
	const childRef = useRef();
	const [otp, setOtp] = useState('');
	const handleChange = (otp) => {
		setOtp(otp);
		props.setUserOTPParent(otp); //  child send input otp to parent
	};

	// call parent compoent to execute
	const handleConfirm = () => {
		props.handleSubmitOTP();
	};

	const handleClearBtn = () => {
		childRef.current.restTimer();
		console.log('>>> check ref: ', childRef);
	};
	return (
		<div className='input-otp-container'>
			<div className='title'>Enter verification code</div>
			<OtpInput
				value={otp}
				onChange={handleChange}
				numInputs={6}
				separator={<span>-</span>}
				inputStyle={'input-customize'}
			/>
			<div className='timer'>
				{/* <CountDown setDisableBtn={props.setDisableBtn} /> */}
				{/* Animation  */}
				<CountDownAnimation
					setDisableBtn={props.setDisableBtn}
					ref={childRef} // add forwardRef in child component
				/>
			</div>
			<div className='action'>
				<button className='clear' onClick={() => handleClearBtn()}>
					Clear
				</button>
				<button
					className='confirm'
					disabled={props.isDisableBtn}
					onClick={() => handleConfirm()}
				>
					Confirm
				</button>
			</div>
		</div>
	);
};

export default InputOTP;
