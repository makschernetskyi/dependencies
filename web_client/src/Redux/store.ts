import * as Redux from 'redux';

import {selectListReducer} from './selectListReducer'

const reducers = Redux.combineReducers({
	selectList: selectListReducer
})


export const store = Redux.createStore(reducers);