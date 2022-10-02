import { createSlice } from '@reduxjs/toolkit';
import citiesDataService from '../services/citiesData.service';
import isOutdated from '../utils/isOutdated';

const citiesDataSlice = createSlice({
    name: 'citiesData',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        citiesDataRequested: (state) => {
            state.isLoading = true;
        },
        citiesDataReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.lastFetch = Date.now();
        },
        citiesDataRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: citiesDataReducer, actions } = citiesDataSlice;
const { citiesDataRequested, citiesDataReceived, citiesDataRequestFailed } = actions;

export const loadCitiesDataList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().citiesData;
    if (isOutdated(lastFetch)) {
        dispatch(citiesDataRequested());
        try {
            const { content } = await citiesDataService.get();
            dispatch(citiesDataReceived(content));
        } catch (error) {
            dispatch(citiesDataRequestFailed(error.message));
        }
    }
};

export const getCitiesData = () => (state) => state.citiesData.entities;
export const getCitiesDataLoadingStatus = () => (state) => state.citiesData.isLoading;

export default citiesDataReducer;
