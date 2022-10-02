import { combineReducers, configureStore } from '@reduxjs/toolkit';
import citiesDataReducer from './citiesSlice';

const rootReducer = combineReducers({
    citiesData: citiesDataReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
