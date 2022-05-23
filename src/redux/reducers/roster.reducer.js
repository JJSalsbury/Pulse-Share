const rosterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ROSTER':
            return action.payload;
        case 'SET_SEARCHED_USER':
            return action.payload;    
        case 'RESET_ALL':
            return [];
        default:
            return state;
    }
};

export default rosterReducer;