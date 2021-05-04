import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './App'


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

type SelectListState = {
	options: Option[],
	amountOfSelects: number
}

type State = {
	selectListState: SelectListState
}

const state:State = {
	selectListState: {
		options: [],
		amountOfSelects: 3
	}
}
state.selectListState.options.push(new Option('bread'))
state.selectListState.options.push(new Option('sandwich'))
state.selectListState.options.push(new Option('babka'))
state.selectListState.options.push(new Option('lasagne'))
state.selectListState.options.push(new Option('milk'))

const rerenderEntireTree = () =>{
	ReactDOM.render(<App selectListState = {state.selectListState}/>, document.getElementById('root'))
}
rerenderEntireTree();
