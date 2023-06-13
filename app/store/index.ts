'use client';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './combinedReducers';
export const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
