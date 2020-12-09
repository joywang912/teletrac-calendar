import { ToDo } from './types';

const todoReducer = (state: Array<ToDo> = [], action: { type: string, payload: any; }) => {
    switch (action.type) {
        case "FETCH_TODOS":
            return [...action.payload];
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'EDIT_TODO':
            const newState = state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            });
            return newState;
        default:
            return state;
    }
};

export default todoReducer;