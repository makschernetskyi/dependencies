import * as React from 'react';

interface Props{
	dispatch: Function;
}

type Action = {
	type: string
}

const addSelectActionCreator = () =>{
	const action:Action = {
		type: 'ADD-SELECT'
	}
	return action;
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

