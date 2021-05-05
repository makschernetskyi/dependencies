import * as React from 'react';
import { AddSelectFieldButton } from '../AddSelectFieldButton';
import { SelectList } from '../SelectList'

interface SelectList{
	options: Array<any>;
	amountOfSelects: number;
	selectValues: Array<number>;
}

interface State{
	selectList: SelectList;
}

interface Props{
	state: State;
	dispatch: Function;
}

export const App: React.FC<Props> = ({state, dispatch}) =>
	<div className="App">
		<SelectList state = {state.selectList} dispatch = {dispatch}/>
		<AddSelectFieldButton dispatch={dispatch}/>
	</div>
