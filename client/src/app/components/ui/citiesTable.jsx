import React from 'react';
import PropTypes from 'prop-types';
import configFile from '../../config.json';

const CitiesTable = ({ onSort, selectedSort, items }) => {
    const selectedOrderAscending = selectedSort.order === 'asc';
    
    const handleSort = (item) => {
        selectedSort.path === item
            ? onSort({
                ...selectedSort,
                order: selectedOrderAscending ? 'desc' : 'asc'
            })
            : onSort({ path: item, order: 'asc' });
    };
    
    const renderSortArrow = (selectedSort, currentPath) => {
        return selectedSort.path !== currentPath
            ? null
            : <i className={`bi bi-caret-${selectedOrderAscending ? 'down' : 'up'}-fill`}></i>;
    };
    
    const transformConfigForTableHead = (configOptions, selectedSort, onSort, renderSortArrow) => {
        return Object.entries(configOptions).map((item, index) => (
            <th
                key={index}
                id={item[0]}
                onClick={item[0] !== 'date' ? () => onSort(item[0]) : null}
                role={item[0] !== 'date' ? 'button' : null}
                scope="col"
                className="col"
            >
                {item[1]}
                {renderSortArrow(selectedSort, item[0])}
            </th>
        ));
    };
    
    const transformItemsForTableBody = (items) => {
        return items.map((item, index) => (
            <tr key={index} className='row'>
                {Object.values(item).map((value, index) => (
                    <td key={index}
                        className="col">{value}</td>
                ))}
            </tr>
        ));
    };
    
    return (
        <>
            <table className="table table-striped table-hover caption-top">
                <caption>Список городов Ленобласти с информацией о населении и расстоянием от
                    Санкт-Петербурга
                </caption>
                <thead className="table-light container">
                <tr className='row'>
                    {transformConfigForTableHead(configFile.columns, selectedSort, handleSort, renderSortArrow)}
                </tr>
                </thead>
                <tbody className="container">
                {transformItemsForTableBody(items)}
                </tbody>
            </table>
        </>
    );
};
CitiesTable.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired
};

export default CitiesTable;
