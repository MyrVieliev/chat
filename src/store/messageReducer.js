const defaultState = {
	messages: [],
};

const ADD_MESSAGE = 'ADD_MESSAGE';
const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const messageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return { ...state, messages: [...state.messages, action.payload] };
		case REMOVE_MESSAGE:
			return {
				...state,
				messages: state.messages.filter(
					(message) => message.id !== action.payload
				),
			};
		default:
			return state;
	}
};

export const addMessageAction = (payload) => ({
	type: ADD_MESSAGE,
	payload,
});

export const removeMessageAction = (payload) => ({
	type: REMOVE_MESSAGE,
	payload,
});
