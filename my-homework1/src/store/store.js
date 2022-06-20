import { combineReducers, createStore } from 'redux'
import { numderReducer } from './Reducer'

const rootReducer = combineReducers({
	num: numderReducer,
})

export const store = createStore(rootReducer)