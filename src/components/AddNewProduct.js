import { useState } from 'react';

const AddNewProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [size, setSize] = useState(0);
	const [color, setColor] = useState('');

	const [isShowDetail, setIsShowDetail] = useState(false);

	const handleClickBtn = () => {
		let object = {
			name: name,
			price: price,
			size: size,
			color: color,
		};
		// add localStorage
		// localStorage.setItem('productList', JSON.stringify(object));
		// if there is a key in localStorage => save a new product in localStorage
		let productlist = localStorage.getItem('productList');
		if (productlist) {
			let arr = JSON.parse(productlist);
			arr.push(object);
			localStorage.setItem('productList', JSON.stringify(arr));
		} else {
			// note : [] => add object to array
			localStorage.setItem('productList', JSON.stringify([object]));
		}
		console.log('>>> check data: ', JSON.parse(productlist));

		// set all input = "" or 0
		setName('');
		setPrice(0);
		setSize(0);
		setColor('');
	};

	const handleHideShow = (status) => {
		// setIsShowDetail(!isShowDetail); //toggle true -> false
		setIsShowDetail(status);
	};

	return (
		<div>
			<fieldset style={{ display: isShowDetail ? 'block' : 'none' }}>
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
			{isShowDetail === true ? (
				<button
					onClick={() => handleHideShow(false)}
					style={{ cursor: 'pointer' }}
				>
					Hide this form
				</button>
			) : (
				<button
					onClick={() => handleHideShow(true)}
					style={{ cursor: 'pointer' }}
				>
					Show this form
				</button>
			)}
			<div>
				{/* show all data of localStorage  */}
				List products:
				<div>{localStorage.getItem('productList')}</div>
			</div>
		</div>
	);
};

export default AddNewProduct;
