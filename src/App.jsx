import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#e74878').all(10));

	const onFormSubmit = e => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(10);
			setList(colors);
			setError(false);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className='container'>
				<h3>Color generator</h3>
				<form onSubmit={onFormSubmit}>
					<input
						className={`${error ? 'error' : null}`}
						type='text'
						value={color}
						onChange={e => setColor(e.target.value)}
						placeholder='#e74878'
					/>
					<button className='btn'>Generate</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					return <SingleColor {...color} index={index} key={index} />;
				})}
			</section>
		</>
	);
}

export default App;
