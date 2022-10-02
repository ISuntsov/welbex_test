import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../ui/loader/loader';
import { getCitiesDataLoadingStatus, loadCitiesDataList } from '../../store/citiesSlice';

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const citiesStatusLoading = useSelector(getCitiesDataLoadingStatus());
    
    useEffect(() => {
        dispatch(loadCitiesDataList());
    }, []);
    
    if (citiesStatusLoading) return <Loader/>;
    
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
