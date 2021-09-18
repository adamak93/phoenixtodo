import { ADD_TODO, TOGGLE_TODO} from '../actionsTypes'
const initialState = {
    todos: []
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            const { id, content } = action.payload;
            return {
                todos: [
                    ...state.todos,
                    { content, completed: false, id}
                ]
            }
        default:
            return state;
    }
}

export default todos