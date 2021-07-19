import { GET_SONGS } from "./actions";

const initialState = {
    steps: [],
}

function stepReducer( state = initialState, action) {
    switch (action.type) {
        case GET_SONGS:
            return {...state, steps: action.payload};
        default:
            return state
    }
}

export default stepReducer