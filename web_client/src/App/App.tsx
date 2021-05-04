import * as React from 'react';
import { AddSelectFieldButton } from '../AddSelectFieldButton';
import { SelectList } from '../SelectList'

interface SelectListState{
	options: Array<any>;
	amountOfSelects: number;
	selectValues: Array<number>;
}

interface State{
	selectListState: SelectListState;
}

interface Props{
	state: State;
	dispatch: Function;
}

export const App: React.FC<Props> = ({state, dispatch}) =>
	<div className="App">
		<SelectList state = {state.selectListState} dispatch = {dispatch}/>
		<AddSelectFieldButton dispatch={dispatch}/>
	</div>
