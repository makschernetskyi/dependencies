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
	options: Array<Option>,
	amountOfSelects: number,
	selectValues: Array<number>
}

type State = {
	selectListState: SelectListState
}

type Store = {
	_state: State,
	_callSubscriber:() => void,
	getState: ()=>State,
	subscribe: (observer: Function) => void,
	dispatch: (action: {type: string}) => void
}

interface Action{
	type: string;
	data?: any;
}


export const store:Store={
	_state:{
		selectListState: {
			options: [
				new Option('React'),
				new Option('Redux'),
				new Option('Babel'),
				new Option('Sass')
			],
			amountOfSelects: 3,
			selectValues: [0,0,0]
		}
	},
	_callSubscriber(){},


	getState(){
		return this._state;
	},

	subscribe(observer: Function){
		this._callSubscriber = observer;
	},


	dispatch(action:Action){
		switch(action.type){
			case 'ADD-SELECT':
				if(this._state.selectListState.amountOfSelects < this._state.selectListState.options.length){
					this._state.selectListState.amountOfSelects+=1;
					this._state.selectListState.selectValues.push(0);
					this._callSubscriber(this.getState());
				}else{
					alert('Sorry, but you can\'t add more option selects than total options amount:(')
				}
				break;
			case 'UPDATE-SELECT-VALUE':
				this._state.selectListState.selectValues[action.data.selectId] = action.data.value;
				this._callSubscriber(this.getState());
			default:
				break;
		}
	}
}