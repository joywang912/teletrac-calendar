import { ToDo } from './types'

/** for test use, remove after component created */
// const INIT_STATE: ToDo = {dueDate: new Date(), description:'test', state: 'completed'}

const todoReducer = (state: Array<ToDo> = [], action: {type: string, payload: Object}) => {
    switch(action.type) {
        case "ADD_TODO": 
        default:
            return state
    }
}

export default todoReducer;