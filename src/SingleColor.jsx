import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
	const [alert, setAlert] = useState(false);
	const rgbString = rgb.join(',');
	const hex = rgbToHex(...rgb);

	useEffect(() => {
		const alertTimeout = setTimeout(() => {
			setAlert(false);
		}, 3000);

		return () => clearTimeout(alertTimeout);
	}, [alert]);

	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${rgbString})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hex);
			}}>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hex}</p>
			{alert && (
				<p className={`alert ${index > 10 && 'color-light'}`}>
					copied to the clipboard
				</p>
			)}
		</article>
	);
};

export default SingleColor;
