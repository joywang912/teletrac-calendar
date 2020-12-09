import { ToDo } from './types'

const todoReducer = (state: Array<ToDo> = [], action: {type: string, payload: any}) => {
    switch(action.type) {
        case "FETCH_TODOS": 
        return [...state, ...action.payload]
        default:
            return state
    }
}

export default todoReducer;