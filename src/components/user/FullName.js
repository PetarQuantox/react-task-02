import React from 'react';

export default function FullName(props) {
	const { first, last } = props.fullname;
	return (
		<h3 className="user-fullname">
			{first} {last}
		</h3>
	);
}
