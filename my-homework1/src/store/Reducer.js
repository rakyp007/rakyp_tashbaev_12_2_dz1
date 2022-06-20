import { types } from "../types"


const defaultState = {
	num: 5,
}



export const numderReducer = (state = defaultState, action) => {
	switch (action.type) {
		case  types.INCREMENT_NUMBER:
			return { ...state, num: state.num + 10 }
		default:
			return state
	}
}

export const incrementNumberAction = payload => ({ type: types.ADD_NUMBER })