import { set } from 'lodash';
import { useState } from 'react';
//  otp-input 2.4.0
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';

const InputOTP = (props) => {
	const [otp, setOtp] = useState('');
	const handleChange = (otp) => {
		setOtp(otp);
		props.setUserOTPParent(otp); //  child send input otp to parent
	};

	// call parent compoent to execute
	const handleConfirm = () => {
		props.handleSubmitOTP();
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
				<CountDown setDisableBtn={props.setDisableBtn} />
			</div>
			<div className='action'>
				<button className='clear'>Clear</button>
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
