import './Product.scss';
import 'react-image-lightbox/style.css';
//import image
import snicker1 from './../../assest/images/snicker1.jpg';
import snicker2 from './../../assest/images/snicker2.jpg';
import snicker4 from './../../assest/images/snicker4.jpg';
import snicker5 from './../../assest/images/snicker5.jpg';
import snicker6 from './../../assest/images/snicker6.jpg';
import { useState } from 'react';

import Lightbox from 'react-image-lightbox';

// all images
const images = [snicker1, snicker2, snicker4, snicker5, snicker6];

const Product = () => {
	// change Image when OnClick in imag-down
	const [currentUpImg, setCurrentUpImg] = useState(snicker1);

	// Status show/hide Lightbox and Onclick for img-up.
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	const handleClickPreviewImg = () => {
		let index = images.findIndex((item) => item === currentUpImg);
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<div>
			<div className='product-container'>
				<div className='content-left'>
					<div className='img-up'>
						<img src={currentUpImg} onClick={() => handleClickPreviewImg()} />
					</div>
					<div className='img-down'>
						<div className='img-small'>
							<img
								src={snicker6}
								alt=''
								onClick={() => setCurrentUpImg(snicker6)}
								className={currentUpImg === snicker6 ? 'active' : ''}
							/>
						</div>
						<div className='img-small'>
							<img
								src={snicker2}
								alt=''
								onClick={() => setCurrentUpImg(snicker2)}
								className={currentUpImg === snicker2 ? 'active' : ''}
							/>
						</div>
						<div className='img-small'>
							<img
								src={snicker4}
								alt=''
								onClick={() => setCurrentUpImg(snicker4)}
								className={currentUpImg === snicker4 ? 'active' : ''}
							/>
						</div>
						<div className='img-small'>
							<img
								src={snicker5}
								alt=''
								onClick={() => setCurrentUpImg(snicker5)}
								className={currentUpImg === snicker5 ? 'active' : ''}
							/>
						</div>
					</div>
				</div>
				<div className='content-right'>
					<div className='title'>
						Giày chạy bộ nam New Balance Cushioning - M880B12
					</div>
					<div className='price'>1.648.000 ₫</div>
					<div className='size'>Size: 30</div>
					<div className='action'>
						<label className='quantity'>Số lượng: </label>
						<input type='number' min={1} defaultValue={1} />
						<button className='buy'>Chọn mua</button>
					</div>
				</div>
			</div>

			{/* Libary - react-image-lightbox */}
			{isOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + images.length - 1) % images.length)
					}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + 1) % images.length)
					}
					// animationDisabled={true}
					animationDuration={300}
				/>
			)}
		</div>
	);
};

export default Product;
