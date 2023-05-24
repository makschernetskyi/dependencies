import axios from 'axios'
import * as qs from 'qs'

const ADD_SELECT = 'ADD-SELECT';
const UPDATE_SELECT_VALUE = 'UPDATE-SELECT-VALUE'
const SEND_SORTING_REQUEST = 'SEND-SORTING-REQUEST'


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

const makeAPIrequest  = async (selectValues:number[], options:Option[]) =>{
	let ordered:number[] = []

	await axios.post(
				`/api/v0/orderDependenciesList`,
				{
					selected: selectValues,
					allDependencies: options
				})
				.then(response=>{
					ordered = response.data.ordered
				})
				.catch(err=>{
					console.error(err)
				})
	return ordered;
}


export const sendSortingReqestActionCreator = (dispatch:Function, selectValues:number[], options:Option[]) =>{


	makeAPIrequest(selectValues, options).then(ordered=>{
		const action:Action = {
			type: SEND_SORTING_REQUEST,
			data: {
				ordered: ordered
			}
		}
		dispatch(action);
	})
}


class Option{
	_name:string;
	_id:number;
	_dependencies: Array<number>;
	static _lastId: number;

	constructor(name: string, ...dependencies:number[]){
		this._name = name;
		this._id = (Option.lastId != null)?Option.lastId+1:0;
		Option.lastId = this._id;
		if(dependencies.length){
			this._dependencies = dependencies;
		}else{
			this._dependencies = [];
		}

	}
	get name(){
		return this._name;
	}
	get id(){
		return this._id;
	}
	get dependencies(){
		return this._dependencies
	}

	set dependencies(dependencies:number[]){
		this._dependencies = dependencies
	}

	addDependency(dependency:number){
		this._dependencies.push(dependency)
	}

	addDependencies(...dependencies:number[]){
		dependencies.forEach(dep=>{
			this._dependencies.push(dep);
		})
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
	selectValues: Array<number>,
	ordered: Array<number>
}

const initialState: State = {
	options: [
		new Option('water'),
		new Option('Milk'),
		new Option('Cheese', 1),
		new Option('pork'),
		new Option('beef'),
		new Option('sausage', 3,4,13),
		new Option('wheat'),
		new Option('bread', 0, 24),
		new Option('sandwitch', 2,5,7),
		new Option('pasta', 6, 0),
		new Option('bacon', 3),
		new Option('egg'),
		new Option('salt'),
		new Option('pepper'),
		new Option('Carbonara', 9, 10, 11, 12, 13),
		new Option('basil'),
		new Option('pasta with meatballs', 3,4,9,15),
		new Option('fried egg', 11),
		new Option('sugar'),
		new Option('flour', 6),
		new Option('apples'),
		new Option('apple jam', 20, 18),
		new Option('yeast dough', 0, 19, 11, 12, 18, 23),
		new Option('yeast'),
		new Option('bread dough', 0, 6),
		new Option('apple pie', 21, 22),

	],
	amountOfSelects: 0,
	selectValues: [],
	ordered: []
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
			state.selectValues[action.data.selectId] = parseInt(action.data.value);
			return state;
		case SEND_SORTING_REQUEST:
			state.ordered = action.data.ordered;
			return state;
		default:
			return state;
	}

}