import React from 'react';

export default function Registered(props) {
	return (
		<div>
			{props.isRegistered ? (
				<span className="yes">SUBSCRIBED</span>
			) : (
				<span className="no">UNSUBSCRIBED</span>
			)}
		</div>
	);
}
