export const cards = [
	{
		id: 1,
		value: 1,
		img: '',
		paired: false
	},
	{
		id: 2,
		value: 1,
		img: '',
		paired: false
	},
	{
		id: 3,
		value: 2,
		img: '',
		paired: false
	},
	{
		id: 4,
		value: 2,
		img: '',
		paired: false
	},
	{
		id: 5,
		value: 3,
		img: '',
		paired: false
	},
	{
		id: 6,
		value: 3,
		img: '',
		paired: false
	},
	{
		id: 7,
		value: 4,
		img: '',
		paired: false
	},
	{
		id: 8,
		value: 4,
		img: '',
		paired: false
	},
	{
		id: 9,
		value: 5,
		img: '',
		paired: false
	},
	{
		id: 10,
		value: 5,
		img: '',
		paired: false
	},
	{
		id: 11,
		value: 6,
		img: '',
		paired: false
	},
	{
		id: 12,
		value: 6,
		img: '',
		paired: false
	}
];


export const randomize = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};


export const getRandomCards = () => randomize(cards);