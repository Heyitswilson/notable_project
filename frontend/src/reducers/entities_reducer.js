import { combineReducers } from 'redux';
import dataReducer from './data_reducer';

const entitiesReducer = combineReducers({
    data: dataReducer
});

export default entitiesReducer;