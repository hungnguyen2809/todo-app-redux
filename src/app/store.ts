import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';

const composeEnhancers = composeWithDevTools();

export const store = createStore(rootReducers, composeEnhancers);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
