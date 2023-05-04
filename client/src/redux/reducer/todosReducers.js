

export const todosReducers = (state = [],action) =>{
    switch (action.type) {
        case 'ADDTODOS':
            return [action.payload, ...state]
        case 'GETTODOS':
            return action.payload
        case 'TOGGLEDONE':
				return state.map(todo => (
					todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
				))
        case 'UPDATETODO':
				return state.map(todo => (
					todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
				))
        case 'DELETETODO':
				return state.filter(todo => todo._id !== action.payload._id);

        default:
            return state;
			
    }
}

