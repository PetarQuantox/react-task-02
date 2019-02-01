import React from 'react';

export default function UserImage(props) {
	return (
		<div className="user-image">
			<img src={props.picture} alt="Neka slika" />
		</div>
	);
}
