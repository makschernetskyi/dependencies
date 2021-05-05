import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {store} from './Redux/store'

import {App} from './App'




const rerenderEntireTree = (state:any) =>{
	ReactDOM.render(<App state = {state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'))
}
rerenderEntireTree(store.getState());

store.subscribe(()=>{
	const state = store.getState();
	rerenderEntireTree(state);
});
