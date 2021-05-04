import * as React from 'react'


interface Option{
	name: string;
	id: number;
}

interface Props{
	amountOfSelects: number;
	options: Option[];
}


export const SelectList: React.FC<Props> = (props) => {

	const optionItems = (list: Option[]) => {
		return list.map(item=><option value={item.id} key={item.id}>{item.name}</option>)
	}

	const selectItems = (amount: number, options: Option[]) => {

		const selects:any[] = [];
		let i: number = 0;
		for(let i: number = 0; i < amount; i++){
			selects.push(<select key={i}>{optionItems(options)}</select>)
		}
		return selects;
	}

	return (
		<div className="SelectList">
			{...selectItems(props.amountOfSelects, props.options)}
		</div>
	)

}