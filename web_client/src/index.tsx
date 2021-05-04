import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './App'

import {store} from './Redux/state'


// state.selectListState.options.push(new Option('bread'))
// state.selectListState.options.push(new Option('sandwich'))
// state.selectListState.options.push(new Option('babka'))
// state.selectListState.options.push(new Option('lasagne'))
// state.selectListState.options.push(new Option('milk'))

const rerenderEntireTree = (state:any) =>{
	ReactDOM.render(<App state = {state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'))
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
