import { RECEIVE_DATA, RECEIVE_DATA_ERRORS } from '../actions/data_actions';

const dataReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_DATA: 
            return action.data;
        default: 
            return state;
    }
}

export default dataReducer;