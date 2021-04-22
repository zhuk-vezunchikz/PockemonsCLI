const initialState = {
    targetPockemon: []
}

function targetPockemonReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_TARGET_POCKEMON_REQUEST': return {
            ...state
        }
        case 'GET_TARGET_POCKEMON_SUCCESS': 
        return  {
            ...state,
            targetPockemon: action.payload
        }
        default: return state;
    }
}

export default targetPockemonReducer;
