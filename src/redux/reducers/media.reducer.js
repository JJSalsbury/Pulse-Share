const mediaReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MEDIA':
            return action.payload;
        case 'CLEAR_MEDIA':
            return {};
        default:
            return state;
    }
};
    
export default mediaReducer;
    