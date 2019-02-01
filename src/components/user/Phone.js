import React from 'react';

export default function Phone(props) {
	return (
		<span className="contact__phone">
			<i className="fa fa-phone" /> : {props.phone}
		</span>
	);
}
