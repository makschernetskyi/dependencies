import * as React from 'react'
import {useEffect} from 'react'
import { sendSortingReqestActionCreator } from '../Redux/selectListReducer'

interface Option{
	_name:string;
	_id:number;
	_dependencies: number[];
	name: string;
	id: number;
	dependencies: number[],
	addDependency: (dependency: number)=>void,
	addDependencies: (...dependencies: number[])=>void
}

interface State{
	options: Array<Option>;
	selectValues: Array<number>;
	ordered: Array<number>
}


interface Props {
	state: State;
	dispatch: Function;
}

export const SortedDependencies:React.FC<Props> = ({state,dispatch}) => {

	useEffect(() => {
		sendSortingReqestActionCreator(dispatch, state.selectValues, state.options);
	}, [])

	return (
		<div>
			{state?.ordered.map((index:number) => <div key={index}>{state.options[index].name + ''}<br/></div>)}
		</div>
	)
}