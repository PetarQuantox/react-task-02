import React from 'react';

export default function Email(props) {
	return (
		<span className="contact__email">
			<i className="fa fa-envelope" /> : {props.email}
		</span>
	);
}
