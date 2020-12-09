import todos from '../../api/todos';
import { ToDo } from './types'

export const fetchTodos = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    const response = await todos.get('/todos');

    dispatch({ type: 'FETCH_TODOS', payload: response.data });
};

export const createTodo =( todo: ToDo) => async (dispatch: (arg0: { type: string; payload: any; }) => void, getState: () => { (): any; new(): any; todoList: { (): any; new(): any; length: number; }; }) => {
    const id = getState().todoList.length + 1;
    const response = await todos.post('/todos', {...todo, id });

    dispatch({ type: 'ADD_TODO', payload: response.data });
    window.location.href = '/';
};