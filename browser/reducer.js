import React from 'react';
import {combineReducers} from 'redux';
import {SET_INTERVAL} from './actions';



const timeReducer = function(state="", action){
	switch(action.type){
		case SET_INTERVAL: 
			return action.payload;
		default: return state;
	}
}

// const singlePuppyReducer = function(state={}, action){
// 	switch(action.type){
// 		case RECEIVE_SINGLE_PUPPY: 
// 			return action.payload;
// 		default: return state;
// 	}
// }

const rootReducer = combineReducers({
	interval: timeReducer
})

export default rootReducer;

