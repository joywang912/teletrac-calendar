import { combineReducers } from 'redux';
import todoReducer from './todo/reducers';
import dateSelectedReducer from './dateSelected/reducers';

const rootReducer = combineReducers({
    todoList: todoReducer,
    dateSelected: dateSelectedReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;