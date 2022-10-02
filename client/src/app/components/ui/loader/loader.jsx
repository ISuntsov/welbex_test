import React from 'react';
import './loader.css';

const Loader = () => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col"></div>
                <div className="col-sm-3 skeleton-loader">
                    <div className="skeleton-1">Загрузка</div>
                    <div className="skeleton-2"/>
                    <div className="skeleton-3"/>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Loader;
