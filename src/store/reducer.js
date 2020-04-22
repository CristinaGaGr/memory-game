import { getRandomCards } from '../constants/cards';

const initialState = {
	cards: getRandomCards()
};


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
};