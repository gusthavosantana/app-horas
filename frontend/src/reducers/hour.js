import { ADD, REMOVE, UPDATE } from '../actions/actionTypes';

const INITIAL_STATE = {
    items: []
}

/**
 * Reducer responsável por manipular a alteração de estado do modelo Hour
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD:
            if (state.items.find(i => i.id === action.payload.id))
                return state
            return { items: [...state.items.filter(item => item.id !== action.payload.id), action.payload ] }
        case REMOVE:
            return { items: state.items.filter(item => item.id !== action.payload) }
        case UPDATE:
            const updatedItems = state.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
            return { items: updatedItems }
        default:
            return state
    }
}