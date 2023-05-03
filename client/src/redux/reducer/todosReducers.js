const initstate = {
	contentData: [],
	isLoading: true
};

export const todosReducers = (state = initstate,action) =>{
    switch (action.type) {
        case 'ADDTODOS':
            return {
				...state,
				contentData: action.payload
			};
            
            case 'LOADING':
			return {
				...state,
				isLoading: true
			};
    
        default:
            return {
				...state
			};
    }
}

