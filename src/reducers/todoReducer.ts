interface ToDo {
    dueDate: Date;
    description: string;
    state: 'completed' | 'postponed' | 'undone';
}
const todoReducer = (state: Array<ToDo> = [], action: {type: string, payload: Object}) => {
    switch(action.type) {
        case "ADD_TODO": 
        default:
            return state
    }
}

export default todoReducer;