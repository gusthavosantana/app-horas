import { createStore } from 'redux';
import { Reducers } from '../reducers';

import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

export const Store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
