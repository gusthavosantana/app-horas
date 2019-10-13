import { combineReducers } from 'redux';

import HourReducer from './hour';

export const Reducers = combineReducers({
    hour: HourReducer
});