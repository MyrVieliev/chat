import React from 'react';
import './myButton.css';

const Mybutton = ({ children, ...props }) => {
	return (
		<button {...props} className={'myButton'}>
			{children}
		</button>
	);
};

export default Mybutton;
