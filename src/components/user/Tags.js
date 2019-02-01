import React from 'react';

export default function Tags(props) {
	return (
		<div className="tags">
			{props.tags.map(tag => (
				<span key={tag} className="tag">
					#{tag}
				</span>
			))}
		</div>
	);
}
