import { useState } from 'react';
import GenerateOTP from './GenerateOTP';
import InputOTP from './inputOTP';
import './OTP.scss';

const OTP = () => {
	// 2 state nay se chuyen den 2 components duoi va nhan duoc setState.
	const [orgOTPParent, setOrgOTPParent] = useState('');
	const [userOTPParent, setUserOTPParent] = useState('');
	// Disable button when timer is 0
	const [isDisableBtn, setDisableBtn] = useState(false);

	// khi nhan duoc call tu child thi se execute => xu ly OTP
	const handleSubmitOTP = () => {
		// orgOTPParent or useOTPParent còn sử dụng để check OTP có empty ko ?
		if (!orgOTPParent) {
			alert('Please generate an OTP...');
			return;
		}

		if (!userOTPParent) {
			alert('Please enter an OTP...');
			return;
		}

		// + => string to integer
		if (+orgOTPParent === +userOTPParent) {
			alert('Corret OTP ^^');
		} else {
			alert('Wrong OTP !!');
		}
	};
	return (
		<div className='otp-parent-container'>
			<GenerateOTP setOrgOTPParent={setOrgOTPParent} />
			<InputOTP
				setUserOTPParent={setUserOTPParent}
				handleSubmitOTP={handleSubmitOTP}
				isDisableBtn={isDisableBtn} // for button onclick - Confirm
				setDisableBtn={setDisableBtn} // for CountDown.js
			/>
		</div>
	);
};

export default OTP;
