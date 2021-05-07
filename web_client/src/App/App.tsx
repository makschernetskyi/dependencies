import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { AddSelectFieldButton } from '../AddSelectFieldButton';
import { SelectList } from '../SelectList';
import { SortButton } from '../SortButton'
import { SortedDependencies } from '../SortedDependencies/'


interface SelectList{
	options: Array<any>;
	amountOfSelects: number;
	selectValues: Array<number>;
	ordered: Array<number>;
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
	<Router>
		<Switch>

			<Route exact path='/'>
				<SelectList state = {state.selectList} dispatch = {dispatch}/>
				<AddSelectFieldButton dispatch={dispatch}/>
				<SortButton/>
			</Route>
			<Route exact path='/sorted'>
				<SortedDependencies state = {state.selectList} dispatch = {dispatch}/>
			</Route>

		</Switch>


	</Router>
	</div>
