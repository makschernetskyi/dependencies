import * as React from 'react';
import { AddSelectFieldButton } from '../AddSelectFieldButton';
import { SelectList } from '../SelectList'

interface SelectListState{
	options: any[];
	amountOfSelects: number;
}

interface Props{
	selectListState: SelectListState
}

export const App: React.FC<Props> = ({selectListState}) =>
	<div className="App">
		<SelectList amountOfSelects = {selectListState.amountOfSelects} options = {selectListState.options} />
		<AddSelectFieldButton/>
	</div>
