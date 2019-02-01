import React, { Component } from 'react';
import Title from './components/Title';
import User from './components/user/User';

class App extends Component {
	state = {
		users: [
			{
				name: {
					first: 'Sue',
					last: 'Camacho'
				},
				about:
					'Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillu aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velitea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.',
				picture: 'https://picsum.photos/200/300/?random',
				isRegistered: false,
				email: 'sue.camacho@newcube.org',
				phone: '+1 (955) 543-3667',
				tags: ['irure', 'exercitation', 'non', 'excepteur', 'enim']
			},
			{
				name: {
					first: 'Zac',
					last: 'Zacovic'
				},
				about:
					'Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillu aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velitea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.',
				picture: 'https://picsum.photos/g/200/300',
				isRegistered: true,
				email: 'zac.zacovic@newcube.org',
				phone: '+1 (955) 512-3123',
				tags: ['irure', 'non', 'excepteur', 'enim']
			},
			{
				name: { first: 'Ludi', last: 'Milojko' },
				about:
					'Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velitea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.',
				picture: 'https://picsum.photos/200/300/?random',
				isRegistered: false,
				email: 'ludi.milojko@newcube.org',
				phone: '+1 (955) 123-45678',
				tags: ['irure', 'exercitation', 'excepteur']
			},
			{
				name: {
					first: 'Sundjer',
					last: 'Boba'
				},
				about:
					'Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velitea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.',
				picture: 'https://picsum.photos/200/300/?random',
				isRegistered: false,
				email: 'sundjer.boba@newcube.org',
				phone: '+1 (955) 123-987654',
				tags: ['exercitation', 'non', 'excepteur', 'enim']
			},
			{
				name: {
					first: 'Master',
					last: 'Yoda'
				},
				about:
					'Reprehenderit tempor magna ea non exercitation ea aliqua labore. Et laboris officia irure exercitation esse nostrud ullamco dolore ullamco. Pariatur aute nulla officia tempor cillum aliquip et mollit. Esse cillum deserunt laboris quis adipisicing minim fugiat ullamco cupidatat velitea qui. Nulla minim duis veniam occaecat laboris ea cillum. Amet officia est exercitation laboris irure nulla id reprehenderit non velit.',
				picture: 'https://picsum.photos/200/300/?random',
				isRegistered: true,
				email: 'master.yoda@newcube.org',
				phone: '+1 (955) 543-3667',
				tags: ['irure', 'exercitation', 'excepteur', 'enim']
			}
		]
	};

	render() {
		return (
			<>
				<Title />
				<div className="container">
					{this.state.users.map(user => {
						return <User user={user} key={user.email} />;
					})}
				</div>
			</>
		);
	}
}

export default App;
