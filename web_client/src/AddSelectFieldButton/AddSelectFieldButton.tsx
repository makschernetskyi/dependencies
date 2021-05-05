import * as React from 'react';

import { addSelectActionCreator } from '../Redux/selectListReducer'

interface Props{
	dispatch: Function;
}

interface Action{
	type: string;
}



export const AddSelectFieldButton: React.FC<Props> = ({dispatch}) =>{

	const addSelect = () => {
		const action:Action = addSelectActionCreator();
		dispatch(action);
	}

	return(
		<button onClick = {addSelect}>
			add dependency
		</button>
	)
}

