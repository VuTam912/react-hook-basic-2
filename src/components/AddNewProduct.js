import { useState } from 'react';

const AddNewProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	const [isShowDetail, setIsShowDetail] = useState(true);

	const handleClickBtn = () => {
		let object = {
			name: name,
			price: price,
			size: size,
			color: color,
		};

		console.log('>>> check data: ', object);
	};

	const handleHideShow = (status) => {
		// setIsShowDetail(!isShowDetail); //toggle true -> false
		setIsShowDetail(status);
	};

	return (
		<div>
			<fieldset>
				<legend>Add a new Product</legend>
				<div className='input-product'>
					<label>Name: </label>
					<input
						type='text'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div className='input-product'>
					<label>Price: </label>
					<input
						type='text'
						value={price}
						onChange={(event) => setPrice(event.target.value)}
					/>
				</div>
				<div className='input-product'>
					<label>Size: </label>
					<input
						type='text'
						value={size}
						onChange={(event) => setSize(event.target.value)}
					/>
				</div>
				<div className='input-product'>
					<label>Color: </label>
					<input
						type='text'
						value={color}
						onChange={(event) => setColor(event.target.value)}
					/>
				</div>
				<div>
					<button onClick={() => handleClickBtn()}>+Add new</button>
				</div>
			</fieldset>
			{/* neu la true => show <div>..</div> */}
			{isShowDetail === true && (
				<div
					onClick={() => {
						handleHideShow(false);
					}}
				>
					Hide this form
				</div>
			)}
			{isShowDetail === false && (
				<div
					onClick={() => {
						handleHideShow(true);
					}}
				>
					Show this form
				</div>
			)}
		</div>
	);
};

export default AddNewProduct;
