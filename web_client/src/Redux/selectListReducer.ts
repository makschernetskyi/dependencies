const ADD_SELECT = 'ADD-SELECT';
const UPDATE_SELECT_VALUE = 'UPDATE-SELECT-VALUE'


type Action = {
	type: string,
	data?: any
}

export const addSelectActionCreator = () =>{
	const action:Action = {
		type: ADD_SELECT
	}
	return action;
}



export const updateSelectValueActionCreator = (id:number, value:number)=>{
	const action:Action = {
		type: UPDATE_SELECT_VALUE,
		data:{
			selectId: id,
			value: value
		}
	}
	return action;
}


class Option{
	_name:string;
	_id:number;
	static _lastId: number;

	constructor(name: string){
		this._name = name;
		this._id = (Option.lastId != null)?Option.lastId+1:0;
		Option.lastId = this._id;
	}
	get name(){
		return this._name;
	}
	get id(){
		return this._id;
	}
	static set lastId(lastId: number){
		Option._lastId = lastId;
	}
	static get lastId(){
		return Option._lastId;
	}
}

type State = {
	options: Array<Option>,
	amountOfSelects: number,
	selectValues: Array<number>
}

const initialState: State = {
	options: [
		new Option('React'),
		new Option('Redux'),
		new Option('Babel'),
		new Option('Sass')
	],
	amountOfSelects: 3,
	selectValues: [0,0,0]
}



export const selectListReducer = (state: State = initialState, action:{type:string, data?:any}) =>{
	switch(action.type){
		case ADD_SELECT:
			if(state.amountOfSelects < state.options.length){
				state.amountOfSelects+=1;
				state.selectValues.push(0);
			}else{
				alert('Sorry, but you can\'t add more option selects than total options amount:(')
			}
			return state;
		case UPDATE_SELECT_VALUE:
			state.selectValues[action.data.selectId] = action.data.value;
			return state;
		default:
			return state;
	}

}