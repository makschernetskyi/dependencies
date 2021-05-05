import * as React from 'react'

import { updateSelectValueActionCreator } from '../Redux/selectListReducer'


interface Option{
	name: string;
	id: number;
}

interface State{
	amountOfSelects: number;
	options: Array<Option>;
	selectValues: Array<number>
}

interface Props{
	state: State;
	dispatch: Function;
}

interface Action{
	type: string;
	data?: any;
}




export const SelectList: React.FC<Props> = ({state, dispatch}) => {

	const Refs: React.RefObject<any>[] = [];

	const onSelectChange = (id:number) =>{
		const value: number = Refs[id].current.value;
		const action:Action = updateSelectValueActionCreator(id, value)
		dispatch(action);
	}


	const optionItems = (list: Option[]) => {
		return list.map(item=><option value={item.id} key={item.id}>{item.name}</option>)
	}

	const selectItems = (amount: number, options: Option[]) => {

		const selects:any[] = [];
		let i: number = 0;
		for(let i: number = 0; i < amount; i++){
			Refs.push(React.createRef())
			selects.push(<select key={i} ref={Refs[i]} value={state.selectValues[i]} onChange={()=>{onSelectChange(i)}}>{optionItems(options)}</select>)
		}
		return selects;
	}

	return (
		<div className="SelectList">
			{...selectItems(state.amountOfSelects, state.options)}
		</div>
	)

}