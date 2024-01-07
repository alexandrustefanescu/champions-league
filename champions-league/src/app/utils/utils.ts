export type Team = {
	name: string
	logoURL: string
}

enum STATE {
	INITIAL,
	LOADING,
	FINISHED,
}

const teamsList = [
	{
		name: 'Real Madrid',
		logoURL: 'https://cdn.worldvectorlogo.com/logos/real-madrid-c-f.svg',
	},
	{
		name: 'Manchester City',
		logoURL:
			'https://logowik.com/content/uploads/images/901_manchestercityfc.jpg',
	},
	{
		name: 'Bayern München',
		logoURL:
			'https://images.wall-art.de/q:92/rs:fit:1560:/_img/out/pictures/master/product/2/wandtattoo-fcb-logo-mit-sternen-2021-einzel.jpg',
	},
	{
		name: 'Barcelona',
		logoURL:
			'https://www.freevector.com/uploads/vector/preview/13478/FreeVector-FC-Barcelona-2002.jpg',
	},
	{
		name: 'Liverpool',
		logoURL: 'https://logowik.com/content/uploads/images/526_liverpoolfc.jpg',
	},
	{
		name: 'PSG',
		logoURL:
			'https://logohistory.net/wp-content/uploads/2023/05/PSG-Logo.jpg  ',
	},
]

export { STATE, teamsList }
