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
			'https://www.shutterstock.com/image-vector/fc-bayern-munich-icon-logo-600nw-2268233419.jpg',
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
