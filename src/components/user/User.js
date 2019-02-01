import React from 'react';
import UserImage from './UserImage';
import FullName from './FullName';
import About from './About';
import Email from './Email';
import Phone from './Phone';
import Tags from './Tags';
import Registered from './Registered';

export default function User(props) {
	const { name, picture, about, email, phone, tags, isRegistered } = props.user;
	return (
		<div className="user-profile">
			<UserImage picture={picture} />
			<FullName fullname={name} />
			<About about={about} />
			<div className="contact">
				<Email email={email} />
				<Phone phone={phone} />
			</div>
			<Tags tags={tags} />
			<Registered isRegistered={isRegistered} />
		</div>
	);
}
