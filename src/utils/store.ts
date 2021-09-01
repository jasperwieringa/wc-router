import { createStore, compose, combineReducers } from 'redux';
import { lazyReducerEnhancer } from 'pwa-helpers';

export const store = createStore(
  (state: any): any => state,
  compose(lazyReducerEnhancer(combineReducers))
);
