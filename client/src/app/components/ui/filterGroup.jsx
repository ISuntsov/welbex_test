import React from 'react';
import PropTypes from 'prop-types';
import SelectField from '../common/form/selectField';
import TextField from '../common/form/textField';
import configFile from '../../config.json';

const FilterGroup = ({ filterQuery, handleFilterQuery, clearFilter }) => {
    const { date, ...columnsWithoutDateFilter } = configFile.columns;
    const transformConfigForOptions = (configOptions) => Object.entries(configOptions).map((item) => ({
        label: item[1],
        value: item[0]
    }));
    
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-around">
                <SelectField
                    label="Фильтр по: "
                    options={transformConfigForOptions(columnsWithoutDateFilter)}
                    defaultOption="Выберите колонку"
                    name="column"
                    value={filterQuery.column}
                    onChange={handleFilterQuery}/>
                <SelectField
                    label="Условие: "
                    options={transformConfigForOptions(configFile.conditions)}
                    defaultOption="Выберите условие"
                    name="condition"
                    value={filterQuery.condition}
                    onChange={handleFilterQuery}/>
            </div>
            <div className="d-flex flex-row">
                <TextField
                    type="text"
                    name="filterValue"
                    value={filterQuery.filterValue}
                    onChange={handleFilterQuery}
                    placeholder="Поиск..."
                />
                <button
                    className="btn btn-secondary m-2"
                    onClick={clearFilter}>
                    Очистить
                </button>
            </div>
        </div>
    );
};

FilterGroup.propTypes = {
    filterQuery: PropTypes.object.isRequired,
    handleFilterQuery: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired
};

export default FilterGroup;
